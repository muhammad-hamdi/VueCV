<template>
	<!-- Login form -->
	<div class="row">
		<div class="col-md-4 col-xs-12 col-md-offset-4">
				<form>
					<p class="h3 text-center mb-4">Sign Up</p>

                    <div class="md-form">
						<i class="fa fa-user prefix grey-text"></i>
						<input type="text" id="defaultForm-username" v-model="name" class="form-control">
						 <label for="defaultForm-name">Your Name</label>
					</div>

                    <div class="md-form">
						<i class="fa fa-at prefix grey-text"></i>
						<input type="text" id="defaultForm-username" v-model="username" class="form-control">
						 <label for="defaultForm-username">Your Username</label>
					</div>

					<div class="md-form">
						<i class="fa fa-envelope prefix grey-text"></i>
						<input type="text" id="defaultForm-email" v-model="email" class="form-control">
						 <label for="defaultForm-email">Your email</label>
					</div>

					<div class="md-form">
						<i class="fa fa-lock prefix grey-text"></i>
						<input type="password" id="defaultForm-password" v-model="password" class="form-control">
						<label for="defaultForm-password">Your Password</label>
					</div>

					<div class="text-center">
						<button class="btn btn-default" @click.prevent='signUp'>Sign Up</button>
					</div>
                    <span>Already joined ? </span><router-link to="/admin/login"><span>Login</span></router-link>
				</form>
		</div>
	</div>
<!-- Login form -->
</template>

<script>
	import {api} from '../config/axios'
	export default {
		data(){
			return {
                name: '',
                username: '',
				email: '',
				password: '',
			}
		},
		created(){
			window.document.title = 'Register | Admin';
			var token = localStorage.getItem('token')
		    if(token) {
			  this.$router.push('/admin');
			}
		},
		methods: {
				signUp(){
					api.post('register', {
                        name: this.name,
                        username: this.username,
						email: this.email,
						password: this.password
					})
						.then((res) => {
							var token = res.data.token,
								id = res.data.id;
							localStorage.setItem('token', token);
							localStorage.setItem('id', id);
							this.$router.push('/admin');
						})
						.catch((err) => {
							throw err;
						});
				}
			}
	}
</script>

<style scoped>
	body {
		background-color: #ffff99;
	}
	form {
		background-color: #fff;
		padding: 30px 20px;
		margin: 30px 0;
		border-radius: 3px;
		box-shadow: 5px 5px 5px #eee;
		box-shadow: 0px 0px 20px 2px rgba(0,0,0,.08);
		transition: all .2s ease-in-out;
	}
	form:hover {
		box-shadow: 5px 5px 20px 2px rgba(0,0,0,.08);
	}
	.fa {
		transform: translateY(15px);
	}
</style>