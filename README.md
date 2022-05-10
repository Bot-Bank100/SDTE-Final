# SDTE-Final สอบปลายภาย
## Requirement
  * Node version 16+
  * MongoDB Community Server
  * Docker 4.6.0+
  
## Docker Installation
  * git clone https://github.com/Bot-Bank100/SDTE-Final
  * docker pull mongo
  * docker run -d -p 8000:27017 mongo
  * cd SDTE-Final
  * docker-compose -f docker-compose-deploy.yml up -d
  
## หลังจากทำการ Install และ Deploy เสร็จแล้วสามารถใช้งานได้ที่
http//localhost:9080/

## การสร้างข้อมูลใน MongoDB
ใน Github จะมีไฟล์ข้อมูล json 2 ไฟล์ ชื่อว่า "bangkokCourses" และ "chumphonCourses"  
ใน mongoDB ให้สร้าง Database ชื่อว่า "SDTE" และสร้าง 2 Collections คือ "Courses" และ "ChumphonCourses"  
เพิ่มข้อมูลเข้าไป "bangkokCourses" => "Courses" และ "chumphonCourses" => "ChumphonCourses"  
