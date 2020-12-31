const fs = require("fs");

const saveComplexer = (output_path, complexity_object) => {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFileSync(output_path, JSON.stringify(complexity_object, null, 4));
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  saveComplexer,
};
