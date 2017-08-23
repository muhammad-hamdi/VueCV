<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12">
				<nav-bar></nav-bar>
			</div>
		</div>
		<div class="row" id="profile" v-if="user && user.username">
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
	<div class="row" id="profile" v-if="user && user.username">
		<div class="col-md-8 col-sm-12 col-md-offset-2">
			<div class="panel panel-primary">
				<div class="panel-heading text-center"><h3>Skills</h3></div>
				<div class="panel-body">
					<div class="row">
						<div class="col-md-4"><input type="text" v-model="skillName" placeholder="Skill Name"></div>	
						<div class="col-md-4"><input type="text" v-model="skillImage" placeholder="Skill Img URL"></div>
						<div class="col-md-2"><input type="number" v-model.number="skillPercentage" min="1" max="100" placeholder="Skill Percentage"></div>
						<button class="btn btn-primary" @click="addSkill">Add Skill</button>
						<ul class="list-group col-md-6 col-md-offset-3">
							<li v-for="(skill, index) in skills" class="list-group-item"><img class="list-img" :src="skill.image_url"><h3 class="skill-title">{{skill.name}}</h3><i class="fa fa-trash fa-lg" @click="deleteSkill(skill._id, index)"></i><i class="fa fa-pencil-square-o fa-lg" @click="editSkill"></i></li>
						</ul>
					</div>
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
				user: [],
				skills: [],
				portfolio: [],
				skillName: '',
				skillImage: '',
				skillPercentage: '',
			}
		},
		created(){
		    // Check if the user is logged in
			var token = localStorage.getItem('token'),
				id = localStorage.getItem('id');
		    if(!token) {
		      this.$router.push('/admin/login');
			}
			window.document.title = 'Dashboard | Admin'
            api.get('user/'+ id)
                .then((res) => {
                    this.user = res.data;
				});
			api.get('user/'+ id +'/skills')
				.then((res) => {
					this.skills = res.data;
				})
		  },
		  components: {
			NavBar
		  },
		  methods: {
			  logOut(){
				  localStorage.removeItem('token');
				  localStorage.removeItem('id');
				  this.$router.push('/admin/login');
			  },
			  addSkill(){
				  var reqBody = {
					  name: this.skillName,
					  percent: this.skillPercentage,
					  image_url: this.skillImage,
					  user_id: localStorage.getItem('id'),
					  };
				  var id = localStorage.getItem('id');
				  api.post('user/skills', reqBody)
				  	.then((res) => {
						  this.skills.push(res.data)
					  })
			  },
			  deleteSkill(id, index){
				  this.skills.splice(index, 1);
				  console.log(id);
				  api.delete('user/skills/'+ id)
				  	.then((res) => {})
			  },
			  editSkill(){
				  console.log('not functional yet');
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
	.list-img {
		height: 40px !important;
		width: 40px !important;
		text-align: left !important;
		border-radius: 0 !important;
		border: none !important;
	}
	.list-group {
		padding-right: 0;
		margin-top: 30px;
	}
	.skill-title {
		display: inline;
		margin-left:35%;
	}
	.list-group-item:hover {
		color: #333;
	}
	.list-group-item .fa {
		float: right;
		cursor: pointer;
		margin-top: 10px;
		margin-left: 5px;
		transition: all .2s ease-in-out;
	}
	.list-group-item .fa:hover {
		color: #5A95F5
	}
</style>