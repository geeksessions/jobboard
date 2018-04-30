FROM node:8
RUN mkdir -p /app/node_modules
WORKDIR /app/
ENV NODE_ENV development
COPY package*.json /app/
RUN npm install --verbose --progress=false
EXPOSE 3000
COPY . /app/

CMD [ "npm", "start" ]
