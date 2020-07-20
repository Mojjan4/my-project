<template>
  <div>
    <button @click="handleClick">{{ name }}</button>
  </div>
</template>

<script>
export default {
  props: ["name", "handleClick"]
};
</script>

<style>
</style>