<template>
	<div class="container-fluid">
		<div class="modal-wrapper" v-if="edit">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12 col-md-offset-3">
                        <div class="panel panel-primary">
                            <div class="panel-heading"><h3>Edit Skill</h3><div style="float: right; font-size: 26px; cursor: pointer" @click="close">&times;</div></div>
                            <div class="panel-body">
							<label for="defaultForm-name">Skill Name</label>
                                <div class="md-form">
                                    <input type="text" 
									id="defaultForm-name" 
									v-model="skillEdit.name" 
									class="form-control">
                                </div>
								<label for="defaultForm-image">Skill Img URL</label>
								<div class="md-form">
                                    <input type="text" 
									id="defaultForm-image" 
									v-model="skillEdit.image_url" 
									class="form-control">
                                </div>
								<label for="defaultForm-percent">Skill Percentage</label>								
								<div class="md-form">
                                    <input type="text" 
									placeholder="Skill Percentage" 
									id="defaultForm-percent" 
									v-model="skillEdit.percent" 
									class="form-control">
                                </div>

								<div class="form-group">
									<label for="sel">Skill Category</label>
									<select class="form-control" id="sel" v-model="skillEdit.category">
										<option disabled value="">Choose a Category</option>
										<option v-for="cat in categories">{{cat}}</option>
									</select>
								</div>
                                <div class="text-right">
                                    <button class="btn btn-primary" @click.prevent="editSkill(skillEdit._id)">Edit</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
                            
        </div>

		<div class="modal-wrapper" v-if="editWorkCon">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12 col-md-offset-3">
                        <div class="panel panel-primary">
                            <div class="panel-heading"><h3>Edit Work</h3><div style="float: right; font-size: 26px; cursor: pointer" @click="closeWork">&times;</div></div>
                            <div class="panel-body">
							<label for="defaultForm-name">Work Name</label>
                                <div class="md-form">
                                    <input type="text" 
									id="defaultForm-name" 
									v-model="workEdit.name" 
									class="form-control">
                                </div>
								<label for="defaultForm-name">Work Link</label>
                                <div class="md-form">
                                    <input type="text" 
									id="defaultForm-name" 
									v-model="workEdit.link" 
									class="form-control">
                                </div>
								<label for="defaultForm-image">Work Img URL</label>
								<div class="md-form">
                                    <input type="text" 
									id="defaultForm-image" 
									v-model="workEdit.image_url" 
									class="form-control">
                                </div>

								<div class="form-group">
									<label for="sel">Work Category</label>
									<select class="form-control" id="sel" v-model="workEdit.category">
										<option disabled value="">Choose a Category</option>
										<option v-for="cat in categories">{{cat}}</option>
									</select>
								</div>

								<label for="defaultForm-desc">Work Description</label>								
								<div class="md-form">
                                    <textarea id="defaultForm-desc" class="md-textarea" v-model="workEdit.description"></textarea>
                                </div>

								
                                <div class="text-right">
                                    <button class="btn btn-primary" @click.prevent="editWork(workEdit._id)">Edit</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
                            
        </div>
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
	<!--  -->
	<div class="row" id="skills" v-if="user && user.username">
		<div class="col-md-8 col-sm-12 col-md-offset-2">
			<div class="panel panel-primary">
				<div class="panel-heading text-center"><h3>Skills</h3></div>
				<div class="panel-body">
					<div class="row">
						<div class="col-md-2"><input type="text" v-model="skillName" placeholder="Skill Name"></div>	
						<div class="col-md-2"><input type="text" v-model="skillImage" placeholder="Skill Img URL"></div>
						<div class="col-md-3">
							<div class="form-group">
								<select class="form-control" id="sel" v-model="skillCat">
									<option disabled value="">Choose a Category</option>
									<option v-for="cat in categories">{{cat}}</option>
								</select>
							</div>
						</div>
						<div class="col-md-3"><input type="number" v-model.number="skillPercentage" min="1" max="100" placeholder="Skill Percentage"></div>
						<button class="btn btn-primary" @click="addSkill">Add Skill</button>
						<ul class="list-group col-md-6 col-md-offset-3" id="skillList">
							<li v-for="(skill, index) in skills" class="list-group-item" :data-balloon="skill.category + ' - ' +skill.percent+ '%'" data-balloon-pos="left"><img class="list-img" :src="skill.image_url"><h3 class="skill-title">{{skill.name}}</h3><i class="fa fa-trash fa-lg" @click="deleteSkill(skill._id, index)"></i><i class="fa fa-pencil-square-o fa-lg" @click="editModalSkill(skill)"></i></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--  -->
	<div class="row" id="portfolio" v-if="user && user.username">
		<div class="col-md-8 col-sm-12 col-md-offset-2">
			<div class="panel panel-primary">
				<div class="panel-heading text-center"><h3>Portfolio</h3></div>
				<div class="panel-body">
                        <div class="md-form">
                            <input type="text" id="defaultForm-name" v-model="workName" class="form-control">
                            <label for="defaultForm-name">Work Name</label>
                        </div>

                        <div class="md-form">
                            <input type="text" id="defaultForm-email" v-model="workImage" class="form-control">
                            <label for="defaultForm-email">Work Img URL</label>
                        </div>

						<div class="md-form">
                            <input type="text" id="defaultForm-link" v-model="workLink" class="form-control">
                            <label for="defaultForm-link">Work Link</label>
                        </div>
						<div class="form-group">
								<select class="form-control" id="sel" v-model="workCat">
									<option disabled selected value="">Choose a Category</option>
									<option v-for="cat in categories">{{cat}}</option>
								</select>
							</div>
                        <div class="md-form">
                            <textarea id="defaultForm-description" v-model="workDescription" class="md-textarea"></textarea>
                            <label for="defaultForm-description">Work Description</label>
                        </div>
                        <div class="text-right">
                            <button class="btn btn-primary" @click.prevent='addWork'>Add Work</button>
                        </div>
						<div class="row">
						<ul class="list-group col-md-12">
							<li v-for="(work, index) in portfolio" class="col-md-4" :data-balloon="'Category: ' + work.category" data-balloon-pos="top"><div id="work"><div class="img-holder"><img class="list-img" :src="work.image_url"></div><a :href="work.link" _target="blank"><h3>{{work.name}}</h3></a><i class="fa fa-trash fa-lg" @click="deleteWork(work._id, index)"></i><i class="fa fa-pencil-square-o fa-lg" @click="editModalWork(work)"></i><p>{{work.description}}</p></div></li>
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
				skillCat: '',
				skillPercentage: '',
				edit: false,
				skillEdit: '',
				categories: ['Web Design',
				'Web Development',
				'Android Development',
				'IOS Development',
				'Desktop Development',
				'Graphic Design',
				'Game Development',
				'Embedded Systems'],
				imageSrc: 'http://nahmdong.com/vitalhill/img/default.png',
				workName: '',
				workImage: '',
				workCat: '',
				workDescription: '',
				workLink: '',
				editWorkCon: false,
				workEdit: ''
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
				});
			api.get('user/'+ id +'/portfolio')
				.then(res => {
					this.portfolio = res.data;
				})
		  },
		  components: {
			NavBar,
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
					  category: this.skillCat,
					  };
				  var id = localStorage.getItem('id');
				  api.post('user/skills', reqBody)
				  	.then((res) => {
						  this.skills.push(res.data);
						  this.skillName = '';
						  this.skillImage = '';
						  this.skillCat = '';
						  this.skillPercentage = '';
					  });
			  },
			  deleteSkill(id, index){
				  this.skills.splice(index, 1);
				  console.log(id);
				  api.delete('user/skills/'+ id)
				  	.then((res) => {})
			  },
			  editModalSkill(skill){
				  this.edit = true;
				  this.skillEdit = skill;
			  },
			  close(){
				  this.edit = false
			  },
			  editSkill(id){
				  var editReqBody = {
					  name: this.skillEdit.name,
					  image_url: this.skillEdit.image_url,
					  category: this.skillEdit.category,
					  percent: this.skillEdit.percent
				  };
				  api.patch('user/skills/'+ id, editReqBody)
				  	.then((res) => {
						  this.edit = false;
					  })
			  },
			  addWork(){
				  var reqBody = {
					  name: this.workName,
					  image_url: this.workImage,
					  user_id: localStorage.getItem('id'),
					  category: this.workCat,
					  link: this.workLink,
					  description: this.workDescription
					  };
				  api.post('user/portfolio', reqBody)
				  	.then(res => {
						  this.portfolio.push(res.data);
						  this.workName = '';
						  this.workImage = '';
						  this.workCat = '';
						  this.workLink = '';
						  this.workDescription = '';
					  })
			  },
			  deleteWork(id, index){
				  this.portfolio.splice(index, 1);
				  api.delete('user/portfolio/'+ id)
				  	.then((res) => {})
			  },
			  editModalWork(work){
				  this.editWorkCon = true;
				  this.workEdit = work;
			  },
			  closeWork(){
				  this.editWorkCon = false
			  },
			  editWork(id){
				  var editReqBody = {
					  name: this.workEdit.name,
					  image_url: this.workEdit.image_url,
					  category: this.workEdit.category,
					  description: this.workEdit.percent,
					  link: this.workEdit.link
				  };
				  api.patch('user/portfolio/' + id, editReqBody)
					  .then(res => this.editWorkCon = false)
					  .catch(err => {throw err});
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
	    .modal-wrapper {
        width: 101%;
        height: 100%;
        position: fixed;
        z-index: 10000;
        background: rgba(0,0,0,.5);
		transform: translateX(-20px)
    }
	.modal-wrapper h3, .modal-wrapper h2 {
		display: inline-block;
	}
	.modal-wrapper .panel {
		margin: 40px auto;
	}
	#skillList {
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
	#sel {
		border-radius: 5px;
		padding: 0;
	}
	#portfolio .list-group {
		box-shadow: none;
	}
	#work {
		width: 100%;
		height: 400px;
		background-color: #fff;
		margin: 20px 0;
		box-shadow: 0px 0px 20px 2px rgba(0,0,0,.08);
		padding: 5px;
		border-radius: 5px
	}
	#work:hover {
		color: #333;
	}
	#work .img-holder {
		width: 100%;
		height: 75%;
		margin: auto;
		margin-bottom: 0;
		border: 1px solid #eee;
		overflow: hidden;
		cursor: pointer;
	}
	#work img {
		width: 100% !important;
		height: 100% !important;
		transition: all .5s ease-in-out;
		position: relative;
	}
	#work img:hover {
		transform: scale(1.1);
	}
	#work .fa {
		float: right;
		margin-left: 5px;
		transition: all .2s ease-in;
		transform: translateY(-28px)
	}
	#work .fa:hover {
		color: #5A95F5;
		cursor: pointer;
	}
	#work a {
		color: #333;
		transition: all .2s ease-in-out;
	}
	#work a:hover {
		color: #5A95F5;
	}
	#work p {
		float: left;
		text-align: left;
		transform: translateY(-11px)
	}
	ul li.col-md-4 {
		color: #333;
	}
</style>