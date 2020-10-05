import { SortByProperty } from "./SortByProperty";
import { SortByPropertyTestCases } from "./SortByPropertyTestCases";

describe("SortByProperty Tests", () => {
  it.each(SortByPropertyTestCases)(
    "SortbyProperty %# %s",
    (name, params, inputArray, expectedArray) => {
      expect(JSON.stringify(SortByProperty(inputArray, params))).toBe(
        JSON.stringify(expectedArray)
      );
    }
  );
});
