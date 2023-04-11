FROM php:7.4-apache
COPY ./index.php ./
EXPOSE 5000

RUN apt-get update && apt-get upgrade -y && apt-get install -y nano
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli \
    && a2enmod headers
CMD ["php", "-S", "0.0.0.0:3001"]