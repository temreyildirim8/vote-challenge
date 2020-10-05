export const SortByProperty = (links, sortOptions) => {
  return [...links].sort((a, b) =>
    a[sortOptions.sortProperty] < b[sortOptions.sortProperty]
      ? 1 * (sortOptions.reverseSort ? -1 : 1)
      : a[sortOptions.sortProperty] > b[sortOptions.sortProperty]
      ? -1 * (sortOptions.reverseSort ? -1 : 1)
      : a.lastVoteDate < b.lastVoteDate
      ? 1
      : -1
  );
};
