# pull official openjdk v.11 image from DockerHub
FROM openjdk:11.0

# copy the Java Springboot webapp (MockCPE.jar) from local target folder to the /app folder of the image.  
ADD target/MockCPE.jar /app/MockCPE.jar

# expose port 8080 on container
EXPOSE 8080

# executes this cmd to start up the web app when container starts
ENTRYPOINT ["java", "-jar", "/app/MockCPE.jar"]

