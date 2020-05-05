echo "Installing grunt"
cd /codedeploy/sapfioriapp
npm install grunt
npm install grunt-nwabap-ui5uploader
echo "Deploy to"
# AWS CLI SECRETSMANAGER
duser=$(aws secretsmanager get-secret-value --secret-id SAP_DEPLOY --region us-east-1 --query SecretString --output text | grep -oP '(?<="USER":")[^"]*')
dpw=$(aws secretsmanager get-secret-value --secret-id SAP_DEPLOY --region us-east-1 --query SecretString --output text | grep -oP '(?<="PASSWORD":")[^"]*')
durl=$(aws secretsmanager get-secret-value --secret-id SAP_DEPLOY --region us-east-1 --query SecretString --output text | grep -oP '(?<="URL":")[^"]*')
echo $durl
echo "as"
echo $duser
grunt deploy --server=$durl --user=$duser --pwd=$dpw