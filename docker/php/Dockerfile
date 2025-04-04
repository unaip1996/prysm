FROM php:8.2-fpm

# Instalar PHP, extensiones y Node.js
RUN apt-get update && apt-get install -y \
    libpq-dev \
    zip \
    unzip \
    curl \
    gnupg \
    nano \
    procps \
    && docker-php-ext-install pdo pdo_pgsql \
    && curl -sL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs


# Configurar PHP-FPM para escuchar en 0.0.0.0:9000
RUN sed -i 's/127.0.0.1:9000/0.0.0.0:9000/g' /usr/local/etc/php-fpm.d/www.conf

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Crear directorios necesarios y establecer permisos
RUN mkdir -p /var/www/html/storage/framework/{cache,sessions,testing,views} \
    && mkdir -p /var/www/html/bootstrap/cache \
    && chown -R www-data:www-data /var/www/html/storage \
    && chown -R www-data:www-data /var/www/html/bootstrap/cache

WORKDIR /var/www/html
