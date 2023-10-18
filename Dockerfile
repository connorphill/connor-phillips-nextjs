FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --omit=dev --production
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]