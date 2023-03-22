<template>
  <div class="home">
    <div class="course-page-wrapper">
      
      <div class="menus">
        <div class="iu-logo-on-menu-page" id="iu_logo">
          <img src="@/assets/icons/IU_logo.png" alt="UniversityImage" />
        </div>
        
        <div class="menu-buttons">
          <div class="add-course-button">
            <img src="@/assets/icons/add_course.png" alt="Add logo" class="menu-icon">
            Add new course
          </div>

          <div class="list-of-courses-button">
            <img src="@/assets/icons/courses_list.png" alt="Add logo" class="menu-icon">
            List of courses
          </div>

          <div class="generator-button">
            <img src="@/assets/icons/timetable_generator.png" alt="Add logo" class="menu-icon">
            Generator
          </div>
          
        </div>
      </div>

      <div>qqq</div>
      
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: "HomeView",
  components: { Button },
  setup() {
    function login() {
      console.log('login')
    }

    return {
      login,
    }
  }
};
</script>
<style scoped>

.generator-button{
  padding: 12px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.list-of-courses-button{
  padding: 12px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.add-course-button{
  padding: 12px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
}

.iu-logo-on-menu-page{
  margin-top: 22px;
  margin-right: 53px;
  margin-bottom: 23px;
  margin-left: 25;
}

.menu-icon{
  margin-right: 10px;
}

.menu-buttons{
  font-size: 14px;
  width: 252px;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.menus{
  display: block;
  width: 252px;
}

.course-page-wrapper {
  max-width: 1440px;
  display: flex;
}

</style>
