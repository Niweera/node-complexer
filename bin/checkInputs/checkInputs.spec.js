const fs = require("fs");
const path = require("path");
const { checkInputs } = require("./checkInputs");
const { getInputs } = require("../getInputs/getInputs");
jest.mock("../getInputs/getInputs");

describe("check inputs [input_path, output_path]", () => {
  let input_path_, output_path_;
  const dummy_js_file = path.join(__dirname, "__mocks__", "dummy.js");

  beforeEach(async () => {
    const { input_path, output_path } = await getInputs();
    input_path_ = input_path;
    output_path_ = output_path;

    if (fs.existsSync(output_path_)) {
      fs.unlinkSync(output_path_);
    }
  });

  it("should check the input path, and the output path", async () => {
    expect.assertions(1);
    return expect(checkInputs(input_path_, output_path_)).resolves.toEqual(
      undefined
    );
  });

  it("should check invalid input path", async () => {
    expect.assertions(1);
    await expect(checkInputs("input_path_", output_path_)).rejects.toEqual(
      `input_path_ does not exist.`
    );
  });

  it("should check a valid input path but not a JSON file", async () => {
    expect.assertions(1);
    await expect(checkInputs(dummy_js_file, output_path_)).rejects.toEqual(
      `${dummy_js_file} is not a JSON file.`
    );
  });

  it("should check if the output path already exists", async () => {
    expect.assertions(1);
    await expect(checkInputs(input_path_, input_path_)).rejects.toEqual(
      `${input_path_} is already existing.`
    );
  });
});
