<template>
  <v-sheet class="login-view" color="indigo lighten-5">
    <v-card class="centered-card">
      <v-form>
        <v-container>
          <v-row>
            <v-text-field
              v-model="email"
              :append-icon="icons.mdiAt"
              label="Email"
              placeholder="johnsnow@thewall.com"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              v-model="password"
              :append-icon="icons.mdiLockQuestion"
              label="Password"
              placeholder="********"
              type="password"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-btn
              @click="login"
              block
              color="primary"
              height="40"
            >
            <v-icon>{{ icons.mdiShieldKey }}</v-icon> Login
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>
import { mdiAt, mdiLockQuestion, mdiShieldKey } from '@mdi/js';

export default {
  name: 'Login',
  async beforeCreate() {
    const isLoggedIn = this.$store.getters.isLoggedIn;
    console.log(isLoggedIn);
    if (isLoggedIn) {
      this.$router.push('/');
    }
  },
  data: () => ({
      icons: {
        mdiAt,
        mdiLockQuestion,
        mdiShieldKey
      },
      email: null,
      password: null
  }),
  methods: {
    async login() {
      const { email, password } = this
      const { error } = await this.$store.dispatch('login', { email, password });
      if (!error) {
        this.$router.push('/');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-view{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
}
.centered-card{
  margin: 15px;
  padding: 15px;
  flex-grow: 1;
  margin-top: 40%;
}
</style>