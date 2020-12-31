const fs = require("fs");
const path = require("path");
jest.mock("../getInputs/getInputs");
const { saveComplexer } = require("./saveComplexer");
const { getInputs } = require("../getInputs/getInputs");
const { runComplexer } = require("../runComplexer/runComplexer");

describe("save Complexer for given JSON file", () => {
  let input_path_, output_path_, reference_json;

  beforeEach(async () => {
    const { input_path, output_path } = await getInputs();
    input_path_ = input_path;
    output_path_ = output_path;
    let reference_raw = fs
      .readFileSync(path.join(__dirname, "__mocks__/reference.json"))
      .toString();
    reference_json = JSON.parse(reference_raw);
    if (fs.existsSync(output_path_)) {
      fs.unlinkSync(output_path_);
    }
  });

  afterEach(() => {
    if (fs.existsSync(output_path_)) {
      fs.unlinkSync(output_path_);
    }
  });

  it("should save the Complexity JSON object as a JSON file", async () => {
    const json_object = await runComplexer(input_path_);
    await saveComplexer(output_path_, json_object);
    expect(fs.existsSync(output_path_)).toBe(true);
    const test_raw = fs.readFileSync(output_path_).toString();
    const test_json = JSON.parse(test_raw);
    expect(reference_json).toStrictEqual(test_json);
  });
});
