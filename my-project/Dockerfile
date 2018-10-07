## Context
FROM node:10.7

LABEL Author Chris Dillinger

## Layer 1 - Module dependencies only
COPY ./package*.json ./
RUN npm install

#ENV NODE_ENV=production
ENV NODE_ENV=development

## Layer 2 - All application files, minus anything in .dockerignore
COPY . .
#RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000
#CMD ["npm", "start"]
CMD ["npm", "run", "dev"]

# Notes:
#  Had to keep eslint off, as it complains about default generated code when using create-nuxt-app
#  Can enable the commented out commands to make this into 'production' container
#  Not sure about hot reloading in container so running as dev may be pointless.



