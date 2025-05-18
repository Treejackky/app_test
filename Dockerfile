FROM node:18-alpine

# Set the working directory and change its ownership to the non-root user
WORKDIR /usr/src/app

# Copy and install dependencies
COPY package*.json ./
RUN npm ci --only=production --ignore-scripts && npm rebuild sharp

# Copy the application source code
COPY . .

# Set environment variables and expose the port
ENV PORT=3000
EXPOSE 3000

# Switch to the non-root user and start the application
CMD ["npm", "run", "prod"]