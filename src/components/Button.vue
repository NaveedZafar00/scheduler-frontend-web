<template>
    <div class="button-primary">{{ label }}</div>
</template>
<script>

export default {
  name: "Button",
  components: {},
  props: ['label'],
  setup(props) {
    console.log(props)
  }
};
</script>
  
  <style scoped>
  .button-primary {
  background: #FF8838;
  border-radius: 16px;
  padding: 16px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.button-primary:hover {
  background: #ff8838d5;
}
  </style>
  