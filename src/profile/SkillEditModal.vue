<template>
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
                                    <button :class="{'btn':true, 'btn-primary': true, 'disabled': control}" :disabled="control" @click.prevent="editSkill(skillEdit._id)">Edit</button>
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
        props: ['edit', 'skillEdit', 'categories'],
		data(){
            return {
                control: false
            }
        },
        methods: {
            close(){
                this.$emit('close', false);
            },
            editSkill(id){
				this.control = true;
				  api.patch('user/skills/'+ id, this.skillEdit)
				  	.then((res) => {
						  this.$emit('close', false);
						  this.control = false;
					  })
			  },
        }
    }
</script>

<style>
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
    #sel {
		border-radius: 5px;
		padding: 0;
	}
</style>