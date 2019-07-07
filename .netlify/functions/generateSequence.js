const { config } = require("dotenv");
config();
const generate = require("./utils/generateSequence");
const { generateAnswer } = require("./utils/airtable");

exports.handler = (event, _context, callback) => {
  const { colours } = event.queryStringParameters;
  const answer = generate(colours.split(","));
  generateAnswer(answer)
    .then(gameId => {
      const response = {
        statusCode: 200,
        body: gameId,
        headers: {
          "content-type": "application/json",
          "cache-control": "Cache-Control: max-age=300, public"
        }
      };
      callback(null, response);
    })
    .catch(err => console.log(err));
};
