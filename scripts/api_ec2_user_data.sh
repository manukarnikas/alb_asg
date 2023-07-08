#!/bin/bash
cd /home/ec2-user

# Step 1: Clone the  Git repo
git clone https://github.com/manukarnikas/alb_asg.git 

# Step 2: Change to the cloned repo directory
cd alb_asg/ui

# Step 3: Create .env file with URL env variable
echo "NODE_PORT=3008" > .env
echo "DB_HOST=<url>" > .env

# Step 4: Run npm install
npm install

# Step 5: Start the application
npm start 