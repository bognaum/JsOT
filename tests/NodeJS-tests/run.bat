@rem cmd /K supervisor --inspect -n error -s -w ../../ -i ../../.git -- index.js
cmd /K nodemon --inspect --watch ../../../ -e js,html  --ignore ../../../.git/* -- index.js