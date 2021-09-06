@rem cmd /K supervisor --inspect -n error -s -w ../../ -i ../../.git -- index.js
@rem cmd /K nodemon --inspect --enable-source-maps --watch ../../../ -e js,html  --ignore ../../../.git/* -- index.js
cmd /K nodemon --inspect --enable-source-maps --watch ../../../ -e js,html  --ignore ../../../.git/* -- index.js