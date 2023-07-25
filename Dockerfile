# Use the official Node.js 16 image as a base
FROM node:16

# Set a working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Storybook
RUN npm run build-storybook

# Expose the port that Storybook listens on (default is 6006)
EXPOSE 6006

# Start Storybook when the container starts
CMD ["yarn", "storybook", "6006"]
