<template>
  <div class="content">
    <card>
      <template slot="header">
        <h5 class="title">Audio list</h5>
        <!-- <p class="category">Handcrafted by our friends from <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a></p> -->
      </template>
      <div class="row">
        <template v-for="file in FILES">
          <div v-if="file.fileType === 'audio/mp3' || file.fileType === 'audio/x-m4a'" class="font-icon-list col-lg-4 col-md-6 col-sm-6 col-xs-6 col-xs-6 mb-4" 
          :key="file._id">
            <div class="audio-payer-detail">
              <marquee behavior="scroll" direction="left">{{file.fileName}}</marquee>

              <!-- <div class="truncate">{{file.fileName}}</div> -->
              <vue-plyr>
                <audio>
                  <source :src="file.fileUrl" :type="file.fileType"/>
                </audio>
              </vue-plyr>
            </div>
          </div>
        </template>
      </div>
    </card>
  </div>
</template>
<script>
import {
  Card
} from "@/components/index";
import GLOBAL_MIXINS from "../mixins/global.mixins";

export default {
  components: {
    Card,
  },
  mixins: [GLOBAL_MIXINS],
  data(){
    return{

    }
  },
  computed:{
    
  },
  methods:{
    
  },
  created() {
    if (!this.LOGGED_IN) {
      this.$router.replace(`/login`)
    }
  },
  mounted(){
    this.FETCH_FILES();
  }
}
</script>
<style>
.audio-payer-detail {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}
.truncate {
  width: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
