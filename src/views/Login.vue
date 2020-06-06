<template>
  <v-sheet class="login-view" color="indigo lighten-5">
    <v-card class="centered-card">
      <v-form>
        <v-container>
          <v-row>
            <v-text-field
              :append-icon="mdiAt"
              label="Email"
              placeholder="johnsnow@targaryen.com"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              :append-icon="mdiLockQuestion"
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
            <v-icon>{{ mdiShieldKey }}</v-icon> Login
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
  data: () => ({
      mdiAt: mdiAt,
      mdiLockQuestion: mdiLockQuestion,
      mdiShieldKey: mdiShieldKey
  }),
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