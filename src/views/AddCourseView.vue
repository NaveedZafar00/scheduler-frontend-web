<template>
  <div class="home">
    <div class="course-page-wrapper">
      
      <div class="menus">
        <div class="iu-logo-on-menu-page" id="iu_logo">
          <img src="@/assets/icons/IU_logo.png" alt="UniversityImage" />
        </div>
        
        <div class="menu-buttons">
          <div class="add-course-button">
            <img src="@/assets/icons/add_course.png" alt="Add logo" class="menu-icon">
            Add new course
          </div>

          <div class="list-of-courses-button">
            <img src="@/assets/icons/courses_list.png" alt="Add logo" class="menu-icon">
            List of courses
          </div>

          <div class="generator-button">
            <img src="@/assets/icons/timetable_generator.png" alt="Add logo" class="menu-icon">
            Generator
          </div>
          
        </div>
      </div>
      <div class="flex-page-container">
      <div>
        <div class="admin-logout-wrapper">
          <div class="admin-logo-image">
            <img src="@/assets/images/admin_avatar.png" alt="admin avatar">
            Admin
          </div>
        </div>
        
        <div>
          <div class="page-label-text">
            Add course buttons 
            <img src="@/assets/icons/line_under_PageLabel.png" alt="rectangle_line" >
          </div>

          <div class="inputWithLabel">
            <div>Course Name</div>
            <div class="input-wrapper">
              <input type="text" class="input-field" placeholder="Course Name">
            </div>
          </div>

          <div class="inputWithLabel">
            <div>Professor</div>
            <div class="input-wrapper">
              <input type="text" class="input-field" placeholder="Professor">
            </div>
          </div>

          <div class="inputWithLabel">
            <div>Room number</div>
            <div class="input-wrapper">
              <input type="text" class="input-field" placeholder="Room number">
            </div>
          </div>
          
          <div class="inputWithLabel">
            <div>Additional Lecturer</div>
            <div class="input-wrapper">
              <input type="text" class="input-field" placeholder="Additional Lecturer">
            </div>
          </div>

          <div id="group1" class="radio-online-offline">
            <div class="form_radio">
	            <input id="radio-online-1" type="radio" name="radio" value="1" checked>
	            <label for="radio-online-1">Online course</label>
            </div>
 
            <div class="form_radio">
	            <input id="radio-online-2" type="radio" name="radio" value="2">
	            <label for="radio-online-2">Offline course</label>
            </div>
          </div>

          <div class="text-for-whom-course"> For whom is this course:</div>

          <div id="group2" class="radio-for-whom-block">

            <div class="form_radio">
	            <input id="radio-whom-1" type="radio" name="radio1" value="1" checked>
	            <label for="radio-whom-1">BS_1</label>
            </div>
 
            <div class="form_radio">
	            <input id="radio-whom-2" type="radio" name="radio1" value="2">
	            <label for="radio-whom-2">BS_2</label>
            </div>

            <div class="form_radio">
	            <input id="radio-whom-3" type="radio" name="radio1" value="3">
	            <label for="radio-whom-3">BS_3</label>
            </div>

            <div class="form_radio">
	            <input id="radio-whom-4" type="radio" name="radio1" value="4">
	            <label for="radio-whom-4">BS_4</label>
            </div>

            <div class="form_radio">
	            <input id="radio-whom-5" type="radio" name="radio1" value="5">
	            <label for="radio-whom-5">MS_1</label>
            </div>

            <div class="form_radio">
	            <input id="radio-whom-6" type="radio" name="radio1" value="6">
	            <label for="radio-whom-6">MS_2</label>
            </div>
          </div>
          
          <div class="text-form-of-course"> Form of this course:</div>

          <div id="group3" class="radio-form-of-course">

            <div class="form_radio">
	            <input id="radio-form-1" type="radio" name="radio2" value="1" checked>
	            <label for="radio-form-1">Block_1</label>
            </div>
 
            <div class="form_radio">
	            <input id="radio-form-2" type="radio" name="radio2" value="2">
	            <label for="radio-form-2">Block_2</label>
            </div>

            <div class="form_radio">
	            <input id="radio-form-3" type="radio" name="radio2" value="3">
	            <label for="radio-form-3">Full Semester</label>
            </div>

          </div>

        </div>
        
      </div>
      <div class="button-primary"> Add new </div>
    </div>
    
      
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: "HomeView",
  components: { Button },
  setup() {
    function login() {
      console.log('login')
    }

    return {
      login,
    }
  }
};
</script>
<style scoped>

