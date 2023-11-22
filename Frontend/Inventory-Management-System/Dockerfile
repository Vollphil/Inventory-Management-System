# Use the official Maven image to create a build artifact
FROM maven:3.6.3-jdk-11-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

# Use OpenJDK for running the application
FROM openjdk:11-jre-slim
COPY --from=build /home/app/target/inventory-management-system-0.0.1-SNAPSHOT.jar /usr/local/lib/inventory-management-system.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/local/lib/inventory-management-system.jar"]
# Stage 1: Build the React application
FROM node:14 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2: Serve the application from Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
