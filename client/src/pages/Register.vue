<template>
  <card class="register-container">
    <template slot="header">
      <h4 class="title">Create Your Profile</h4>
    </template>

    <base-alert v-if="errorMsg" type="warning" dismissible>
      {{ errorMsg }}
    </base-alert>

    <base-alert v-if="sucMsg"  type="primary" dismissible>
      {{sucMsg}}
    </base-alert>

    <div class="row">
      <div class="col-md-12 pr-md-1 text-left">
        <base-input
          label="First Name"
          v-model="firstName"
          placeholder="First Name"
        >
        </base-input>
      </div>
      <div class="col-md-12 pr-md-1 text-left">
        <base-input
          label="Last Name"
          v-model="lastName"
          placeholder="Last Name"
        >
        </base-input>
      </div>
      <div class="col-md-12 pr-md-1 text-left">
        <base-input
          label="Email address"
          type="email"
          v-model="email"
          placeholder="mike@email.com"
        >
        </base-input>
      </div>
      <div class="col-md-12 pr-md-1 text-left">
        <base-input
          label="Password"
          type="password"
          v-model="password"
          placeholder="Password"
        >
        </base-input>
      </div>
      <div class="col-md-12 pr-md-1 text-left">
        <base-input
          label="Phone"
          type="Number"
          v-model="phone"
          placeholder="Your phone number"
        >
        </base-input>
      </div>

      <div class="col-md-12 pr-md-1 text-left">
        <div class="form-group">
          <label>Gender</label>
          <div>
            <base-radio inline name="male" class="mb-3" v-model="gender">
              Male
            </base-radio>
            <base-radio inline name="female" class="mb-3" v-model="gender">
              Female
            </base-radio>
          </div>
        </div>
      </div>

      <div class="col-md-12 pr-md-1 text-left">
        <div class="form-group">
          <label for="" class="control-lable">Birthday</label>

          <datepicker
            @selected="doSomethingInParentComponentFunction"
            :value="dateOfBirth"
            :format="customFormatter"
            class="date-picker"
          ></datepicker>
        </div>
      </div>
    </div>

    <template slot="footer">
      <base-button class="mr-3" type="success" fill @click="onSubmit"
        >Submit</base-button
      >
      <base-button class="mr-3" type="danger" @click="reset(true)"
        >Reset</base-button
      >
      <router-link class="already-account" to="/login">Already have an account?</router-link>
    </template>
  </card>
</template>

<script>
import moment from "moment";
import { API } from "../axios/config.axios";

import { Card, BaseInput } from "@/components/index";
import Datepicker from "vuejs-datepicker";

import BaseButton from "@/components/BaseButton";
import BaseRadio from "@/components/BaseRadio.vue";
import BaseAlert from "@/components/BaseAlert.vue";

export default {
  components: {
    Card,
    BaseInput,
    BaseButton,
    BaseRadio,
    Datepicker,
    BaseAlert,
  },
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      gender: "male",
      dateOfBirth: "",

      errorMsg: null,
      sucMsg: null,
    };
  },
  computed: {
    strFields: () => [
      "firstName",
      "lastName",
      "email",
      "password",
      "phone",
      "dateOfBirth",
    ],
  },
  methods: {
    reset(all) {
      this.strFields.forEach((key) => (this[key] = ""));
      this.dateOfBirth = Date.now();
      this.gender = "male";
      if (all) this.errorMsg = this.sucMsg = null;
    },
    async onSubmit() {
      console.log("birthday", this.birthday);
      let valid = this.validate();
      if (!valid) {
        this.errorMsg = "Please fill the form correctly!";
        return;
      }
      this.errorMsg = null;

      let userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        dateOfBirth: this.dateOfBirth,
        gender: this.gender,
        phone: this.phone,
      };

      try {
        let data = (await API.post("users", userData)).data;

        if (data.code === 409) {
          this.errorMsg = "User already exist. Please login!";
          this.sucMsg = null;
        } else {
          this.sucMsg = data.message;
          this.errorMsg = null;
        }
        this.reset();
      } catch (error) {
        console.log(error);
        this.errorMsg = error.response.message;
      }
    },
    doSomethingInParentComponentFunction(date) {
      this.dateOfBirth = date.toISOString();
    },
    customFormatter(date) {
      return moment(date).format("DD/MM/YYYY");
    },
    validate() {
      return this.strFields.every((f) => this[f].trim() !== "");
    },
  },
};
</script>

<style lang="scss">
.register-container {
  width: 50rem;
  margin: 3rem auto 4rem auto;
  padding: 1rem;
}
.date-picker {
  input {
    padding: 10px 18px 10px 18px;
    color: #222a42;
    border-color: rgba(29, 37, 59, 0.5);
    border-radius: 0.4285rem;
    font-size: 0.75rem;
    transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    background-color: transparent;
    background-clip: padding-box;
    border: 1px solid #cad1d7;
  }
}

.already-account {
  color: #0056b3;
  text-decoration: none;
}
</style>
