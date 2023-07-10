#!/bin/bash
cd /home/ec2-user

# Step 1: Clone the  Git repo
git clone https://github.com/manukarnikas/alb_asg.git

# Step 2: Change to the cloned repo directory
cd alb_asg/ip-server

# Step 3: Run npm install
npm install

# Step 4: Start the application
node server.js