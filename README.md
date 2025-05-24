Btech Final Year Group Project

"Dockerized machine learning application"


Dockerfile is inside the stk directory.

You can run the Dockerfile to build the image using the command:

docker build -t mora-app .


After building the image you can run the container by the command:

docker run -p 3000:3000 mora-app
