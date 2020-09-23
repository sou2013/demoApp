FROM adoptopenjdk/openjdk11
ADD target/MockCPE.jar /tmp/MockCPE.jar
# no need to create dir on image before hand
# ADD will tar up the entire addedData dir and send it to docker daemon to be added at build time
# ADD addedData /addedData
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/tmp/MockCPE.jar"]


# steps below
# mvn clean package
#  docker build -t mockcpe .

# maps host dir to container dir, the data is shared in realtime.
#     docker run -p 8080:8080  mockcpe

