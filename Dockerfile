FROM --platform=$BUILDPLATFORM node:18-alpine

WORKDIR /usr/src/app

# Copy only necessary files for installing dependencies
COPY package*.json ./

RUN npm ci --only=production && npm rebuild sharp

# Copy the remaining source code
COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "run", "prod"]
