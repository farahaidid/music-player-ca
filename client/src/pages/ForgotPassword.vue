<template>
  <card class="forgot-password-container">
    <template slot="header">
      <h4 class="title">Reset your password</h4>
    </template>

    <base-alert v-if="error" type="danger" dismissible>
      {{ error }}
    </base-alert>

    <base-alert v-if="success" type="primary" dismissible>
      {{ success }}
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
          label="New Password"
          type="password"
          v-model="newPass"
          placeholder="New Password"
        >
        </base-input>
      </div>

      <div class="col-md-12 pr-md-1 text-left">
        <base-input
          label="Confirm"
          type="password"
          v-model="confirmNewPass"
          placeholder="Confirm Password"
        >
        </base-input>
      </div>
    </div>

    <template slot="footer">
      <base-button class="mr-3" type="success" fill @click="onResetPassword"
        >Reset password</base-button
      >
      <router-link to="/register" class="mr-4">Create account</router-link>
      <router-link to="/login">Login here</router-link>
    </template>
  </card>
</template>

<script>
import GLOBAL_MIXINS from "../mixins/global.mixins";

import { Card, BaseInput } from "@/components/index";
import BaseButton from "@/components/BaseButton";
import BaseRadio from "@/components/BaseRadio.vue";
import BaseAlert from "@/components/BaseAlert.vue";

export default {
  name: "ForgotPassword",
  data: () => ({
    email: "",
    newPass: "",
    confirmNewPass: "",
    error: null,
    success: null,
  }),
  components: {
    Card,
    BaseInput,
    BaseButton,
    BaseRadio,
    BaseAlert,
  },
  mixins: [GLOBAL_MIXINS],
  methods: {
    async onResetPassword() {
      if (this.email.trim() === "") {
        this.error = "Enter your email address";
      } else if (this.newPass.trim() === "") {
        this.error = "Enter a new password";
      } else if (this.newPass !== this.confirmNewPass) {
        this.error = "Password doesn't matched!";
      } else {
        this.error = null;
        let { error, message } = await this.RESET_PASSWORD({
          email: this.email,
          password: this.newPass,
        });
        if (error) this.error = error;
        else {
          this.success = "Password successfully updated";
        }
        this.email = "";
        this.newPass = "";
        this.confirmNewPass = "";
      }
    },
  },
};
</script>

<style lang="scss">
.forgot-password-container {
  width: 50rem;
  margin: 3rem auto 4rem auto;
  padding: 1rem;
}
</style>
