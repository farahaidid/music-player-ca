<template>
  <card class="login-container">
    <template slot="header">
      <h4 class="title">Login to your account</h4>
    </template>

    <base-alert v-if="error" type="danger" dismissible>
      {{error}}
    </base-alert>

    <div class="row">
      <div class="col-md-12 pr-md-1 text-left">
        <base-input
          label="Email address"
          type="email"
          v-model="email"
          placeholder="Enter your email address"
        >
        </base-input>
      </div>

      <div class="col-md-12 pr-md-1 text-left">
        <base-input
          label="Password"
          type="password"
          v-model="password"
          placeholder="Enter your password"
        >
        </base-input>
      </div>
    </div>

    <template slot="footer">
      <base-button class="mr-3" type="success" fill @click="login"
        >LOGIN</base-button
      >
      <router-link to="/register" class="mr-4">Create account</router-link>
      <!-- <base-button class="mr-3" type="danger" @click="reset(true)"
        >Reset</base-button
      > -->
      <router-link to="/forgot-password">Forgot password?</router-link>
    </template>
  </card>
</template>

<script>
import GLOBAL_MIXINS from "../mixins/global.minins";
import { mapActions } from "vuex";

import { Card, BaseInput } from "@/components/index";
import BaseButton from "@/components/BaseButton";
import BaseRadio from "@/components/BaseRadio.vue";
import BaseAlert from "@/components/BaseAlert.vue";

export default {
  name: "Login",
  components: {
    Card,
    BaseInput,
    BaseButton,
    BaseRadio,
    BaseAlert,
  },
  data() {
    return {
      email: "",
      password: "",
    error: null
    };
  },
  mixins: [GLOBAL_MIXINS],
  methods: {
    async login() {
      if (this.email.trim() !== "" && this.password.trim() !== "") {
        let { error, user } = await this.LOGIN({
          email: this.email,
          password: this.password,
        });
        console.log("user", user);
        console.log("error", error);
        
        if (error) this.error = error;
        else {
          this.reset();
          this.$router.replace(`/user`);
        }
      }
    },
    reset() {
      this.email = this.password = "";
      this.error = null;
    },
  },
  created() {
    this.LOGGED_IN && this.$router.replace(`/user/profile`);
  },
};
</script>

<style lang="scss">
.login-container {
  width: 50rem;
  margin: 3rem auto 4rem auto;
  padding: 1rem;
}
</style>
