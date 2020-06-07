<template>
  <v-sheet class="profile-view" color="indigo lighten-5">
    <v-card class="user-card">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Profile</div>
        <v-list-item-title class="headline mb-1">{{user.name}}</v-list-item-title>
        <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        size="48"
        color="indigo"
      >
      <v-icon color="white">{{ icons.mdiAccountCircle }}</v-icon>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
        <v-btn
            @click="logout"
            color="error"
        >
        <v-icon>{{ icons.mdiLogoutVariant }}</v-icon> Logout
        </v-btn>
    </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>

import { mdiLogoutVariant, mdiAccountCircle } from '@mdi/js';

export default {
  name: 'Profile',
  data: () => ({
      icons: {
        mdiLogoutVariant,
        mdiAccountCircle
      },
      user: {},
  }),
  async created() {
      await this.$store.getters.appReady;
      this.user = this.$store.getters.user;
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-view{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
}
.user-card{
  margin: 15px;
  padding: 15px;
  flex-grow: 1;
  margin-top: 10%;
}
</style>