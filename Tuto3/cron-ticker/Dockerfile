# app /usr /lib
FROM node:19.2-alpine

# cd app
WORKDIR /app

# Dest /app
COPY package.json ./

# Instalar las dependencias (todas DEV y PROD)
RUN npm install

# La proxima linea copia todo el dirctorio y no queremos eso
COPY . .

# Realizar pruebas
RUN npm test

# Eliminar archivos y directorios no necesarios en PROD (-rf es recursive forced)
# RUN rm -rf tests
# RUN rm -rf node_modules
RUN rm -rf tests && rm -rf node_modules

# Instalar unicamente las dependencias de PROD
RUN npm install --prod

# Comando Run de la imagen
CMD ["node", "app.js"]