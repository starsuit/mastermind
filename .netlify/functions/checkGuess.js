const { config } = require("dotenv");
config();
const checkGuess = require("./utils/checkGuess");
const { getAnswer } = require("./utils/airtable");

exports.handler = (event, _context, callback) => {
  const { guess, gameId } = event.queryStringParameters;
  getAnswer(gameId)
    .then(answer => {
      const result =
        guess === "game over" ? answer : checkGuess(guess.split(","), answer);
      const body = JSON.stringify(result);
      const response = {
        statusCode: 200,
        body: body,
        headers: {
          "content-type": "application/json",
          "cache-control": "Cache-Control: max-age=300, public"
        }
      };
      callback(null, response);
    })
    .catch(err => console.log(err));
};
