pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                cleanWs()
                echo 'Pull Code'
                git branch: 'main', url: 'https://github.com/Bot-Bank100/SDTE-Final.git'
            }
        }
        stage('Unit Test') {
            steps {
                echo 'Unit Test'
            }
        }
        stage('Component Test') {
            steps {
                echo 'Component Test'
            }
        }

        stage('Packaging') {
            steps {
                echo 'Packaging'
            }
        }
        stage('Deploy to target server') {
            steps {
                echo 'Deploy to target server'
                bat: "docker pull mongo"
                bat: "docker run -d -p 8000:27017 mongo"
                bat: "docker-compose -f docker-compose-deploy.yml up -d"
            }
        }
        stage('Notification') {
            steps {
                echo 'OK'
            }
        }
    }
}
