
    <!-- lagt till en komponent för prop som gör en alert i about.vue.  -->
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