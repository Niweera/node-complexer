const escomplex = require("typhonjs-escomplex");
const fs = require("fs");

const runComplexer = async (input_path) => {
  const input_file_string = fs.readFileSync(input_path).toString();
  const input_file = JSON.parse(input_file_string);
  return escomplex.analyzeModuleAST(input_file);
};

module.exports = {
  runComplexer,
};
