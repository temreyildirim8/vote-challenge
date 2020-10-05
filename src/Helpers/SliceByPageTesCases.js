import TestLinks from "../Resources/TestLinks";

export const SliceByPageTestCases = [
  ["Get full page", TestLinks, 3, 5],
  ["Get first partial page", TestLinks.slice(0, 4), 1, 4],
  ["Get last partial page", TestLinks, 4, 3],
  ["Get invalid page", TestLinks, 35, 0]
];
