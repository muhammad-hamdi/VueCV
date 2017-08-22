<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12">
				<nav-bar></nav-bar>
			</div>
		</div>
		<div class="row">
		<div class="col-md-8 col-sm-12 col-md-offset-2">
			<div class="panel panel-primary">
				<div class="panel-heading"><button class="btn btn-danger logout" @click="logOut">Log Out</button><h3>Welcome Back!</h3></div>
				<div class="panel-body text-center">
					<img :src="user.image">
					<h3>{{user.name}}</h3>
					<h4 v-if="user.title">{{user.title}}</h4>
					<p v-if="user.description">{{user.description}}</p>
					<router-link :to="{path: `/admin/edit/${user._id}`}">
						<button class="btn btn-primary">edit profile</button>
					</router-link>
					</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import NavBar from './NavBar.vue';
    import {api} from '../config/axios'

	export default {
		data(){
			return {
				user: []
			}
		},
		created(){
		    // Check if the user is logged in
		    var token = localStorage.getItem('token')
		    if(!token) {
		      this.$router.push('/admin/login');
			}
			window.document.title = 'Dashboard | Admin'
            api.get('me')
                .then((res) => {
                    this.user = res.data
                });
		  },
		  components: {
			NavBar
		  },
		  methods: {
			  logOut(){
				  localStorage.removeItem('token');
				  this.$router.push('/admin/login');
			  }
		  }
	}
</script>

<style scoped>
	.panel {
		margin-top: 100px;
	}
	.panel img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		padding: 2px;
		border: 1px solid #999;
	}
	.logout {
		float: right;
	}
</style>