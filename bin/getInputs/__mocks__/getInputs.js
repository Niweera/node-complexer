const path = require("path");

const getInputs = async () => ({
  input_path: path.join(__dirname, "input.json"),
  output_path: path.join(
    path.resolve(__dirname, "../.."),
    "saveComplexer",
    "__mocks__",
    "output.json"
  ),
});

module.exports = {
  getInputs,
};
