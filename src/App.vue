<template>
  <the-header tittle="Remember Me"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from './Components/layouts/TheHeader.vue';
import TheResources from './Components/learning-resources/TheResources.vue';

export default {
  components: {
    TheHeader,
    TheResources
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
