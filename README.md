[![npm version](https://badge.fury.io/js/%40niweera%2Fnode-complexer.svg)](https://badge.fury.io/js/%40niweera%2Fnode-complexer)
[![NPM Downloads](https://img.shields.io/npm/dt/@niweera/node-complexer)](https://www.npmjs.com/package/@niweera/node-complexer)
![GitHub](https://img.shields.io/github/license/Niweera/node-complexer)
[![codecov](https://codecov.io/gh/Niweera/node-complexer/branch/main/graph/badge.svg?token=1NQCW1J9UK)](https://codecov.io/gh/Niweera/node-complexer)
[![Build Status](https://travis-ci.com/Niweera/node-complexer.svg?branch=main)](https://travis-ci.com/Niweera/node-complexer)
[![Known Vulnerabilities](https://snyk.io/test/github/Niweera/node-complexer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Niweera/node-complexer?targetFile=package.json)
[![Dependency Status](https://david-dm.org/Niweera/node-complexer.svg)](https://david-dm.org/Niweera/node-complexer)
[![devDependencies Status](https://david-dm.org/Niweera/node-complexer/dev-status.svg)](https://david-dm.org/Niweera/node-complexer?type=dev)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Niweera/node-complexer.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Niweera/node-complexer/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Niweera/node-complexer.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Niweera/node-complexer/context:javascript)

# [Node-Complexer](https://www.npmjs.com/package/@niweera/node-complexer)

Node-Complexer is a CLI tool to generate the complexity metrics when provided the [AST](https://www.digitalocean.com/community/tutorials/js-traversing-ast) JSON file of a JavaScript file, and it will save it in a *.json file.

Node-Complexer uses [Typhonjs-Escomplex](https://github.com/typhonjs-node-escomplex/typhonjs-escomplex) under the hood to generate the complexity metrics.

## Usage

```bash
$ npm install -g @niweera/node-complexer
$ node-complexer -i /path/to/javascript/ast/file.json -o /output/path/of/file.json
```

## Example 

The following is the input JavaScript AST file `sample.json`.

```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 2,
      "column": 0
    }
  },
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 26
        }
      },
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 25,
          "loc": {
            "start": {
              "line": 1,
              "column": 6
            },
            "end": {
              "line": 1,
              "column": 25
            }
          },
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 13,
            "loc": {
              "start": {
                "line": 1,
                "column": 6
              },
              "end": {
                "line": 1,
                "column": 13
              }
            },
            "name": "example"
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 25,
            "loc": {
              "start": {
                "line": 1,
                "column": 16
              },
              "end": {
                "line": 1,
                "column": 25
              }
            },
            "value": "example",
            "raw": "\"example\""
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```

This `sample.json` file is based on the following `sample.js` file. 

```javascript
const example = "example";

```

The following is the output JSON file `output.json`.

```json
{
  "aggregate": {
    "cyclomatic": 1,
    "cyclomaticDensity": 100,
    "halstead": {
      "bugs": 0.003,
      "difficulty": 1,
      "effort": 8,
      "length": 4,
      "time": 0.444,
      "vocabulary": 4,
      "volume": 8,
      "operands": {
        "distinct": 2,
        "total": 2,
        "identifiers": ["example", "\"example\""]
      },
      "operators": {
        "distinct": 2,
        "total": 2,
        "identifiers": ["const", "="]
      }
    },
    "paramCount": 0,
    "sloc": {
      "logical": 1,
      "physical": 2
    }
  },
  "settings": {
    "commonjs": false,
    "esmImportExport": {
      "halstead": false,
      "lloc": false
    },
    "forin": false,
    "logicalor": true,
    "switchcase": true,
    "templateExpression": {
      "halstead": true,
      "lloc": true
    },
    "trycatch": false,
    "newmi": false
  },
  "classes": [],
  "dependencies": [],
  "errors": [],
  "lineEnd": 2,
  "lineStart": 1,
  "maintainability": 163.888,
  "methods": [],
  "aggregateAverage": {
    "cyclomatic": 1,
    "cyclomaticDensity": 100,
    "halstead": {
      "bugs": 0.003,
      "difficulty": 1,
      "effort": 8,
      "length": 4,
      "time": 0.444,
      "vocabulary": 4,
      "volume": 8,
      "operands": {
        "distinct": 2,
        "total": 2
      },
      "operators": {
        "distinct": 2,
        "total": 2
      }
    },
    "paramCount": 0,
    "sloc": {
      "logical": 1,
      "physical": 2
    }
  },
  "methodAverage": {
    "cyclomatic": 0,
    "cyclomaticDensity": 0,
    "halstead": {
      "bugs": 0,
      "difficulty": 0,
      "effort": 0,
      "length": 0,
      "time": 0,
      "vocabulary": 0,
      "volume": 0,
      "operands": {
        "distinct": 0,
        "total": 0
      },
      "operators": {
        "distinct": 0,
        "total": 0
      }
    },
    "paramCount": 0,
    "sloc": {
      "logical": 0,
      "physical": 0
    }
  }
}
```