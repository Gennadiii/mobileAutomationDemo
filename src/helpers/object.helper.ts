const objectHelper: objectHelperInterface = {

  equal(objects: any[]) {
    if (!objectsAreTheSameLength(objects)) {
      return false;
    }
    const keys = Object.keys(objects[0]);
    for (const key of keys) {
      try {
        const values = objects.map(obj => obj[key]);
        if (new Set(values).size !== 1) {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return true;
  }

};


export {objectHelper};


function objectsAreTheSameLength(objects) {
  const lengths = objects.map(obj => Object.keys(obj).length);
  return new Set(lengths).size === 1;
}


interface objectHelperInterface {
  equal: (objects: any[]) => boolean;
}
