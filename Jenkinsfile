node {
     stage('Clone repository') {
         checkout scm
     }
     stage('Build image') {
         app = docker.build("wndudwns0028/diary")
     }
     stage('Push image') {
         docker.withRegistry('https://registry.hub.docker.com', 'docker-jenkins-credential') {
             app.push("${env.BUILD_NUMBER}")
             app.push("latest")
         }
     }
 }





