<template>
    	<div class="modal-wrapper" v-if="goalCon">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12 col-md-offset-3">
                        <div class="panel panel-primary">
                            <div class="panel-heading"><h3>Edit Goal</h3><div style="float: right; font-size: 26px; cursor: pointer" @click="closeGoal">&times;</div></div>
                            <div class="panel-body">
                                <div class="md-form">
                                    <input type="text"
									placeholder="Work Name"
									id="defaultForm-name" 
									v-model="goalEdit.name" 
									class="form-control">
                                </div>
                                <div class="md-form">
                                    <input type="number" 
									placeholder="Work Link"
									id="defaultForm-name" 
									v-model="goalEdit.rate"
									class="form-control">
                                </div>

                                <div class="text-right">
                                    <button :class="{'btn':true, 'btn-primary': true, 'disabled': control}" :disabled="control" @click.prevent="editGoal(goalEdit._id)">Edit</button>
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
        props: ['goalCon', 'goalEdit'],
        data(){
            return {
                control: false
            }
        },
        methods: {
            closeGoal(){
                this.$emit('close', false)
            },
            editGoal(id){
                this.control = true;
				  api.patch('user/goal/' + id, this.goalEdit)
					  .then(res => {
                            this.$emit('close', false);
                            this.control = false;
                          })
					  .catch(err => {throw err});
			  }
        }
    }
</script>

<style>

</style>