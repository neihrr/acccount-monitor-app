# Stage 1: Build
FROM node:18-slim as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:18-slim
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --production

# Set default environment variables
ENV ACCOUNT_MANAGER_API_URL=http://localhost:8080

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
