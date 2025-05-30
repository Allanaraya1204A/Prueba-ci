# Dockerfile
FROM jenkins/jenkins:lts

USER root

# Instalar Node.js 18.x
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean

USER jenkins
