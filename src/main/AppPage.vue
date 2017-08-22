<template>
  <div>
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
                      <img src="https://lh3.googleusercontent.com/8bSkPUcQc-0pUQqoC2PbqHLkMA0IGGgH84rXJS10A1DI4ZgRuA4BrrDLJttj8O3TgNPQvk0nXqpWGhnUog=w1366-h768-rw-no" class="image-responsive personal">
                      <h1>Muhammad Hamdi</h1>
                      <p class="lead">Front-end Developer</p>
                      <h2>Biography</h2>
                      <div class="col-md-8 col-md-offset-2">
                          <p class="bio">Alloha, There! I'm Muhammad Hamdi, 15 Years old Front-end Developer, I started learning to program when I was 8, Programming generally and Web Develeoment especially are major parts of my Day, I spend my time Working on projects, solving Problems and Creating great Websites,
                          I always learn new things to stay Up to Date with the world of technology!</p>
                      </div>
              </div>
          </div>
          <div class="split"></div>
          <div class="row" id="skills">
              <h2>Skills</h2>
              <div class="col-xs-12">
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/html5.svg"><p>HTML5</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:95%">
                                      <span>95%</span>
                                  </div>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/css3.svg"><p>CSS3</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:90%">
                                      <span>90%</span>
                                  </div>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/xml.svg"><p>XML</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:90%">
                                      <span>90%</span>
                                  </div>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/js.svg"><p>Javascript</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:85%">
                                      <span>85%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/hbs.svg"><p>Handlebars</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:85%">
                                      <span>85%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/sass.svg"><p>SASS/SCSS</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:30%">
                                      <span>30%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/json.png"><p>JSON</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:100%">
                                      <span>100%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/es6.png"><p>ECMAScript 6</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:75%">
                                      <span>75%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/bs.svg"><p>Bootstrap</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:100%">
                                      <span>100%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/gulp.svg"><p>Gulp</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:60%">
                                      <span>60%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/webpack.svg"><p>Webpack</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:50%">
                                      <span>50%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/jquery.svg"><p>jQuery</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:65%">
                                      <span>65%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/yarn.svg"><p>Yarn</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:70%">
                                      <span>70%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/bower.svg"><p>Bower</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:85%">
                                      <span>85%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/npm.svg"><p>NPM</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:90%">
                                      <span>90%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/vue.png"><p>VueJS 2</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:70%">
                                      <span>70%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/photoshop.svg"><p>Adobe Photoshop</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:80%">
                                      <span>80%</span>
                                  </div>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/illustrator.svg"><p>Adobe Illustrator</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:40%">
                                      <span>40%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/git.png"><p>Git/GitHub</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:75%">
                                      <span>75%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/ajax.svg"><p>AJAX</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:80%">
                                      <span>80%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/linux.svg"><p>Linux</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:60%">
                                      <span>60%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/mongo.png"><p>MongoDB</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:80%">
                                      <span>80%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/nodejs.svg"><p>Node.js</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:40%">
                                      <span>40%</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <div class="skill">
                          <div class="skill-card">
                              <img src="../assets/images/express.png"><p>Express</p>
                          </div>
                          <div class="skill-back">
                              <p>Skill Rate:-</p>
                              <div class="bar">
                                  <div class="progress" style="width:70%">
                                      <span>70%</span>
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
                  <div class="col-md-4 col-sm-6 col-xs-12">
                      <div class="project">
                          <div class="project-img">
                              <img class="image-responsive" src="../assets/images/neb.png">
                          </div>
                          <div class="project-info">
                              <a href="http://nebula-mh1.bitballoon.com/" target="_blank"><h3>Nebula</h3></a>
                              <p>Simple non-resonsive landing page</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-xs-12">
                      <div class="project">
                          <div class="project-img">
                              <img class="image-responsive" src="../assets/images/neu.png">
                          </div>
                          <div class="project-info">
                              <a href="http://helmsman-chimpanzee-33186.bitballoon.com/" target="_blank"><h3>Neutrino</h3></a>
                              <p>Another simple non-resonsive landing page</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-xs-12">
                      <div class="project">
                          <div class="project-img">
                              <img class="image-responsive" src="../assets/images/theory.png">
                          </div>
                          <div class="project-info">
                              <a href="http://electrician-bat-11521.bitballoon.com/" target="_blank"><h3>Theory</h3></a>
                              <p>simple resonsive landing page</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-xs-12">
                      <div class="project">
                          <div class="project-img">
                              <img class="image-responsive" src="../assets/images/ae.png">
                          </div>
                          <div class="project-info">
                              <a href="http://plumber-nickels-63411.bitballoon.com/" target="_blank"><h3>Aesthetic</h3></a>
                              <p>Complete responsive Template</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-xs-12">
                      <div class="project">
                          <div class="project-img">
                              <img class="image-responsive" src="../assets/images/knock.png">
                          </div>
                          <div class="project-info">
                              <a href="http://templote.bitballoon.com/" target="_blank"><h3>Knock</h3></a>
                              <p>Complete responsive Template with elements and Components</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-xs-12">
                      <div class="project">
                          <div class="project-img">
                              <img class="image-responsive" src="../assets/images/logancee.png">
                          </div>
                          <div class="project-info">
                              <a href="http://logancive.bitballoon.com/" target="_blank"><h3>Logancee</h3></a>
                              <p>Responsive main page for an E-commerce Website</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="split"></div>
          <div class="row" id="goals">
              <h2>Goals</h2>
              <div class="split-small"></div>
              <div class="panel panel-default">
                  <div class="panel-body">
                      <div class="col-xs-12">
                          <div class="goal">
                              <h3 class="col-xs-12 col-md-4 g-title">CSS Framework Component pack :</h3>
                              <div class="progress  col-xs-12 col-md-8">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 20%;">
                                      20%
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-xs-12">
                          <div class="goal">
                              <h3 class="col-xs-12 col-md-4 g-title">Master Javascript Technologies :</h3>
                              <div class="progress  col-xs-12 col-md-8">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 70%;">
                                      70%
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-xs-12">
                          <div class="goal">
                              <h3 class="col-xs-12 col-md-4 g-title">Javascript MVC Framework :</h3>
                              <div class="progress  col-xs-12 col-md-8">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 5%;">
                                      5%
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-xs-12">
                          <div class="goal">
                              <h3 class="col-xs-12 col-md-4 g-title">Arabic Developers Community site: &nbsp;</h3>
                              <div class="progress  col-xs-12 col-md-8">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 10%;">
                                      10%
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-xs-12">
                          <div class="goal">
                              <h3 class="col-xs-12 col-md-4 g-title">Online Learning Academy :</h3>
                              <div class="progress  col-xs-12 col-md-8">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                                      0%
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-xs-12">
                          <div class="goal">
                              <h3 class="col-xs-12 col-md-4 g-title">Web Services Company :</h3>
                              <div class="progress  col-xs-12 col-md-8">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 15%;">
                                      15%
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-xs-12">
                          <div class="goal">
                              <h3 class="col-xs-12 col-md-4 g-title">Becoming Full-stack Developer :</h3>
                              <div class="progress  col-xs-12 col-md-8">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 65%;">
                                      65%
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-xs-12">
                          <div class="goal">
                              <h3 class="col-xs-12 col-md-4 g-title">Publish a Course on Udemy :</h3>
                              <div class="progress  col-xs-12 col-md-8">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 12%;">
                                      12%
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
                      <div class="col-xs-12 col-md-8">
                          <!-- Contact form -->
                            <form action="/" method="POST">
                                <div class="md-form">
                                    <i class="fa fa-user prefix grey-text"></i>
                                    <input type="text" id="form3" class="form-control" name="name">
                                    <label for="form3" class="">Your name</label>
                                </div>

                                <div class="md-form">
                                    <i class="fa fa-envelope prefix grey-text"></i>
                                    <input type="email" id="form2" class="form-control" name="email">
                                    <label for="form2">Your email</label>
                                </div>

                                <div class="md-form">
                                    <i class="fa fa-tag prefix grey-text"></i>
                                    <input type="text" id="form32" class="form-control" name="subject">
                                    <label for="form34">Subject</label>
                                </div>

                                <div class="md-form">
                                    <i class="fa fa-pencil prefix grey-text"></i>
                                    <textarea type="text" id="form8" class="md-textarea" style="height: 100px" name="message"></textarea>
                                    <label for="form8">Your message</label>
                                </div>

                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary waves-effect waves-light">Send <i class="fa fa-paper-plane-o ml-1"></i></button>
                                </div>

                            </form>
                            <!-- Contact form -->
                      </div>
                      <div class="col-xs-12 col-md-4">
                        <h3>Contact Info :-</h3>
                        <p>Phone: +20 102 4504 394</p>
                        <p>E-mail: prime.energy7@gmail.com</p>
                        <p>Address: Royal Tower, Sidi Bishr, Alexandria</p>
                        <ul id="social">
                            <a href="https://www.fb.com/neutrino3"><li><i class="fa fa-facebook fa-2x"></i></li></a>
                            <a href="https://codepen.io/neutricode/"><li><i class="fa fa-codepen fa-2x"></i></li></a>
                            <a href="https://github.com/MuhammadHamdi1"><li><i class="fa fa-github fa-2x"></i></li></a>
                        </ul>
                      </div>
                  </div>
              </div>
              <div class="rights">
                <h3>Copyright (c) 2017 Muhammad Hamdi All Rights Reserved.</h3>
              </div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      
    }
  },
  created(){
      window.document.title = 'Muhammad Hamdi';
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
</style>
