const path = require("path");
const { getInputs } = require("./getInputs");
jest.mock("./getInputs");

describe("get inputs [input_path, output_path]", () => {
  it("should return the input path, and the output path", async () => {
    const { input_path, output_path } = await getInputs();
    expect(input_path).toBe(path.join(__dirname, "__mocks__/input.json"));
    expect(output_path).toBe(
      path.join(
        path.resolve(__dirname, ".."),
        "saveComplexer",
        "__mocks__",
        "output.json"
      )
    );
  });
});
