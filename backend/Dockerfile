FROM php:7.4-apache
COPY ./ ./
EXPOSE 3001


RUN apt-get update && apt-get install -y \
        libpq-dev \
        && docker-php-ext-install pdo pdo_pgsql pgsql
# RUN apt-get update && apt-get upgrade -y && apt-get install -y nano \ libpq-dev \
#     && docker-php-ext-install pdo pdo_pgsql pgsql
# RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli \
#     && a2enmod headers
#RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \ && docker-php-ext-install pgsql pdo_pgsql

CMD ["php", "-S", "0.0.0.0:3001"]