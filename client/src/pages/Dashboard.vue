<template>
  <div class="content">
    <card>
      <template slot="header">
        <h5 class="title">Audio list</h5>
        <!-- <p class="category">Handcrafted by our friends from <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a></p> -->
      </template>
      <div class="row">
        <div
          v-if="selectedFiles"
          class="font-icon-list col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-12 mb-4"
        >
          <div class="audio-payer-detail">
            <marquee behavior="scroll" direction="left">{{
              selectedFiles.fileName
            }}</marquee>
            <!-- <vue-plyr>
              <audio>
                <source :src="selectedFiles.fileUrl" :type="selectedFiles.fileType"/>
              </audio>
            </vue-plyr> -->

            <audio
              ref="audioRef"
              :src="selectedFiles.fileUrl"
              id="audio-container"
              width="100%"
              controls
              style="width: 100%"
            ></audio>
          </div>
        </div>
      </div>
    </card>

    <card>
      <table class="table table-condensed">
        <thead>
          <tr>
            <th>#</th>
            <th>File Name</th>
            <th>Uploaded At</th>
            <th>Size</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(file, index) in FILES">
            <tr
              @click="selectAudio(file)"
              :key="file._id"
              style="cursor: pointer;"
            >
              <td>{{ index + 1 }}</td>
              <td class="text-left">{{ file.fileName }}</td>
              <td>{{ getDateFormate(file.uploadedAt) }}</td>
              <td>{{ sizeofFile(file.size) }}</td>
              <td>
                <i
                  class="tim-icons icon-trash-simple"
                  style="cursor: pointer;"
                  @click="deleteFile(file._id)"
                ></i>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </card>
  </div>
</template>
<script>
import { Card } from "@/components/index";
import GLOBAL_MIXINS from "../mixins/global.mixins";
import moment from "moment";

export default {
  components: {
    Card,
  },
  mixins: [GLOBAL_MIXINS],
  data() {
    return {
      selectedFiles: null,
      getDateFormate(date) {
        if (date) {
          return moment(date).format("MM/DD/YYYY h:mm:SS A");
        }
      },
      sizeofFile(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes";

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return (
          parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
        );
      },
    };
  },
  computed: {},
  methods: {
    selectAudio(file) {
      this.selectedFiles = file;
    },
    deleteFile(fileId) {
      if (fileId) {
        var isOkPress = confirm(
          "Are you sure you want to delete this file? You will not get back"
        );

        if (isOkPress === true) {
          this.DELETE_FILE(fileId).then((res) => {
            console.log(res);
            this.FETCH_FILES();
          });
        }
      }
    },
  },
  created() {
    if (!this.LOGGED_IN) {
      this.$router.replace(`/login`);
    }
  },
  mounted() {
    this.FETCH_FILES();

    if (this.FILES && this.FILES[0]) {
      this.selectedFiles = this.FILES[0];
    }
  },
};
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
