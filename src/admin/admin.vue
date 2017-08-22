<template>
	<div class="row">
		<div class="col-md-8 col-sm-12 col-md-offset-2">
			<div class="panel panel-default">
				<div class="panel-headi text-center"><p>You Are Logged in!</p><button class="btn btn-danger" @click="logOut">Log Out</button></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		created: function(){
		    // Check if the user is logged in
		    var token = localStorage.getItem('token')
		    if(!token) {
		      this.$router.push('/admin/login');
		    }
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
	
</style>