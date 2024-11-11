# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application source code into the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use a lightweight web server to serve the production build
FROM nginx:alpine

# Step 8: Copy the built React app into the Nginx server's public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose port 80 to access the app
EXPOSE 80

# Step 10: Start Nginx in the background
CMD ["nginx", "-g", "daemon off;"]
