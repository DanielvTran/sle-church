# 1. Use official Node.js image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies only when package files change
COPY package.json package-lock.json* ./
RUN npm install

# 4. Copy rest of the app
COPY . .

# 5. Generate the Prisma client
RUN npx prisma generate

# 6. Expose the dev server port
EXPOSE 3000

# 7. Start dev server with Turbopack
CMD ["npm", "run", "dev"]