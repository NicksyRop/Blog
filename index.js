const { config } = require("dotenv");
const http = require("http");

const app = require("./app.js");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  Logger.info(`Application running on htps://localhost:${config.PORT}`);
});
