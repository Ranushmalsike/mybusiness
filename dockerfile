# Use the official Node.js image as the base
FROM node:22.2.0-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install mysql2

# Copy the application code
COPY . .

# Expose the port your Node.js application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]