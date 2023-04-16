import { ProcessFactory } from '@lib/process/factory'
import { DefaultProcess } from '@lib/process/process'
import { NpmProcess } from '@lib/process/runners/npm'
import { YarnProcess } from '@lib/process/runners/yarn'
import pool from '@lib/process/pool'

jest.mock('@lib/process/pool')
jest.mock('child_process', () => ({
    spawn: jest.fn().mockReturnValue({
        on: jest.fn(),
        stdout: {
            setEncoding: jest.fn(),
            on: jest.fn()
        },
        stderr: {
            setEncoding: jest.fn(),
            on: jest.fn()
        }
    })
}))

it('can make new processes', () => {
    const spawned = ProcessFactory.make({
        command: 'biscuit'
    })
    expect(spawned).toBeInstanceOf(DefaultProcess)
    expect(pool.add).toHaveBeenCalledTimes(1)
    expect(pool.add).toHaveBeenCalledWith(spawned, undefined)
})

it('can pool new processes with specific ids', () => {
    const spawned = ProcessFactory.make({
        command: 'biscuit'
    }, 42)
    expect(spawned).toBeInstanceOf(DefaultProcess)
    expect(pool.add).toHaveBeenCalledTimes(1)
    expect(pool.add).toHaveBeenCalledWith(spawned, 42)
})

it('can make specific processes by parsing command', () => {
    const npm = ProcessFactory.make({
        command: 'npm run biscuit'
    })
    expect(npm).toBeInstanceOf(NpmProcess)
    expect(pool.add).toHaveBeenLastCalledWith(npm, undefined)

    const yarn = ProcessFactory.make({
        command: 'yarn biscuit'
    })
    expect(yarn).toBeInstanceOf(YarnProcess)
    expect(pool.add).toHaveBeenLastCalledWith(yarn, undefined)

    expect(pool.add).toHaveBeenCalledTimes(2)
})

it('can force a specific runner from the options', () => {
    const yarn = ProcessFactory.make({
        command: 'npm run biscuit',
        forceRunner: 'yarn'
    })
    expect(yarn).toBeInstanceOf(YarnProcess)
    expect(pool.add).toHaveBeenCalledTimes(1)
    expect(pool.add).toHaveBeenCalledWith(yarn, undefined)
})

it('falls back to default process if forced runner does not exist', () => {
    const spawned = ProcessFactory.make({
        command: 'biscuit',
        forceRunner: 'cake'
    })
    expect(spawned).toBeInstanceOf(DefaultProcess)
    expect(pool.add).toHaveBeenCalledTimes(1)
    expect(pool.add).toHaveBeenCalledWith(spawned, undefined)
})

it('can parse multiple reports in the same chunk with end delimiter', (done) => {
    process.env.FROM_FILE = Path.join(fixtures, '12.json')
    const spy = jest.fn()
    new DefaultProcess()
        .on('report', spy)
    process.nextTick(() => {
        expect(spy).toHaveBeenCalledTimes(2)
        expect(spy.mock.calls[0][0].report).toEqual(decoded)
        expect(spy.mock.calls[1][0].report).toEqual(decoded)
        done()
    })
})

it('can parse multiple reports in the same chunk with both delimiters', (done) => {
    process.env.FROM_FILE = Path.join(fixtures, '13.json')
    const spy = jest.fn()
    new DefaultProcess()
        .on('report', spy)
    process.nextTick(() => {
        expect(spy).toHaveBeenCalledTimes(2)
        expect(spy.mock.calls[0][0].report).toEqual(decoded)
        expect(spy.mock.calls[1][0].report).toEqual(decoded)
        done()
    })
})

it('can parse multiple reports in the same chunk with stray whitespace', (done) => {
    process.env.FROM_FILE = Path.join(fixtures, '14.json')
    const spy = jest.fn()
    new DefaultProcess()
        .on('report', spy)
    process.nextTick(() => {
        expect(spy).toHaveBeenCalledTimes(2)
        expect(spy.mock.calls[0][0].report).toEqual(decoded)
        expect(spy.mock.calls[1][0].report).toEqual(decoded)
        done()
    })
})

it('can parse multiple buffered reports', (done) => {
    process.env.FROM_FILE = Path.join(fixtures, '15.json')
    const spy = jest.fn()
    new DefaultProcess()
        .on('report', spy)
    process.nextTick(() => {
        expect(spy).toHaveBeenCalledTimes(2)
        expect(spy.mock.calls[0][0].report).toEqual(decoded)
        expect(spy.mock.calls[1][0].report).toEqual(decoded)
        done()
    })
})

it('can buffer reports with chunked start wrapper', (done) => {
    process.env.FROM_FILE = Path.join(fixtures, '16.json')
    const spy = jest.fn()
    new DefaultProcess()
        .on('report', spy)
    process.nextTick(() => {
        expect(spy.mock.calls.length).toBe(1)
        expect(spy.mock.calls[0][0].report).toEqual(decoded)
        done()
    })
})

it('can buffer reports with chunked end wrapper', (done) => {
    process.env.FROM_FILE = Path.join(fixtures, '17.json')
    const spy = jest.fn()
    new DefaultProcess()
        .on('report', spy)
    process.nextTick(() => {
        expect(spy.mock.calls.length).toBe(1)
        expect(spy.mock.calls[0][0].report).toEqual(decoded)
        done()
    })
})

it('can buffer reports with chunked wrappers and padding', (done) => {
    process.env.FROM_FILE = Path.join(fixtures, '18.json')
    const spy = jest.fn()
    new DefaultProcess()
        .on('report', spy)
    process.nextTick(() => {
        expect(spy.mock.calls.length).toBe(1)
        expect(spy.mock.calls[0][0].report).toEqual(decoded)
        done()
    })
})

it('stores only stray content, not report content', (done) => {
    process.env.FROM_FILE = Path.join(fixtures, '19.json')
    const spy = jest.fn()
    const spawned = new DefaultProcess()
        .on('report', spy)
    process.nextTick(() => {
        expect(spy.mock.calls.length).toBe(1)
        expect(spy.mock.calls[0][0].report).toEqual(decoded)
        expect(spawned.chunks).toEqual([
            'Starting...',
            '\n<<<REPORT{\n',
            '\n}REPORT>>>',
            'Ended!'
        ])
        done()
    })
})

it('handles interrupted report streams', (done) => {
    process.env.FROM_FILE = Path.join(fixtures, '20.json')
    const spy = jest.fn()
    const spawned = new DefaultProcess()
        .on('report', spy)
    process.nextTick(() => {
        expect(spy.mock.calls.length).toBe(1)
        expect(spy.mock.calls[0][0].report).toEqual(decoded)
        expect(spawned.chunks).toEqual([
            'Starting...',
            '\n<<<REPORT{\n',
            'Ended!'
        ])
        expect(spawned.reportClosed).toBe(false)

        // Force the process to close again, this time with an error exit
        // code, to ensure error message is well built.
        expect(() => {
            spawned.close(-1)
        }).toThrow()
        expect(spawned.error).toBe('Starting...\n<<<REPORT{\nEnded!')
        done()
    })
})

it('passes options from factory to process', () => {
    const spawned = ProcessFactory.make({
        command: 'biscuit',
        args: ['hobnobs', 'digestives'],
        ssh: false,
        sshOptions: {
            host: 'mcvities'
        },
        platform: 'linux'
    })
    expect(spawned).toBeInstanceOf(DefaultProcess)
    expect(spawned.command).toBe('biscuit')
    expect(spawned.args).toEqual(['hobnobs', 'digestives'])
    expect(spawned.platform).toBe('linux')
})