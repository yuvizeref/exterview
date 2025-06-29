# Stage 1: Build Stage (for React app)
FROM node:22.16.0 as build

WORKDIR /app

# Copy only the necessary files (excluding large images)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy source code (exclude large images via .dockerignore)
COPY . .

# Build the React app (static files)
RUN npm run build

# Stage 2: Production Stage (use Nginx to serve built files)
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
