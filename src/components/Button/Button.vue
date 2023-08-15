<template>
    <button class="my-button">
      <slot></slot>
    </button>
  </template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Button',
  props: {

  }
}
</script>
  
  <style scoped>
  .my-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>