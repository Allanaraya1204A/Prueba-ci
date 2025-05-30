pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }

    stages {
        stage('Run JS script') {
            steps {
                sh 'node prueba.js'
            }
        }
    }
}
