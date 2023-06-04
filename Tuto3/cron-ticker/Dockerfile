# app /usr /lib
FROM node:19.2-alpine

# cd app
WORKDIR /app

# Dest /app
COPY package.json ./

# Instalar las dependencias
RUN npm install

COPY app.js ./

# Comando Run de la imagen
CMD ["node", "app.js"]