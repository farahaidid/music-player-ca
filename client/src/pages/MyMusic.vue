<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <card>
          <template slot="header">
            <h4 class="card-title">Files</h4>
          </template>
          <!-- <div class="table-responsive text-left">
            <base-table
              :data="table1.data"
              :columns="table1.columns"
              thead-classes="text-primary"
            >
            </base-table>
          </div> -->
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
              <tr v-for="(file, index) in FILES" :key="file._id">
                <td>{{index + 1}}</td>
                <td>{{file.fileName}}</td>
                <td>{{getDateFormate(file.uploadedAt)}}</td>
                <td>{{sizeofFile(file.size)}}</td>
                <td>
                  <i class="tim-icons icon-trash-simple" style="cursor: pointer;" @click="deleteFile(file._id)"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </card>
      </div>
    </div>

    <div class="file-upload">
        <card>
            <vue-dropzone ref="myVueDropzone" id="dropzone" class="customdropzone" 
             @vdropzone-file-added="vfileAdded" @vdropzone-complete="afterComplete" :options="dropzoneOptions" :useCustomSlot=true>
                <div class="dropzone-custom-content">
                    <i class="fa fa-cloud-upload"></i>
                    <span class="dropzone-custom-title"> Choose files or drag & drop here</span>
                </div>
            </vue-dropzone>
            <!-- <button @click="removeAllFiles()">Remove All Files</button> -->
        </card>
    </div>
  </div>
</template>
<script>
import moment from "moment"
import GLOBAL_MIXINS from "../mixins/global.mixins";

import { Card } from "@/components/index";
import BaseTable from "@/components/BaseTable";
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

const tableColumns = ["Name", "Country", "City", "Salary"];
const tableData = [
  {
    id: 1,
    name: "Dakota Rice",
    salary: "$36.738",
    country: "Niger",
    city: "Oud-Turnhout",
  },
  {
    id: 2,
    name: "Minerva Hooper",
    salary: "$23,789",
    country: "Curaçao",
    city: "Sinaai-Waas"
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    salary: "$56,142",
    country: "Netherlands",
    city: "Baileux"
  },
  {
    id: 4,
    name: "Philip Chaney",
    salary: "$38,735",
    country: "Korea, South",
    city: "Overland Park"
  },
  {
    id: 5,
    name: "Doris Greene",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten"
  },
  {
    id: 6,
    name: 'Mason Porter',
    salary: '$98,615',
    country: 'Chile',
    city: 'Gloucester'
  },
  {
    id: 7,
    name: 'Jon Porter',
    salary: '$78,615',
    country: 'Portugal',
    city: 'Gloucester'
  }
];

export default {
  components: {
    Card,
    BaseTable,
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
        table1: {
        title: "Simple Table",
        columns: [...tableColumns],
        data: [...tableData],
        },
        dropzoneOptions: {
            url: '/',
            // maxFilesize: 2,
            headers: { "My-Awesome-Header": "header value" },
            thumbnailWidth: 150, // px
            thumbnailHeight: 150,
            addRemoveLinks: true,
            chunking: true,
            acceptedFiles: "audio/*"
        },
        getDateFormate(date) {
          if (date) {
            return moment(date).format('MM/DD/YYYY h:mm:SS A');
          }
        },
        sizeofFile(bytes, decimals = 2) {
          if (bytes === 0) return '0 Bytes';

          const k = 1024;
          const dm = decimals < 0 ? 0 : decimals;
          const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
          const i = Math.floor(Math.log(bytes) / Math.log(k));

          return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }
    };
  },
  mixins: [GLOBAL_MIXINS],
  computed: {},
  methods: {
    afterComplete(file) {
        // console.log("file", file);
    },
    async vfileAdded(file) {
      let type = file.type;
      let isAudio = type.slice(0, 5);

      if (isAudio === 'audio') {
        await this.SAVE_FILES(file).then(response => {
          this.FETCH_FILES();
        })
      }
    },
    removeAllFiles() {
      this.$refs.dropzone.removeAllFiles();
    },
    deleteFile(fileId) {
      if (fileId) {
        var isOkPress = confirm("Are you sure you want to delete this file? You will not get back");

        if (isOkPress === true) {
          this.DELETE_FILE(fileId).then(res => {
              console.log(res);            
              this.FETCH_FILES();
          })
        }
      }
    }
  },
  created() {
    if (!this.LOGGED_IN) {
      this.$router.replace(`/login`)
    }
  },
  mounted() {
    this.FETCH_FILES();
  },
};
</script>
<style lang="scss">
.customdropzone {
//   background-color:black;
  font-family: 'Arial', sans-serif;
  letter-spacing: 0.2px;
//   color: #fff;
  transition: background-color .2s linear;
  // height: 200px;
  padding: 0 20px 40px 20px;

  .dz-preview {
    width: 160px;
    display: inline-block;

    .dz-image {
      // width: 80px;
      // height: 80px;
      // margin-left: 40px;
      // margin-bottom: 10px;

      div {
        width: inherit;
        height: inherit;
        border-radius: 50%;
        background-size: contain;
      }

      img {
        width: 100%;
      }
    }

    .dz-details {
      color: white;
      transition: opacity .2s linear;
      text-align: center;
    }
  }

  // .dz-success-mark, .dz-error-mark, .dz-remove {
  //   display: none;
  // }
}
.dropzone .dz-preview.dz-error .dz-error-message {
    display:  none !important;
}

</style>
