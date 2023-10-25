FROM node:18-alpine
# Set environment variables from build arguments
ARG GHOST_CONTENT_API
ARG GTM_MEASUREMENT_ID
ENV GHOST_CONTENT_API=$GHOST_CONTENT_API
ENV GTM_MEASUREMENT_ID=$GTM_MEASUREMENT_ID
WORKDIR /app
COPY . .
RUN npm install --omit=dev --no-update-notifier
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]