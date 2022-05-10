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
