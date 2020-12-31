#!/usr/bin/env node

const { getInputs } = require("./getInputs/getInputs");
const { checkInputs } = require("./checkInputs/checkInputs");
const { runComplexer } = require("./runComplexer/runComplexer");
const { saveComplexer } = require("./saveComplexer/saveComplexer");

(async () => {
  try {
    const { input_path, output_path } = await getInputs();
    await checkInputs(input_path, output_path);
    const complexity_object = await runComplexer(input_path);
    await saveComplexer(output_path, complexity_object);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
