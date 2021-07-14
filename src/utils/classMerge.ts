const classMerge = (classNames: string | string[]): string => {
  if (Array.isArray(classNames)) {
    return classNames.join(' ').trim();
  }

  return classNames.trim();
};

export default classMerge;
