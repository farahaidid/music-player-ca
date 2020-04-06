<template>
  <div class="content">
    <card>
      <template slot="header">
        <!-- <h5 class="title">Your audio list</h5> -->
        <!-- <p class="category">Handcrafted by our friends from <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a></p> -->
      </template>
      <div class="row">
        <div v-for="file in 10" class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6" :key="file">
          <div class="font-icon-detail">
            <!-- <i class="tim-icons" :class="[`${icon}`]"></i> -->
            <p>Audio file  {{ file }}</p>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>
<script>

import {
  Card
} from "@/components/index";


export default {
  components: {
    Card,
  },
  data(){
    return{

    }
  },
  computed:{
    
  },
  methods:{
    
  },
  mounted(){
    
  }
}
</script>
<style>
</style>
