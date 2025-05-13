FROM node:20

# Install SSH server and Git
RUN apt-get update && apt-get install -y openssh-server git && mkdir /var/run/sshd

# Create a non-root user 'dev'
RUN useradd -ms /bin/bash dev

# Create SSH directory for 'dev' user
RUN mkdir -p /home/dev/.ssh

# Copy public key into authorized_keys
COPY deploy_key.pub /home/dev/.ssh/authorized_keys

# Install PM2 globally
RUN npm install -g pm2@6.0.6

# Expose SSH port
EXPOSE 22

# Run SSH server
CMD ["/usr/sbin/sshd", "-D"]
