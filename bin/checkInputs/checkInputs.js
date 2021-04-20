const fs = require("fs");
const path = require("path");

const checkInputs = (input_path) => {
  return new Promise((resolve, reject) => {
    try {
      if (fs.existsSync(input_path)) {
        const ext = path.extname(path.resolve(input_path));
        if (ext === ".json") {
          resolve();
        } else {
          reject(`${input_path} is not a JSON file.`);
        }
      } else {
        reject(`${input_path} does not exist.`);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  checkInputs,
};
