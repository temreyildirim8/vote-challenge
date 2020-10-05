import { SliceByPage } from "./SliceByPage";
import { SliceByPageTestCases } from "./SliceByPageTesCases";

describe("SliceByPage Tests", () => {
  it.each(SliceByPageTestCases)(
    "SliceByPage %# %s",
    (name, inputArray, page, expectedLength) => {
      expect(SliceByPage(inputArray, page).length).toBe(expectedLength);
    }
  );
});
