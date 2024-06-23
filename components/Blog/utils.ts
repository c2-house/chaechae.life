export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-\uAC00-\uD7AF]/g, ''); 
};
