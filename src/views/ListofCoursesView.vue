<template>
    <html lang="en">
    <head>
      <!-- Theme Made By www.w3schools.com -->
      <title>Course List Page</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      </head>
    
      <body>
    <nav class="navbar navbar-inverse" style="background-color: #fafafa; padding:3px">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>
          <img src="@/assets/images/iulogo1i119-0quf.svg" v-on:click="redirectToLogin" style="float:left" width="200" height="50">
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
                <div>
                    <img src="@/assets/images/ellipse1i119-ri5bu-200w.png" style="position:relative; bottom:5px;right: 10px;">
                    <a href="#" @click=""> 
                        <span   v-on:click="redirectToLogin" class="glyphicon glyphicon-log-in" style="position:relative; left:3px;top: 2px;">
                        <b style="font-family: Montserrat">Logout</b>
                    </span>
                 </a>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     <!-- Need to add method to call here in anchor tag -->
    <div class="container-fluid">
      <div class="row content">
        <div class="col-sm-3 sidenav">
      <br>
          <ul class="nav nav-pills nav-stacked" style="position:relative;right:40px">
            <li></li>
            <li>
                <div style="position:relative;">
                    <img src="@/assets/images/courseslisti119-tuje.svg" style="position: relative;right: 40px;">
                    <a href="#" v-on:click="ListCourse" style="position: relative;right: 30px;font-family: Montserrat;color:black">
                        List of Courses</a>
                </div>
            </li>
            <br>
            <li>
                <div style="position:relative">
                    <img src="@/assets/images/icbaselinepostaddi119-z5c5.svg" style="position: relative;right: 34px;">
                    <a href="#" v-on:click="AddCourse" style="position: relative;right: 25px;font-family: Montserrat; color:black">
                        Add New Course</a>
                </div>
            </li>
            <br>
            <li>
                <div style="position:relative">
                    <img src="@/assets/images/mditimetablei119-k36h.svg" style="position: relative;right: 25px;">
                    
                   
                    <a href="#" v-on:click="GenerateTimeTable" style="position: relative;right: 18px;font-family: Montserrat;color:black">
    
                        Generate Timetable
                    </a>
                </div>
            </li>
           
          </ul><br>
        </div>
    
        <div class="col-sm-9">
          <form role="form">
            <div class="form-group">
                <span class="generator-text16">List of All Courses</span>
                <img src="data:image/png;base64,UklGRk4AAABXRUJQVlA4IEIAAAAQBgCdASr/AwEAPm02mUmCCIAIANiWlu4XSQAE9tiLxBUc9sReIKjntiLxBUc9sReIKjntiLxBNgAA/v8eSAAAAAA=" alt="Rectangle5111196" class="generator-rectangle511" data-v-bdec7dd4="">
            </div>
          </form>
          
          </div>
          <div>
            <div class="form-group pull-left">
                <!-- <input type="text" class="sea  rch form-control" placeholder="What you looking for?"> -->
            </div>
          <div style="float: right; position: relative; top:60px">
            <button type="submit" class="btn btn-success" style="background-color: #f4511e;font-family: Montserrat;">Core</button>
            <button type="submit" class="btn btn-success" style="background-color: gainsboro;font-family: Montserrat;">Elective</button>
            <br><br>
          </div>
          
        </div>
        
        <div class="row" style="margin-right: 0px;">
        

            
        <div class="col-md-8" style="position: relative;padding-right: 0px;padding-left: 0px; left: 30px; top: 60px; background-color: white;" >
           
            <div>
