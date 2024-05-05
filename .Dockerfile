# Use an official Node.js image as the build environment
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining source code to the working directory
COPY . .

# Build the React app
RUN npm run build

# # Use an official Nginx image as the base for serving content
# FROM nginx:alpine

# # Copy the built React app from the build stage to the Nginx server's html directory
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80 to the outside world
# EXPOSE 80

# # Start Nginx server when the container starts
# CMD ["nginx", "-g", "daemon off;"]
