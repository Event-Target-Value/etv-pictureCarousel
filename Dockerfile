# Use the official image as a parent image.
FROM node:current

# Make a folder in your image where your app's source code can live
RUN mkdir -p /fec/pictureCarousel

# Set the working directory.
WORKDIR /fec/pictureCarousel

# Copy the file from your host to your current location.
COPY . /fec/pictureCarousel

# Run the command inside your image filesystem.
RUN npm install

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 3000

# Run the specified command within the container.
CMD [ "npm", "start" ]