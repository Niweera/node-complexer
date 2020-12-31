jest.mock("../getInputs/getInputs");
const { runComplexer } = require("./runComplexer");
const { getInputs } = require("../getInputs/getInputs");

describe("run Complexer for given JSON file", () => {
  let input_path_;

  beforeEach(async () => {
    const { input_path } = await getInputs();
    input_path_ = input_path;
  });

  it("should return the Complexity JSON object", async () => {
    expect.assertions(1);
    await expect(runComplexer(input_path_)).resolves.toBeInstanceOf(Object);
  });
});
