#!/usr/bin/env bash

echo '>>>> Logging user in....'

response=$(curl -s -H "Accept: application/json" \
  -H "Content-Type:application/json" \
  -X PUT --data '{"name": "uname", "password": "mypassword", "type": "user"}' \
  --user uname:mypassword http://localhost:4873/-/user/org.couchdb.user:uname 2>&1
)
echo $response

TOKEN=$(echo ${response} | jq '.token')

npm set //localhost:4873/:_authToken=$TOKEN
cd dist/dope-table
npm publish --registry=http://localhost:4873