<section class="intro">
  <div class="bg-image h-100" style="background-color: ;">
    <div class="mask d-flex align-items-center h-100">
      <div class="container" style="margin-right: 0px; width: 912px;">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="card">
              <div class="card-body p-0">
                <div class="table-responsive table-scroll" data-mdb-perfect-scrollbar="true">
                  <table class="table table-striped mb-0">
                    <thead style="background-color: white;">
                      <tr style="font-size: 12px;">
                        <th scope="col">COURSE NAME</th>
                        <th scope="col" style="float:center">PROFESSOR'S NAME</th>
                        <th scope="col">ONLINE/OFFLINE</th>
                        <th scope="col">ROOM NUMBER</th>
                      </tr>
                    </thead>

                    <!-- Dynamically creating the courses. -->
                    <tbody style="color:black">

                      <tr v-for="(item, index) in courses" :key="index">
                        <td  style="text-align: left;">{{item.courseName}}</td>
                        <td  style="text-align: left;">{{item.profName}}</td>
                        <td  style="text-align: left;">{{item.format}}</td>
                        <td  style="text-align: left;">{{item.roomnum}}</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>

            <div>
              <button class="btn btn-success" v-on:click="GenerateTimeTable" style="position: relative;top: 50px;float: left; background-color: #f4511e;font-family: Montserrat;color:#fafafa;">
                ADD NEW
              </button>
            </div>
        </div>
      </div>
      </div>
    </div>
    
        
    <footer class="container-fluid" style="background-color: #fafafa">
      <p></p>
    </footer>
    
    </body>
    </html>
    
        
    </template>
      
      <script>
      
    import Button from '@/components/Button.vue'
    import router from '@/router';
      export default {


        name: "HomeView",
        components: { Button },
        methods:{
          GenerateTimeTable() {
            alert('Generate TimeTable');
          },
    
          redirectToLogin(){
            router.push({ path: '../'})
            },
          AddCourse(){
            router.push({ path: '../addcourse'}) //Need to add addcoursepage route..
          }, 
          ListCourse(){
            router.push({ path: '../listofcourses'}) //Need to add List of courses route..
          }, 
                 
        },
        getCourses: function () {
        var self = this
        const url = ''//api url
        axios.get(url, {
                dataType: 'json',
                headers: {'Accept': 'application/json','Content-Type': 'application/json'
                         },
        mode: 'no-cors',
        credentials: 'include'
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data))
      self.courses = response.data
    })
    .catch(function (error) {
      console.log(error)
    })
  }
        ,
        setup() {
          function login() {
            console.log('login')
          }
          return {
            courses: [
         {
            'courseName':'Introduct to AI',
            'profName': 'Manual Mazzara',
            'format': 'Online',
            'roomnum': '121'
         },
        
     ],
          }
        },
      };
      </script>

    <style scoped>  
    .generator-text18 {
      color:black;
      height: auto;
      font-size: 16px;
      align-self: stretch;
      font-style: Regular;
      text-align: left;
      font-family: Roboto;
      font-weight: 400;
      line-height: 22px;
      font-stretch: normal;
      margin-right: 0;
      margin-bottom: 4px;
      text-decoration: none;
    }
    .generator-placeholder {
      width: 421px;
      display: flex;
      position: relative;
      flex-grow: 1;
      align-items: flex-start;
      flex-shrink: 0;
      border-color: transparent;
      flex-direction: column;
    }
    .generator-text20 {
      color: black;
      height: auto;
      font-size: 12px;
      align-self: auto;
      font-style: Light;
      text-align: left;
      font-family: Roboto;
      font-weight: 300;
      line-height: 14px;
      font-stretch: normal;
      margin-right: 0;
      margin-bottom: 0;
      text-decoration: none;
    }
    .generator-text16 {
      left: 42px;
      color: var(--dl-color-light_surface-primary);
      height: auto;
      position: absolute;
      font-size: 25px;
      align-self: auto;
      font-style: Regular;
      text-align: left;
      font-family: Montserrat;
      font-weight: 400;
      line-height: 32px;
      font-stretch: normal;
      margin-right: 0;
      margin-bottom: 0;
      text-decoration: none;
    }
    
    
    .generator-rectangle511 {
      top: 60px;
      left: 44px;
      width: 945px;
      height: 1px;
      position: absolute;
      border-color: transparent;
    }
    .row.content {height: 1500px}
        
        /* Set gray background color and 100% height */
        .sidenav {
          background-color: #fafafa;
          height: 100%;
          font-family: Montserrat;
        }
        
        /* Set black background color, white text and some padding */
        footer {
          background-color: #555;
          color: white;
          padding: 15px;
        }
        
        /* On small screens, set height to 'auto' for sidenav and grid */
        @media screen and (max-width: 767px) {
          .sidenav {
            height: auto;
            padding: 15px;
          }
          .row.content {height: auto;} 
        }
    
    
    .input-controll-ico:hover {
        filter: saturate(4);
        cursor: pointer;
      }
      .input-control{
        display: flex;
        align-items: center;
        margin-left: -65px;
        gap: 4px
      }
      .input-wrapper {
        display: flex;
      }
      .input-wrapper button {
        margin-left: -40px;
      }
      .notes {
        font-size: 12px;
        margin-top: 49px;
        margin-bottom: 49px;
      }
      .login-form {
        width: 460px;
      }
      .inputWithLabel{
        text-align: left;
        font-size: 14px;
        margin-top: 48.75px;
      }
      .input-field {
        border-radius: 10px;
        border: 1px solid #CBD3DC; 
        width: 95%;
        height: 40px;
        padding: 0 10px;
        font-size: 16px;
      }
      .input-field:focus {
        outline: none !important;
        border: 1px solid #FF8838; 
      }
      .mainWrapper {
        max-width: 1440px;
        display: flex;
        justify-content: center;
      }
      .login-form-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      body {
        font: 400 15px Lato, sans-serif;
        line-height: 1.8;
        color: #818181;
      }
      h2 {
        font-size: 24px;
        text-transform: uppercase;
        color: #303030;
        font-weight: 600;
        margin-bottom: 30px;
      }
      h4 {
        font-size: 19px;
        line-height: 1.375em;
        color: #303030;
        font-weight: 400;
        margin-bottom: 30px;
      }  
      .jumbotron {
        background-color: #f4511e;
        color: #fff;
        padding: 100px 25px;
        font-family: Montserrat, sans-serif;
      }
      .container-fluid {
        padding: 1px 15px;
      }
      .bg-grey {
        background-color: #f6f6f6;
      }
      .logo-small {
        color: #f4511e;
        font-size: 50px;
      }
      .logo {
        color: #f4511e;
        font-size: 200px;
      }
      .thumbnail {
        padding: 0 0 15px 0;
        border: none;
        border-radius: 0;
      }
      .thumbnail img {
        width: 100%;
        height: 100%;
        margin-bottom: 10px;
      }
      .carousel-control.right, .carousel-control.left {
        background-image: none;
        color: #f4511e;
      }
      .carousel-indicators li {
        border-color: #f4511e;
      }
      .carousel-indicators li.active {
        background-color: #f4511e;
      }
      .item h4 {
        font-size: 19px;
        line-height: 1.375em;
        font-weight: 400;
        font-style: italic;
        margin: 70px 0;
      }
      .item span {
        font-style: normal;
      }
      .panel {
        border: 1px solid #f4511e; 
        border-radius:0 !important;
        transition: box-shadow 0.5s;
      }
      .panel:hover {
        box-shadow: 5px 0px 40px rgba(0,0,0, .2);
      }
      .panel-footer .btn:hover {
        border: 1px solid #f4511e;
        background-color: #fff !important;
        color: #f4511e;
      }
      .panel-heading {
        color: #fff !important;
        background-color: #f4511e !important;
        padding: 25px;
        border-bottom: 1px solid transparent;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      .panel-footer {
        background-color: white !important;
      }
      .panel-footer h3 {
        font-size: 32px;
      }
      .panel-footer h4 {
        color: #aaa;
        font-size: 14px;
      }
      .panel-footer .btn {
        margin: 15px 0;
        background-color: #f4511e;
        color: #fff;
      }
      .navbar {
        margin-bottom: 0;
        background-color: #f4511e;
        z-index: 9999;
        border: 0;
        font-size: 12px !important;
        line-height: 1.42857143 !important;
        letter-spacing: 4px;
        border-radius: 0;
        font-family: Montserrat, sans-serif;
      }
      .navbar li a, .navbar .navbar-brand {
        color: #161616 !important;
      }
      .navbar-nav li a:hover, .navbar-nav li.active a {
        color: #058135 !important;
        background-color: #e6e6e6 !important;
      }
      .navbar-default .navbar-toggle {
        border-color: transparent;
        color: #fff !important;
      }
      footer .glyphicon {
        font-size: 20px;
        margin-bottom: 20px;
        color: #058135;
      }
      .slideanim {visibility:hidden;}
      .slide {
        animation-name: slide;
        -webkit-animation-name: slide;
        animation-duration: 1s;
        -webkit-animation-duration: 1s;
        visibility: visible;
      }
      .input-wrapper button {
        margin-left: -40px;
      }
      .notes {
        font-size: 12px;
        margin-top: 49px;
        margin-bottom: 49px;
      }
      .login-form {
        width: 460px;
      }
      .inputWithLabel{
        text-align: left;
        font-size: 14px;
        margin-top: 48.75px;
      }
      .input-field {
        border-radius: 10px;
        border: 1px solid #CBD3DC; 
        width: 95%;
        height: 40px;
        padding: 0 10px;
        font-size: 16px;
      }
      .input-field:focus {
        outline: none !important;
        border: 1px solid #FF8838; 
      }
      .mainWrapper {
        max-width: 1440px;
        display: flex;
        justify-content: center;
      }
      .login-form-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }

      

      @keyframes slide {
        0% {
          opacity: 0;
          transform: translateY(70%);
        } 
        100% {
          opacity: 1;
          transform: translateY(0%);
        }
      }
      @-webkit-keyframes slide {
        0% {
          opacity: 0;
          -webkit-transform: translateY(70%);
        } 
        100% {
          opacity: 1;
          -webkit-transform: translateY(0%);
        }
      }
      @media screen and (max-width: 768px) {
        .col-sm-4 {
          text-align: center;
          margin: 25px 0;
        }
        .btn-lg {
          width: 100%;
          margin-bottom: 35px;
        }
      }
      @media screen and (max-width: 480px) {
        .logo {
          font-size: 150px;
        }
      }
      </style>
      