export const commentOptions = COMMENT_OPTIONS;

export const giscusOption = commentOptions;

export const enableGiscus = Boolean(
  giscusOption &&
  giscusOption.type === "giscus" &&
  giscusOption.repo &&
  giscusOption.repoId &&
  giscusOption.category &&
  giscusOption.categoryId
);

export const twikooOption = commentOptions;

export const enableTwikoo = Boolean(
  twikooOption && twikooOption.type === "twikoo" && twikooOption.envId
);

export const walineOption = commentOptions;

export const enableWaline = Boolean(
  walineOption && walineOption.type === "waline" && walineOption.serverURL
);

