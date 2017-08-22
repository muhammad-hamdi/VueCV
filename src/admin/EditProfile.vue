<template>
<div>
    <div class="row">
        <div class="col-sm-12">
            <nav-bar></nav-bar>
        </div>
	</div>
    <div class="row">
        <div class="col-md-8 col-sm-12 col-md-offset-2">
            <div class="panel panel-primary">
                <div class="panel-heading text-center">
                    <h3>Edit Profile</h3>
                </div>
                <div class="panel-body">
                    <form>
                        <div class="md-form">
                            <input type="text" id="defaultForm-name" v-model="name" class="form-control">
                            <label for="defaultForm-name">Your Name</label>
                        </div>

                        <div class="md-form">
                            <input type="text" id="defaultForm-email" v-model="email" class="form-control">
                            <label for="defaultForm-email">Your Email</label>
                        </div>

                        <div class="md-form">
                            <input type="text" id="defaultForm-title" v-model="title" class="form-control">
                            <label for="defaultForm-title">Your Title</label>
                        </div>

                        <div class="md-form">
                            <input type="text" id="defaultForm-age" v-model.number="age" class="form-control">
                            <label for="defaultForm-age">Your Age</label>
                        </div>

                        <div class="md-form">
                            <input type="text" id="defaultForm-image-url" v-model="image_url" class="form-control">
                            <label for="defaultForm-image-url">Your Image URL</label>
                        </div>

                        <div class="md-form">
                            <textarea id="defaultForm-description" v-model="description" class="md-textarea"></textarea>
                            <label for="defaultForm-description">Your Description</label>
                        </div>

                        <div class="md-form">
                            <input type="password" id="defaultForm-password" v-model="pwd" class="form-control">
                            <label for="defaultForm-password">Old Password</label>
                        </div>
                            <span v-if="wrongPwd">Wrong Password</span>
                            <span v-if="noAsign">if you won't specify new password then write the old one in the three pwd inputs</span>
                        <div class="md-form">
                            <input type="password" id="defaultForm-n-password" v-model="newPwd" class="form-control">
                            <label for="defaultForm-n-password">New Password</label>
                        </div>

                        <div class="md-form">
                            <input type="password" id="defaultForm-c-n-password" v-model="authNewPwd" class="form-control">
                            <label for="defaultForm-c-n-password">Confirm New Password</label>
                        </div>
                        <span v-if="noPwdMatch">Passwords Don't Match</span>
                        <div class="text-left">
                            <button class="btn btn-primary" @click.prevent='editUser'>Edit</button>
                        </div>
                    </form>
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
                userId: this.$route.params.id,
                user: {},
                name: '',
                email: '',
                pwd: '',
                newPwd: '',
                authNewPwd: '',
                image_url: '',
                title: '',
                age: '',
                description: '',
                wrongPwd: false,
                noPwdMatch: false,
                noAsign: false
            }
        },
        created(){
            window.document.title = 'Edit User | Admin';
            api.get(`users/${this.userId}`)
                .then((res) => {
                    this.user = res.data;
                    this.name = res.data.name;
                    this.email = res.data.email;
                    this.title = res.data.title;
                    this.description = res.data.description;
                    this.age = res.data.age;
                    this.image_url = res.data.image;
                });
        },
        components: {
            NavBar
        },
        methods: {
            editUser(){
                var reqBody = {
                    name: this.name,
                    email: this.email,
                    password: this.newPwd,
                    title: this.title,
                    description: this.description,
                    age: this.age,
                    image: this.image_url,
                };
                if(this.newPwd = ''){
                    delete reqBody.password;
                };
                if(this.pwd != this.user.password){
                    this.wrongPwd = true;
                } else if (this.newPwd != this.authNewPwd) {
                    this.noPwdMatch = true;
                } else if (this.newPwd = ''){
                    this.pwd = this.user.password;
                    this.newPwd = this.user.password;
                    this.noAsign = true;
                } else {
                    api.patch(`users/${this.user._id}`,reqBody)
                        .then((res) => {
                            this.$router.push('/admin');
                        });
                }
            }
        }
    }
</script>

<style scoped>
    .panel {
        margin-top: 100px;
    }
</style>
