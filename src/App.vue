<template>
  <div id="app">
    <resume></resume>
  </div>
</template>

<script>
import resume from './components/resume.vue'

export default {
  name: 'app',
  components: {
    resume
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway:400,500,600&display=swap');

#app {
  font-family: 'Raleway', sans-serif;
}
</style>
