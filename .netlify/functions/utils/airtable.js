const { config } = require("dotenv");
config();

const Airtable = require("airtable");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY
});

const base = Airtable.base("appY1nMRVHG00fHFH");

const getAnswer = gameId => {
  return new Promise((resolve, reject) => {
    base("games").find(gameId, (err, record) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(JSON.parse(record.fields.answer));
    });
  });
};

const generateAnswer = answer => {
  return new Promise((resolve, reject) => {
    base("games").create(
      {
        answer: JSON.stringify(answer)
      },
      (err, record) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        resolve(JSON.stringify(record.getId()));
      }
    );
  });
};

module.exports = { getAnswer, generateAnswer };
