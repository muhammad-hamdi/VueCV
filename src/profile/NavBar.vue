<template>
    <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link to="/profile" v-scroll-to="'#profile'" class="navbar-brand">Profile</router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="#" v-scroll-to="'#skills'">Skills</a></li>
        <li><a href="#" v-scroll-to="'#portfolio'">Portfolio</a></li>
        <li><a href="#" v-scroll-to="'#exp'">Experience</a></li>
        <li><router-link :to="{path: `/cv/${user._id}`}">Preview</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
  import {api} from '../config/axios.js'
    export default {
        data(){
          return {
            user: {}
          }
        },
        created(){
          var id = localStorage.getItem('id');
            api.get('user/'+ id)
                  .then((res) => {
                      this.user = res.data;
                  });
        },
    }
</script>