.button-primary:hover {
  background: #ff8838d5;
}

.flex-page-container{
  display: flex;
  /* justify-content: start; */
  align-items: start;
  flex-direction: column;
}

.button-primary{
  background: #FF8838;
  border-radius: 16px;
  padding: 16px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 50px;
}

.text-form-of-course{
  display: flex;
  margin-left: 50px;
}

.radio-form-of-course{
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  margin-left: 50px;
  padding: 20px 0px;
  gap: 48px;
}

.text-for-whom-course{
  display: flex;
  margin-left: 50px;

}
.radio-for-whom-block{
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  margin-left: 50px;
  padding: 20px 0px;
  gap: 48px;
}

.radio-online-offline{
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  margin-left: 50px;
  padding: 20px 0px;
  gap: 48px;
}

.form_radio {
	margin-bottom: 30px;
}
.form_radio input[type=radio] {
	display: none;
}
.form_radio label {
	display: inline-block;
	cursor: pointer;
	position: relative;
	padding-left: 25px;
	margin-right: 0;
	line-height: 18px;
	user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.form_radio label:before {
	content: "";
	display: inline-block;
	width: 20px;
	height: 20px;
	position: absolute;
	left: 0;
	bottom: 1px;
	background: url(@/assets/icons/radio_before.png) 0 0 no-repeat;
}
 
/* Checked */
.form_radio input[type=radio]:checked + label:before {
	background: url(@/assets/icons/radio_after.png) 0 0 no-repeat;
}
 
/* Hover */
.form_radio label:hover:before {
	filter: brightness(120%);
}
 
/* Disabled */
.form_radio input[type=radio]:disabled + label:before {
	filter: grayscale(100%);
}

.choose-element-class-online-offline{
  display: flex;

}

.input-wrapper {
  display: flex;
}
.input-wrapper button {
  margin-left: -40px;
}

.inputWithLabel{
  text-align: left;
  font-size: 14px;
  margin-top: 15px;
  margin-left: 50px;
  padding: 8px 0px 16px;
}
.input-field {
  border-radius: 10px;
  border: 1px solid #CBD3DC; 
  width: 35%;
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
}
.input-field:focus {
  outline: none !important;
  border: 1px solid #FF8838; 
}

.page-label-text{
  left: 42px;
  color: var(--dl-color-light_surface-primary);
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
  margin-top: 13px;
  margin-left: 50px;
}

.admin-logo-image{
  padding-left: 980px;
  padding-top: 13px;
  padding-right: 50px;
  padding-bottom: 13px;
}

.admin-logout-wrapper{
  width: 1188px;
  height: 84px;
}

.generator-button{
  padding: 12px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.list-of-courses-button{
  padding: 12px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.add-course-button{
  padding: 12px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
}

.iu-logo-on-menu-page{
  margin-top: 22px;
  margin-right: 53px;
  margin-bottom: 23px;
  margin-left: 25;
}

.menu-icon{
  margin-right: 10px;
}

.menu-buttons{
  font-size: 14px;
  width: 252px;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.menus{
  background-color: rgb(234, 235, 232);
  display: block;
  width: 252px;
}

.course-page-wrapper {
  max-width: 1440px;
  display: flex;
}

</style>
