<template>
  <nav class="navbar navbar-expand-lg navbar-absolute"
       :class="{'bg-white': showMenu, 'navbar-transparent': !showMenu}">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-toggle d-inline" :class="{toggled: $sidebar.showSidebar}">
          <button type="button"
                  class="navbar-toggler"
                  @click="toggleSidebar">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <a class="navbar-brand" href="javascript:void(0)"> {{ $route.name }}</a>
      </div>
      <button class="navbar-toggler" type="button"
              @click="toggleMenu"
              data-toggle="collapse"
              data-target="#navigation"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
      </button>
      <div class="collapse navbar-collapse show text-left" v-show="showMenu">
        <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">
          <!-- <li class="search-bar input-group"  @click="searchModalVisible = true">
            <button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal"><i class="tim-icons icon-zoom-split"></i>
              <span class="d-lg-none d-md-block">Search</span>
            </button>
          </li>
          <modal :show.sync="searchModalVisible"
                 class="modal-search"
                 id="searchModal"
                 :centered="false"
                 :show-close="true">
            <input slot="header" v-model="searchQuery" type="text" class="form-control" id="inlineFormInputGroup" placeholder="SEARCH">
          </modal> -->
          <!-- <drop-down>
            <a href="javascript:void(0)" data-toggle="dropdown" class="dropdown-toggle nav-link">
              <div class="notification d-none d-lg-block d-xl-block"></div>
              <i class="tim-icons icon-sound-wave"></i>
              <p class="d-lg-none text-left">
                
              </p>
            </a>
            <ul class="dropdown-menu dropdown-menu-right dropdown-navbar">
              <li class="nav-link"><a href="#" class="nav-item dropdown-item">Mike John responded to your email</a></li>
              <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">You have 5 more tasks</a></li>
              <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">Your friend Michael is in town</a></li>
              <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">Another notification</a></li>
              <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">Another one</a></li>
            </ul>
          </drop-down> -->
          <drop-down>
                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div class="photo">
                    <img src="@/assets/img/anime3.png" alt="Profile Photo">
                  </div>
                  <b class="caret d-none d-lg-block d-xl-block"></b>
                  <p class="d-lg-none">
                    Log out
                  </p>
                </a>
                <ul class="dropdown-menu dropdown-navbar">
                  <li class="nav-link"><router-link to="/user" class="nav-item dropdown-item">Profile</router-link></li>
                  <li class="nav-link"><router-link to="/change-password" class="nav-item dropdown-item">Change Password</router-link></li>
                  <!-- <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">Settings</a></li> -->
                  <li class="dropdown-divider"></li>
                  <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item" @click="Logout()">Log out</a></li>
                </ul>
              </drop-down>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import GLOBAL_MIXINS from "../../mixins/global.mixins";

import DropDown from "@/components/Dropdown.vue";
import Modal from "@/components/Modal.vue";
import {
  SidebarPlugin
} from "@/components/index";

  export default{
    components:{
      DropDown,
      Modal,
      SidebarPlugin
    },
    mixins: [GLOBAL_MIXINS],
    data() {
      return {
        searchModalVisible: false,
        searchQuery: '',
        showMenu: false
      };
    },
    methods:{
      toggleSidebar(){
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      toggleMenu(){
        this.showMenu  = !this.showMenu;
      },
      Logout() {
        this.SET_AUTH_STATE({ loggedIn: false, loggedUser: {} });
        this.$router.replace(`/`);
      }
    },
    computed:{
      isRTL() {
        return this.$rtl.isRTL;
      }
    }
  }
</script>
<style>
</style>
