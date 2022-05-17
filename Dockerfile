FROM cypress/base:12

WORKDIR /diploma

ENV CYPRESS_CACHE_FOLDER "/.cypress"
# Reduce Cypress logging
ENV CI true

# Copy required files
COPY package.json package-lock.json docker-entrypoint.sh ./

# Install dependencies
RUN npm ci

# Verify Cypress installation
RUN npx cypress verify

# Copy tests/scripts
COPY cypress cypress

RUN chmod +x docker-entrypoint.sh

CMD ["./docker-entrypoint.sh"]
