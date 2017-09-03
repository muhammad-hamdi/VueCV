<template>
<div>
        <div class="modal-wrapper" v-if="edit">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12 col-md-offset-3">
                        <div class="panel panel-danger">
                            <div class="panel-heading"><h3 style="float: right; font-size: 26px;cursor: pointer;" @click="close">&times;</h3><h3>Verify Your Password</h3></div>
                            <div class="panel-body">
                                <div class="md-form">
                                    <input type="password" id="defaultForm-password" v-model="pwd" @keyup.enter="authUserEdit" class="form-control">
                                    <label for="defaultForm-password">Password</label>
                                </div>
                                <div class="alert alert-danger" v-if="wrongPwd">
                                    <strong>Wrong</strong> Password!
                                </div>
                                <div class="text-right">
                                    <button :class="{'btn':true, 'btn-default': true, 'disabled': control}" :disabled="control" @click.prevent="authUserEdit">Edit</button>
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
                        <div class="text-right">
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
                edit: false,
                control: false,
            }
        },
        created(){
            window.document.title = 'Edit User | Admin';
            api.get(`user/${this.userId}`)
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
                this.edit = true;
            },
            authUserEdit(){
                this.control = true;
                var reqBody = {
                    name: this.name,
                    email: this.email,
                    title: this.title,
                    description: this.description,
                    age: this.age,
                    image: this.image_url,
                };
                if(this.pwd != this.user.password){
                    this.wrongPwd = true;
                    this.control = false;
                } else {
                    api.patch(`user/${this.user._id}`,reqBody)
                        .then((res) => {
                            this.$router.push('/profile');
                            this.control = false;
                        });
                }
            },
            close(){
                this.edit = false;
            }
        }
    }
</script>

<style scoped>
    .panel {
        margin-top: 100px;
    }
    .modal-wrapper {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 10000;
        background: rgba(0,0,0,.5);
    }
</style>
