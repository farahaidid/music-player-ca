<template>
  <card>
    <template slot="header">
      <h5 class="title">Edit Profile</h5>
    </template>
    <div class="row">
      <div class="col-md-6 pr-md-1 text-left">
        <base-input label="First Name"
                  v-model="model.firstName"
                  placeholder="First Name">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1 text-left">
        <base-input label="Last Name"
                  v-model="model.lastName"
                  placeholder="Last Name">
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 pr-md-1 text-left">
        <base-input label="Phone"
                  v-model="model.city"
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
      <base-button type="success" fill>Save</base-button>
    </template>
  </card>
</template>
<script>
import {
  Card,
  BaseInput
} from "@/components/index";

import BaseButton from '@/components/BaseButton';
import GLOBAL_MIXINS from "../../mixins/global.minins";
import moment from "moment";
import Datepicker from "vuejs-datepicker";
import BaseRadio from "@/components/BaseRadio.vue";

export default{
  components:{
    Card,
    BaseInput,
    BaseButton,
    Datepicker,
    BaseRadio,
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
    dateOfBirth: ""
    }
  },
  mixins: [GLOBAL_MIXINS],
	watch: {
		LOGGED_USER(user) { this.setUpdateData() },
		update(val) {
			val === true && this.setUpdateData()
		}
  },
  methods: {
		setUpdateData() {
			let dob = new Date(this.LOGGED_USER.dateOfBirth).toISOString().substr(0, 10)
			this.updateData = { ...this.LOGGED_USER, dateOfBirth: dob }
    },
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
