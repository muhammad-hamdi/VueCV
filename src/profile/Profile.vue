<template>
	<div class="container-fluid">

		<SkillEditModal :edit="edit"
						:skillEdit="skillEdit"
						:categories="categories"
						@close="close"></SkillEditModal>
						
		<WorkEditModal 	:editWorkCon="editWorkCon"
						:workEdit="workEdit"
						:categories="categories"
						@close="closeWork"></WorkEditModal>
		<ExpEditModal 	:expCon="expCon"
						:expEdit="expEdit"
						@close="closeExp"></ExpEditModal>
		<GoalEditModal  :goalCon="goalCon"
						:goalEdit="goalEdit"
						@close="closeGoal"></GoalEditModal>
		<div class="row">
			<div class="col-sm-12">
				<nav-bar></nav-bar>
			</div>
		</div>
		<div class="row" id="profile" v-if="user && user.username">
		<div class="col-md-8 col-sm-12 col-md-offset-2">
			<div class="panel panel-primary">
				<div class="panel-heading"><!--<button class="btn btn-danger logout" @click="logOut">Log Out</button>-->
					<h3 v-if="!welcomeEnd">Welcome Back!</h3>
				<transition name="fade">
					<h3 v-if="welcomeEnd">{{user.name}}</h3>
				</transition>
				</div>
				<div class="panel-body text-center">
					<img :src="user.image">
					<h3>{{user.name}}</h3>
					<h4 v-if="user.title">{{user.title}}</h4>
					<p v-if="user.description">{{user.description}}</p>
					<!-- <router-link :to="{path: `/profile/edit/${user._id}`}">
						<button class="btn btn-primary">edit profile</button>
					</router-link> -->
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
						<div class="col-md-3">
							<dropzone id="myVueDropzone" 
							:url="config.url +'/api/user/skills'" 
							v-on:vdropzone-success="skillAddSuccess"
							:dropzoneOptions="{
								'headers': {'x-access-token': token},
							}"
							:autoProcessQueue="false"
							:useFontAwesome="true"
							:maxFileSizeInMB="5"
							:thumbnail-width="120"
							:thumbnail-height="120"
							ref="dropzone2">
								<input type="hidden" name="name" v-model="skillName">
								<input type="hidden" name="category" v-model="skillCat">
								<input type="hidden" name="user_id" v-model="userId">
								<input type="hidden" name="percent" v-model="skillPercentage">
							</dropzone>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<select class="form-control" id="sel" v-model="skillCat">
									<option disabled value="">Choose a Category</option>
									<option v-for="cat in categories">{{cat}}</option>
								</select>
							</div>
						</div>
						<div class="col-md-2"><input type="number" v-model.number="skillPercentage" min="1" max="100" placeholder="Skill Percent"></div>
						<button class="btn btn-primary" @click="addSkill">Add Skill</button>
						<br>
						<br>
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

                        <dropzone id="myVueDropzone2" 
                        :url="config.url +'/api/user/portfolio'" 
                        v-on:vdropzone-success="workAddSuccess"
                        :dropzoneOptions="{
                            'headers': {'x-access-token': token},
                        }"
						:autoProcessQueue="false"
						:useFontAwesome="true"
						:maxFileSizeInMB="5"
						ref="dropzone">
                            <input type="hidden" name="name" v-model="workName">
                            <input type="hidden" name="link" v-model="workLink">
                            <input type="hidden" name="category" v-model="workCat">
                            <input type="hidden" name="user_id" v-model="userId">
                            <input type="hidden" name="description" v-model="workDescription">
                        </dropzone>
                        <hr>

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
	<!---->
	<div class="row" id="exp" v-if="user && user.username">
		<div class="col-md-8 col-xs-12 col-md-offset-2">
			<div class="panel panel-primary">
				<div class="panel-heading text-center"><h3>Work Experience</h3></div>
				<div class="panel-body">
						<div class="md-form">
							<input type="text" id="name" v-model="expName" class="form-control">
							<label for="name">Company Name</label>
						</div>
						<div class="md-form">
							<input type="text" id="role" v-model="expRole" class="form-control">
							<label for="role">Role</label>
						</div>
						<div class="md-form">
							<textarea class="md-textarea" id="desc" v-model="expDescription"></textarea>
							<label for="desc">Description</label>
						</div>
						<div class="md-form text-right">
							<button class="btn btn-primary" @click="addWorkExp">Add Work Exp</button>
						</div>
							<div class="col-md-12" id="expList">
								<div class="row">
									<div v-for="(exp, index) in workExp" class="col-md-6">
										<div class="workExp">
											<h3>Company: {{exp.name}}</h3>
											<h4>Role: {{exp.role}}</h4>
											<p>{{exp.description}}</p>
											<div class="options">
												<i class="fa fa-trash fa-lg" @click="deleteExp(exp._id, index)"></i>
												<i class="fa fa-pencil-square-o fa-lg" @click="editModalExp(exp)"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
				</div>
			</div>
		</div>
		</div>

