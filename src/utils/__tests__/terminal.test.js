const terminal_utils = require("../terminal");

describe("terminal utils", () => {
  it("should return the file path from a path string", () => {
    const initial = "./dist/src/styles/index.js";
    const final = ["dist", "src", "styles"];

    expect(terminal_utils.get_file_path(initial)).toEqual(final);
  });

  it("it should return the file path from a path string that begins with a dot", () => {
    const initial = "/dist/src/styles/index.js";
    const final = ["dist", "src", "styles"];

    expect(terminal_utils.get_file_path(initial)).toEqual(final);
  });

  it("it should return the file path from a path string that begins with a name", () => {
    const initial = "dist/src/styles/index.js";
    const final = ["dist", "src", "styles"];

    expect(terminal_utils.get_file_path(initial)).toEqual(final);
  });

  it("should return the file name from a path string", () => {
    const initial = "./dist/src/styles/index.js";
    const final = "index.js";

    expect(terminal_utils.get_file_name(initial)).toEqual(final);
  });
});
