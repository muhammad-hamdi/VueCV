<template>
    <div class="modal-wrapper" v-if="expCon">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12 col-md-offset-3">
                        <div class="panel panel-primary">
                            <div class="panel-heading"><h3>Edit Work</h3><div style="float: right; font-size: 26px; cursor: pointer" @click="closeExp">&times;</div></div>
                            <div class="panel-body">
                                <div class="md-form">
                                    <input type="text"
									placeholder="Company Name"
									id="defaultForm-name" 
									v-model="expEdit.name" 
									class="form-control">
                                </div>
                                <div class="md-form">
                                    <input type="text" 
									placeholder="Role"
									id="defaultForm-name" 
									v-model="expEdit.role" 
									class="form-control">
                                </div>
								<label for="defaultForm-desc">Description</label>								
								<div class="md-form">
                                    <textarea id="defaultForm-desc" class="md-textarea" v-model="expEdit.description"></textarea>
                                </div>

								
                                <div class="text-right">
                                    <button :class="{'btn':true, 'btn-primary': true, 'disabled': control}" @click.prevent="editExp(expEdit._id)">Edit</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
                            
        </div>
</template>

<script>
    import {api} from '../config/axios.js'
    export default {
        props: ['expCon', 'expEdit'],
        data(){
            return {
                control: false
            }
        },
        methods: {
            closeExp(){
                this.$emit('close', false);
            },
            editExp(id){
                this.control = true;
                api.patch('user/exp/'+ id, this.expEdit)
                    .then(res => {
                        this.$emit('close', false);
                        this.control = false;
                    });
            }
        }
    }
</script>

<style>
    
</style>