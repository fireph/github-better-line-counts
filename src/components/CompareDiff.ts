export const CompareDiff = createDiffComponent({
  getAdditionsElement: () =>
    querySelectorFirst(
      // 2023
      [".toc-diff-stats>strong", 0],
    ),
  getDeletionsElement: () =>
    querySelectorFirst(
      // 2023
      [".toc-diff-stats>strong", 1],
    ),
  addSpinnerToPage(spinner) {
    const deletions = this.getDeletionsElement();
    const anchor = deletions ?? this.getAdditionsElement();
    const container = anchor?.parentElement;
    container?.appendChild(spinner);
  },
  getAdditionsText: (count) => i18n.t("diffs.additionsText", count),
  getDeletionsText: (count) => i18n.t("diffs.deletionsText", count),
  getGeneratedText: (count) => i18n.t("diffs.generatedText", [count]),
});
