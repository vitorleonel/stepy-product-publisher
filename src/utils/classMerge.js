const classMerge = (classNames) => {
  if (Array.isArray(classNames)) {
    return classNames.join(' ').trim();
  }

  return classNames.trim();
};

export default classMerge;
