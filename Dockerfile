FROM ghcr.io/puppeteer/puppeteer:22.6.4

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

WORKDIR /usr/src/app

COPY    package*.json ./

RUN npm ci

COPY . .
CMD ['cd', 'client', '&&', 'npm', 'run', 'dev']