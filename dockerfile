FROM mcr.microsoft.com/playwright:v1.53.1-jammy

RUN mkdir /demoblaze
WORKDIR /demoblaze
COPY . /demoblaze/

RUN npm install --force
RUN npx playwright install