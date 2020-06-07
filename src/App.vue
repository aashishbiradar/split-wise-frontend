<template>
  <v-app>
    <div class="app-container">
      <v-sheet class="main">
        <app-bar/>
        <router-view/>
      </v-sheet>
    </div>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
export default {
  name: 'App',
  components: { AppBar },
  beforeCreate() {
    const appReady = this.$store.dispatch('authenticate');
    this.$store.dispatch('appReady', appReady);
  }
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
  min-height: 100vh;
  max-width: 500px;
  min-width: 320px;
  width: 100%;
}
</style>
