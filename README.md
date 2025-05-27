Btech Final Year Group Project

"Dockerized machine learning application"


Dockerfile is inside the stk directory.

You can run the Dockerfile to build the image using the command:

docker build -t mora-app .


After building the image you can run the container by the command:

docker run -p 3000:3000 mora-app

If the port is busy you can run on a differnet port using:
docker run -p 3001:3001 -e PORT=3001 mora-app

This does two things:

    Tells React to run on port 3001 (via -e PORT=3001)

    Maps container's port 3001 to host's port 3001
