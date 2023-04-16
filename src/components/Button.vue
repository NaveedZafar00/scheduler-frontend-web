<template>
  
    <div class="button-primary">
      <img v-if="true" src="../assets/icons/logout.png" alt="">{{ label }}
      </div>
</template>
<script>

export default {
  name: "Button",
  components: {},
  props: ['label', 'hasImg'],
  setup(props) {
    console.log(props)
  }
};
</script>
  
  <style scoped>
  .button-primary {
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;
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
  