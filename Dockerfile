FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=development
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Install necessary utilities if needed
RUN apk add --no-cache libc6-compat curl git

EXPOSE 3000

CMD ["npm", "run", "dev"]
