# Step 1: Use a base image with OpenJDK 21 for building
FROM openjdk:21-jdk-slim AS build

# Set working directory in the container
WORKDIR /app

# Copy the Maven wrapper and configuration files
COPY mvnw mvnw
COPY .mvn .mvn
COPY pom.xml ./

# Copy the source code
COPY src ./src

# Step 2: Build the application using Maven wrapper
RUN chmod +x mvnw && ./mvnw clean package -DskipTests

# Step 3: Use a smaller OpenJDK 21 image to run the app
FROM openjdk:21-jdk-slim

# Set working directory for the final image
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /app/target/exterview.jar /app/exterview.jar

# Expose port 9090 (your app's running port)
EXPOSE 9090

# Run the Spring Boot application
CMD ["java", "-jar", "/app/exterview.jar"]