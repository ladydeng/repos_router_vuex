<template>
  <div class="home">
    <h2>Home Page</h2>
    <p>欢迎<strong>{{ $store.state.name }}!</strong></p>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>