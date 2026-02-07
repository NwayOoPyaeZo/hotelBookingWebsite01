const IMAGE_ROOT = "/assets/images";

export const imagePath = (relativePath) => {
  const normalized = relativePath.replace(/^\/+/, "");
  return `${IMAGE_ROOT}/${normalized}`;
};
