const yargs = require("yargs");

const getInputs = () => {
  return new Promise((resolve, reject) => {
    try {
      /**
       *@property in
       *@property out
       */
      const { in: input_path, out: output_path } = yargs
        .usage("Usage: node-complexer -i <input-file> -o <output-file>")
        .option("i", {
          alias: "in",
          describe: "Source AST (JSON) file to find the complexity",
          type: "string",
          demandOption: true,
        })
        .option("o", {
          alias: "out",
          describe: "Output file path for complexity metrics",
          type: "string",
          demandOption: true,
        }).argv;

      if (!input_path || !output_path) {
        reject("input path or output path is missing");
      }

      resolve({
        input_path,
        output_path,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getInputs,
};
