node {
     stage('Clone repository') {
         checkout scm
     }
     stage('Build image') {
         app = docker.build("wndudwns0028/diary")
     }
     stage('Push image') {
         docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
             app.push("${env.BUILD_NUMBER}")
             app.push("latest")
         }
     }
 }




#변경점
     stage('Build image') {
         app = docker.build("wndudwns0028/diary") #Push Image 단계에서 빌드번호를 붙이기 때문에 옵션 제거
     }
     stage('Push image') {
         docker.withRegistry('https://registry.hub.docker.com', 'docker-jenkins-credential') #업로드할 레지스트리 정보, Jenkins Credentials ID {
             app.push("${env.BUILD_NUMBER}") #image에 빌드번호를 태그로 붙인 후 Push
             app.push("latest") #image에 latest를 태그로 붙인 후 Push
     }
  }
}