<!--  -->
			<div class="row" id="goal" v-if="user && user.username">
		<div class="col-md-8 col-xs-12 col-md-offset-2">
			<div class="panel panel-primary">
				<div class="panel-heading text-center"><h3>Goals</h3></div>
				<div class="panel-body">
						<div class="md-form">
							<input type="text" id="name" v-model="goalName" class="form-control">
							<label for="name">Goal</label>
						</div>
						<div class="md-form">
							<input type="text" id="role" v-model="goalPercent" class="form-control">
							<label for="role">Completion Rate</label>
						</div>
						<div class="md-form text-right">
							<button class="btn btn-primary" @click="addGoal">Add Goal</button>
						</div>
							<div class="col-md-12" id="expList">
								<div class="row">
									<div class="col-md-6" v-for="(goal, index) in goals">
										<div class="goal-card">
										<p>{{goal.name}}</p>
										<div class="bar">
											<div class="progress">
												<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{'width': goal.rate + '%'}">
													{{goal.rate}}%
												</div>
											</div>
										</div>
										<div class="options">
												<i class="fa fa-trash fa-lg" @click="deleteGoal(goal._id, index)"></i>
												<i class="fa fa-pencil-square-o fa-lg" @click="editGoalModal(goal)"></i>
										</div>
									</div>
									</div>
								</div>
							</div>
				</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
	import NavBar from './NavBar.vue';
	import SkillEditModal from './SkillEditModal.vue'
	import WorkEditModal from './WorkEditModal.vue'
	import ExpEditModal from './ExpEditModal.vue'
	import GoalEditModal from './GoalEditModal.vue'
    import {api} from '../config/axios'
    import config from '../config/config'
	import Dropzone from 'vue2-dropzone'
	export default {
		data(){
			return {
				user: [],
				skills: [],
				portfolio: [],
				workExp: [],
				goals: [],
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
				workName: '',
				workImage: '',
				workCat: '',
				workDescription: '',
				workLink: '',
				editWorkCon: false,
				workEdit: '',
				expName:'',
				expDescription: '',
				expRole: '',
				expCon: false,
				expEdit: '',
				goalName: '',
				goalPercent: '',
				goalEdit: '',
				goalCon: false,
				welcomeEnd: false,
				token: localStorage.token,
				config: config,
				userId: localStorage.id,
			}
		},
		created(){
		    // Check if the user is logged in
			var token = localStorage.getItem('token'),
				id = localStorage.getItem('id');
		    if(!token) {
		      this.$router.push('/login');
			}
			window.document.title = 'Profile | CV'
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
				});
			api.get('user/'+ id +'/exp')
				.then(res => {
					this.workExp = res.data;
				});
			api.get('user/'+ id +'/goal')
				.then(res => {
					this.goals = res.data;
				})
			setTimeout(() => {this.welcomeEnd = true}, 2500);
		  },
		  components: {
			NavBar, SkillEditModal, WorkEditModal, ExpEditModal, GoalEditModal, Dropzone
		  },
		  methods: {
			  logOut(){
				  localStorage.removeItem('token');
				  localStorage.removeItem('id');
				  this.$router.push('/login');
			  },
			  addSkill(){
				this.$refs.dropzone2.processQueue();
			  },
			  deleteSkill(id, index){
				  api.delete('user/skills/'+ id)
					.then((res) => {this.skills.splice(index, 1);})
					  .catch(err => {if(err) window.alert(err)})
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
				  this.$refs.dropzone.processQueue();
			  },
			  deleteWork(id, index){
				  api.delete('user/portfolio/'+ id)
				  	.then((res) => {this.portfolio.splice(index, 1)})
					  .catch(err => {if(err) window.alert(err)})
			  },
			  editModalWork(work){
				  this.editWorkCon = true;
				  this.workEdit = work;
			  },
			  closeWork(){
				  this.editWorkCon = false
			  },
			  addWorkExp(){
				  var reqBody = {
					  name: this.expName,
					  description: this.expDescription,
					  role: this.expRole,
					  user_id: localStorage.getItem('id')
				  }
				  api.post('user/exp', reqBody)
				  	.then(res => {
						  this.workExp.push(res.data);
						  this.expName = '';
						  this.expDescription = '';
						  this.expRole = '';
					  })
			  },
			  deleteExp(id, index){
				  api.delete('user/exp/'+id)
					.then(res => { this.workExp.splice(index, 1)})
					  .catch(err => {if(err) window.alert(err)})
			  },
			  editModalExp(exp){
				  this.expCon = true;
				  this.expEdit = exp;
			  },
			  closeExp(){
				  this.expCon = false;
			  },
			  addGoal(){
				  let reqBody = {
					  name: this.goalName,
					  rate: this.goalPercent,
					  user_id: this.userId
				  };

				  api.post('user/goal', reqBody)
				  	.then(res => {
						  this.goalName = '';
						  this.goalPercent = '';
						  this.goals.push(res.data);
					  })
			  },
			  closeGoal(){
				  this.goalCon = false;
			  },
			  editGoalModal(goal){
				  this.goalCon = true;
				  this.goalEdit = goal;
			  },
			  deleteGoal(id, index){
				  api.delete('user/goal/'+ id)
					.then(res => {this.goals.splice(index, 1)})
					  .catch(err => {if(err) window.alert(err)})
			  },
			  skillAddSuccess(file, res){
				  this.skillName = '';
				  this.skillCat = '';
				  this.skillPercentage = '';
				  this.$refs.dropzone2.removeAllFiles();
				  this.skills.push(res);
				  console.log(res);
			  },
			  workAddSuccess(file, res){
				  this.workName = '';
				  this.workCat = '';
				  this.workLink = '';
				  this.workDescription = '';
				  this.$refs.dropzone.removeAllFiles();				  
				  this.portfolio.push(res);
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
		margin: 30px auto;
	}
	#skillList {
		padding-right: 0;
		margin-top: 30px;
	}
	.skill-title {
		display: inline;
		margin-left:35%;
	}
	.list-group-item {
		padding: 15px;
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
	.workExp {
		position: relative;
		display: block;
		padding: 30px 10px;
		margin: 10px 10px;
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 3px;
		box-shadow: 0px 2px 8px 0px rgba(0,0,0,.2);
	}
	.options {
		position: absolute;
		top: 15px;
		right: 25px;
	}
	.fa {transition: all .2s ease-in-out;margin-left: 5px;}
	.fa:hover {
		color: #5A95F5;
		cursor: pointer;
	}
	.workExp h3 {
		margin-top: 0;
		padding-top: 0;
		transform: translateY(-15px);
		display: inline-block;
	}
	.workExp h4 {
		transform: translateY(-20px);
	}
	.workExp p {
		text-align: left;
		margin: 0;
	}
	.fade-enter {
		opacity: 0;
	}
	.fade-enter-active {
		transition: opacity 1s;
	}
	.fade-leave-active {
		transition: opacity 1s;
		opacity: 0;
	}
	.goal-card {
		min-height: 100px;
		margin: 5px;
		background-color: #FFF;
		border: 1px solid #ddd;
		box-shadow: 0px 2px 8px 0px rgba(0,0,0,.2);
		padding: 20px
	}
</style>