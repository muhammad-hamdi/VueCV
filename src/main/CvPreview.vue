<template>
<div>
    <div class="text-center" v-if="loading">
        <i class="fa fa-circle-o-notch fa-spin fa-2x"></i>
    </div>
    <div v-if="data">
    <div class="row">
            <div class="hidden-xs hidden-sm">
                <!-- Start Navbar -->
                <ul class="sidebar-component">
                    <a href="#" v-scroll-to="'#biography'"><li>Biography<i class=" fa fa-home"></i></li></a>
                    <a href="#" v-scroll-to="'#skills'"><li>Skills<i class=" fa fa-code"></i></li></a>
                    <a href="#" v-scroll-to="'#portfolio'"><li>Portfolio<i class=" fa fa-picture-o"></i></li></a>
                    <a href="#" v-scroll-to="'#goals'"><li>Goals<i class=" fa fa-rocket"></i></li></a>
                    <a href="#" v-scroll-to="'#contact'"><li>Contact<i class="fa fa-send"></i></li></a>
                </ul>
                <!-- End Navbar -->
            </div>
        </div>
      <div class="container">
          <div class="row" id="biography">
              <canvas class="canvas"></canvas>
              <div class="col-xs-12">
                      <img :src="data.user.image" class="image-responsive personal">
                      <h1>{{data.user.name}}</h1>
                      <p class="lead">{{data.user.title}}</p>
                      <h2>Biography</h2>
                      <div class="col-md-8 col-md-offset-2">
                          <p class="bio">{{data.user.description}}</p>
                      </div>
              </div>
          </div>
          <div class="split"></div>
          <div class="row" id="skills">
              <h2>Skills</h2>
              <div class="col-xs-12">
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="skill in data.skills">
                      <div class="skill">
                          <div class="skill-card">
                              <img :src="skill.image_url"><p>{{skill.name}}</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" :style="{ width : skill.percent + '%' }">
                                      <span>{{skill.percent}}%</span>
                                  </div>
                              </div>
                          </div>
                    </div>
                  </div>
              </div>
          </div>
          <div class="split"></div>
          <div class="row" id="portfolio">
              <h2>Portfolio</h2>
              <div class="split-small"></div>
              <div class="col-xs-12">
                  <div class="col-md-4 col-sm-6 col-xs-12" v-for="work in data.works">
                      <div class="project">
                          <div class="project-img">
                              <img class="image-responsive" :src="work.image_url">
                          </div>
                          <div class="project-info">
                              <a :href="work.link" target="_blank"><h3>{{work.name}}</h3></a>
                              <p>{{work.description}}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="split"></div>
          <div class="row" id="goals">
              <h2>Goals</h2>
              <div class="split-small"></div>
              <div class="panel panel-primary">
                  <div class="panel-body">
                        <div class="col-md-4" v-for="(goal, index) in data.goals">
										<div class="goal-card">
										<p>{{goal.name}}</p>
										<div class="bar">
											<div class="progress">
												<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{'width': goal.rate + '%'}">
													{{goal.rate}}%
												</div>
											</div>
										</div>
									</div>
								</div>
                  </div>
              </div>
          </div>
          <div class="split"></div>
          </div>
          <div class="container-fluid">
              <div class="row" id="contact">
                  <div class="container">
                      <h2>Contact</h2>
                      <div class="split-small"></div>
                      <div class="col-xs-12">
                          <!-- Contact form -->
                            <form action="/" method="POST">
                                <div class="md-form">
                                    <i class="fa fa-user prefix grey-text"></i>
                                    <input type="text" id="form3" class="form-control" name="name" v-model="emailData.name">
                                    <label for="form3" class="">Your name</label>
                                </div>
                                <div class="md-form">
                                    <i class="fa fa-envelope prefix grey-text"></i>
                                    <input type="email" id="form2" class="form-control" name="email" v-model="emailData.senderEmail">
                                    <label for="form2">Your email</label>
                                </div>

                                <div class="md-form">
                                    <i class="fa fa-tag prefix grey-text"></i>
                                    <input type="text" id="form32" class="form-control" name="subject" v-model="emailData.subject">
                                    <label for="form34">Subject</label>
                                </div>

                                <div class="md-form">
                                    <i class="fa fa-pencil prefix grey-text"></i>
                                    <textarea type="text" id="form8" class="md-textarea" style="height: 100px" name="message" v-model="emailData.message"></textarea>
                                    <label for="form8">Your message</label>
                                </div>

                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary waves-effect waves-light" @click.prevent="sendEmail">Send <i class="fa fa-paper-plane-o ml-1"></i></button>
                                </div>

                            </form>
                            <!-- Contact form -->
                      </div>
                  </div>
              </div>
              <div class="rights">
                <h3>Copyright (c) 2017 Muhammad Hamdi All Rights Reserved.</h3>
              </div>
          </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import config from '../config/config'

export default {
  name: 'hello',
  data () {
    return {
      data: {},
      emailData: {
          senderEmail: '',
          name: '',
          subject: '',
          message: '',
      },
      loading: false
    }
  },
  beforeCreate(){
      axios.get(`${config.url}/api/data/${this.$route.params.id}`)
        .then((res) => {
            this.data = res.data;
            this.loading = false;
            window.document.title = res.data.user.name + ' | CV';
        })
  },
  created(){this.loading = true},
  methods: {
      sendEmail(){
          var reqData = {
              userEmail: this.data.user.email,
              senderEmail: this.emailData.senderEmail,
              name: this.emailData.name,
              subject: this.emailData.subject,
              message: this.emailData.message
          }
          axios.post(`${config.url}/api/email`, reqData)
            .then(() => {
                this.emailData.senderEmail = '';
                this.emailData.name = '';
                this.emailData.subject = '';
                this.emailData.message = '';
            })
            .catch(err => {if (err) throw err})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding-top: 10px;
}
ul li {
  margin: 0;
  width: 100%;
}
ul li i {
  float: right;
}
#skills {
    transform: translateY(120px);
}
body {
    background-color: #00f;
}
</style>
