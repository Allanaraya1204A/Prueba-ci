pipeline {
    agent any

    stages {
        stage('Run Node script') {
            steps {
                // Opcional: mostrar versión de Node
                sh 'node --version || (curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs)'

                // Ejecutar tu script prueba.js
                sh 'node prueba.js'
            }
        }
    }
}
