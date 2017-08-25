<template>
    	<div class="modal-wrapper" v-if="editWorkCon">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12 col-md-offset-3">
                        <div class="panel panel-primary">
                            <div class="panel-heading"><h3>Edit Work</h3><div style="float: right; font-size: 26px; cursor: pointer" @click="closeWork">&times;</div></div>
                            <div class="panel-body">
                                <div class="md-form">
                                    <input type="text"
									placeholder="Work Name"
									id="defaultForm-name" 
									v-model="workEdit.name" 
									class="form-control">
                                </div>
                                <div class="md-form col-md-6">
                                    <input type="text" 
									placeholder="Work Link"
									id="defaultForm-name" 
									v-model="workEdit.link" 
									class="form-control">
                                </div>
								<div class="md-form col-md-6">
                                    <input type="text"
									placeholder="Work Img URL"
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
</template>

<script>
    import {api} from '../config/axios.js'
    export default {
        props: ['editWorkCon', 'workEdit', 'categories'],
        methods: {
            closeWork(){
                this.$emit('close', false)
            },
            editWork(id){
				  var editReqBody = {
					  name: this.workEdit.name,
					  image_url: this.workEdit.image_url,
					  category: this.workEdit.category,
					  description: this.workEdit.description,
					  link: this.workEdit.link
				  };
				  api.patch('user/portfolio/' + id, editReqBody)
					  .then(res => this.$emit('close', false))
					  .catch(err => {throw err});
			  }
        }
    }
</script>

<style>
    
</style>