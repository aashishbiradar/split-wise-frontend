<template>
  <div>
    <v-app-bar
      color="indigo darken-4"
      dense
      dark
    >
      <router-link to="profile">
        <v-avatar
          size="36"
        >
          <v-icon color="white">{{ icons.mdiAccountCircle }}</v-icon>
        </v-avatar>
      </router-link>
      <v-toolbar-title class="brand">
        <router-link to="/" class="brand-name">Splitwise</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>

import { mdiAccountCircle } from '@mdi/js';

export default {
  name: 'AppBar',
  data: () => ({
      icons: {
        mdiAccountCircle
      },
  })
}
</script>

<style scoped>
.brand {
  margin-left: calc(50% - 96px);;
}
.brand-name {
  text-decoration: none;
  color: #fff;
}
</style>