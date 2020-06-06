<template>
  <v-app>
    <div class="app-container">
      <div class="main">
        <app-bar/>
        <router-view/>
      </div>
    </div>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
export default {
  name: 'App',
  components: { AppBar },
};
</script>

<style scoped>
.app-container{
  display: flex;
  justify-content: center;
}
.main{
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 500px;
  min-width: 320px;
  width: 100%;
}
</style>
