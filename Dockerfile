# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy dependencies and install
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Expose port and run the app
EXPOSE 3000
CMD ["node", "index.js"]
