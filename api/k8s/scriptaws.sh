#bin/bash
mkdir ~/.aws/
touch ~/.aws/credentials
echo "[default]" >> ~/.aws/credentials
echo "aws_access_key_id =  $AWS_ACCESS_KEY_ID" >> ~/.aws/credentials
echo "aws_secret_access_key = $AWS_SECRET_ACCESS_KEY" >> ~/.aws/credentials
touch ~/.aws/config 
echo "[default]" >> ~/.aws/config
echo "region = sa-east-1" >> ~/.aws/config
echo "output = json" >> ~/.aws/config
chmod 600 ~/.aws/*
