import { LoadFromLocalStorage, SaveToLocalStorage } from "./LocalStorage";
import TestLinks from "../Resources/TestLinks";

describe("Local Storage Test", () => {
  it("Local Storage Test", () => {
    SaveToLocalStorage(TestLinks);
    const loaded = LoadFromLocalStorage();
    expect(JSON.stringify(TestLinks)).toBe(JSON.stringify(loaded));
  });
});
