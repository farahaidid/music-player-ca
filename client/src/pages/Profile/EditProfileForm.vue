<template>
  <card>
    <template slot="header">
      <h5 class="title">Edit Profile</h5>
    </template>
     <base-alert v-if="error" type="warning" dismissible>
      {{error}}
    </base-alert>
    <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input label="First Name"
                  v-model="firstName"
                  placeholder="First Name">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <base-input label="Last Name"
                  v-model="lastName"
                  placeholder="Last Name">
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 pr-md-1 text-left">
        <base-input label="Phone"
                  v-model="phone"
                  placeholder="Phone Number">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1 text-left">
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
      <div class="col-md-4 pr-md-1 text-left">
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
    </div>
    <template slot="footer">
      <base-button type="success" fill @click="updateUser">Save</base-button>
    </template>
  </card>
</template>
<script>

import moment from "moment";
import GLOBAL_MIXINS from "../../mixins/global.mixins";

import {Card, BaseInput} from "@/components/index";
import BaseButton from '@/components/BaseButton';
import Datepicker from "vuejs-datepicker";
import BaseRadio from "@/components/BaseRadio.vue";
import BaseAlert from "@/components/BaseAlert.vue";

export default{
  name: "Profile",
  components:{
    Card,
    BaseInput,
    BaseButton,
    Datepicker,
    BaseRadio,
    BaseAlert,
  },
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      error: null,
      success: null,
      update: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      gender: "male",
      dateOfBirth: "",
    }
  },
  mixins: [GLOBAL_MIXINS],
  computed: {
		fullName() {
			let { firstName, lastName } = this.LOGGED_USER
			return `${firstName} ${lastName}`
		},
		dob() {
			return moment(this.LOGGED_USER.dateOfBirth).format("LL")
    },
    strFields: () => [
      "firstName",
      "lastName",
      "email",
      "phone",
      "dateOfBirth",
    ],
	},
	watch: {
		LOGGED_USER(user) { this.setUpdateData() },
		update(val) {
			val === true && this.setUpdateData()
		}
  },
  methods: {
		setUpdateData() {
      let dob = new Date(this.LOGGED_USER.dateOfBirth).toISOString().substr(0, 10);
			this.updateData = { ...this.LOGGED_USER, dateOfBirth: dob }
    },
    customFormatter(date) {
      return moment(date).format("DD/MM/YYYY");
    },
    doSomethingInParentComponentFunction(date) {
      this.dateOfBirth = date.toISOString();
    },
    updateUser() {
      let updateData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        gender: this.gender,
        dateOfBirth: this.dateOfBirth, 
        phone: this.phone
      }

      let valid = this.validate(updateData)
			if (!valid) {
				this.error = "Please fill the informations correctly"
				this.success = null
			} else {
        this.error = null;
        this.UPDATE_USER_PROFILE(updateData).then(({ error, message }) => {
					if (error) { this.error = error }
					else { this.success = "Profile updated successfully"; this.update = false }
				})
      }
      
    },
    validate(updateData) {
      // return updateData.foreach(f => f.trim() !== "")
      return this.strFields.every((f) => this[f].trim() !== "");
		}
  },
  created() {
    // if (this.LOGGED_IN) { this.FETCH_USER_PROFILE() }
    // else { this.$router.replace("/login") }
  },
  mounted() {
    if (this.LOGGED_USER) {
      this.firstName = this.LOGGED_USER.firstName;
      this.lastName = this.LOGGED_USER.lastName;
      this.email = this.LOGGED_USER.email;
      // password: "",
      this.phone = this.LOGGED_USER.phone;
      this.gender = this.LOGGED_USER.gender;
      this.dateOfBirth= this.LOGGED_USER.dateOfBirth;
    }
  }
}
</script>
<style lang="scss">
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
</style>
