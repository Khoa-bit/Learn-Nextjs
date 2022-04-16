import { sayHi } from "../../lib/testScript";

describe("testScript()", () => {
  it("should say hi to input name", () => {
    const catFace = sayHi("Khoa");
    expect(catFace).toMatch(":3");
  });
});
