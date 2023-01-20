import CodersArray from "./CodersArray";

describe("Given the class CodersArray,", () => {
  describe("When it receives the arguments 'Alexander', 'Gastón', '10' and '10',", () => {
    test("It should return {{0: 'Alexander', 1: 'Gastón', 2: '10', 3: '10', length: 4}}", () => {
      const firstArgument = "Alexander";
      const secondArgument = "Gastón";
      const thirdArgument = 10;
      const fourthArgument = 10;

      const expectedObject = {
        0: "Alexander",
        1: "Gastón",
        2: 10,
        3: 10,
        length: 4,
      };

      const resultedObject = new CodersArray(
        firstArgument,
        secondArgument,
        thirdArgument,
        fourthArgument
      );

      expect(resultedObject).toEqual(expectedObject);
    });
  });
});
