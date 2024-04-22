# Create build package
FROM public.ecr.aws/docker/library/node:18-alpine as builder

# Create app directory
WORKDIR /usr/src/app

# Copy source code
COPY package*.json tsconfig*.json .env ./

# Running npm install
RUN yarn install --production=true 

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Install Prisma and generate client
RUN yarn prisma generate
RUN yarn prisma migrate deploy

# Build project
RUN yarn build


FROM public.ecr.aws/docker/library/node:18-alpine

# Copy source code
COPY --from=builder --chown=node:node /usr/src/app/.env ./
COPY --from=builder --chown=node:node /usr/src/app/package*.json ./
COPY --from=builder --chown=node:node /usr/src/app/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /usr/src/app/dist/ ./dist/

# Switch to 'node' user 
USER node

# Map port
EXPOSE 3000

CMD ["npm", "run", "start:prod"]