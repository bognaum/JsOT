@rem cmd /K supervisor --inspect -n error -s -w ../../ -i ../../.git -- index.js
cmd /K nodemon --inspect --watch ../../ --ignore ../../.git/* -- index.js