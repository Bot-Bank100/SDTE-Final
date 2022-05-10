<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="findOptions">
          <p>ระบบรับสมัครนักศึกษาระดับปริญญาเอก</p>
          <p>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
        </div>
        <form class="form">
          <div class="row">
            <div class="col">
              <label for="">ค้นหา 'คณะ'</label>
              <select class="form-select">
                <option value="">..</option>
                <option>สถาปัตยกรรม ศิลปะและการออกแบบ</option>
                <option>เทคโนโลยีการเกษตร</option>
                <option>วิทยาศาสตร์</option>
              </select>
            </div>
            <div class="col">
              <label for="">ค้นหา 'รอบรับสมัคร</label>
              <select class="form-select">
                <option value="">..</option>
                <option>( 1/2565 ) รอบ 1 - รับสมัครประจำภาคการศึกษา</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="">ค้นหา 'โครงการ'</label>
              <select class="form-select">
                <option value="">..</option>
                <option>รับเข้า 1/2565 คณะสถาปัตยกรรม ศิลปะและการออกแบบ</option>
              </select>
            </div>
            <div class="col">
              <label for="">ค้นหาหลักสูตร ไทย / นานาชาติ</label>
              <select class="form-select">
                <option value="">..</option>
                <option>หลักสูตรนานาชาติ</option>
                <option>หลักสูตรไทย</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="">ค้นหา 'โครงการ'</label>
              <input type="text" class="form-control" placeholder="">
            </div>
          </div>
        </form>
      </div>
      <div class="resultDisplay">
        <p style="font-size: 27px; margin: 0">ผลการค้นหา : 135 รายการ</p>
        <div>
          <p style="font-size: 31px">กทม.</p>
          <p style="font-size: 16px">หมายเหตุ</p>
          <p style="font-size: 16px">กรณีเปลี่ยนสาขาวิชาที่สมัครหรืออันดับหรือโครงการที่สมัคร ต้องสมัครใหม่ และชำระเงินค่าสมัครใหม่เท่านั้น โดยสถาบันฯ จะถือว่าการสมัครครั้งสุดท้ายที่มีการชําระเงินค่าสมัครเรียบร้อยแล้วเป็นครั้งที่ต้องการเข้าสอบ และครั้งที่สมัครก่อนหน้าจะถือเป็นโมฆะ แม้ว่าจะชําระเงินค่าสมัครแล้วก็ตาม</p>
          <div v-for="course in courses" :key="course.index" class="courseCard">
            <p>หลักสูตร : {{ course.name }}</p>
            <p>แผนการศึกษา : {{ course.plan }} | ช่วงเวลาเรียน : ปกติ | เฉพาะ :</p>
            <span class="courseTag">({{ course.year }})</span><span class="courseTag">({{ course.round }})</span><span class="courseTag">({{ course.project }})</span>
            <p style="font-size: 20px">คณะ {{ course.faculty }}</p>
            <p style="font-size: 15px">หลักสูตร : {{ course.name }} / {{ course.engName }}</p>
            <p style="font-size: 20px">วันที่เปิดรับสมัคร : {{ course.openRegisDate}}</p>
            <div class="cardButton">
              <span><button class="btn btn-outline-primary">สมัคร</button></span><span><button class="btn btn-outline-primary">ประกาศรับสมัคร</button></span><span><button class="btn btn-outline-primary">คุณสมบัติผู้สมัคร</button></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'MainPage',
  data() {
    return {
      courses: [],
    }
  },
  created() {
    axios.get('http://host.docker.internal:3080/getCourses').then((res) => {
        console.log(res.data)
        this.courses = res.data
      }).catch((error) => {
        console.log(error)
      })
  },
  /*methods: {
    doSomething() {
      axios.post('http://localhost:3000/getCourses').then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    },
  }*/
}
</script>

<style>
.findOptions {
  text-align: left;
  font-size: 20px;
}
.form {
  text-align: left;
}
.resultDisplay {
  padding: 10px;
}
.courseCard {
  margin: 1%;
  width: 100%;
  border: solid black 1px;
  padding: 10px;
}
.courseCard p{
  padding: 3px;
  margin: 0;
}
.cardButton {
  padding: 10px;
}
.cardButton button {
  margin: 3px 3px;
}
.courseTag {
  font-size: 13px;
  margin: 0px 5px;
}
</style>