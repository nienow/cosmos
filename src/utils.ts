export const getFrameIndex = (el: Element) => {
  if (el) {
    if (el.hasAttribute('data-frame-index')) {
      return el.getAttribute('data-frame-index');
    } else {
      return getFrameIndex(el.parentElement);
    }
  }
};

export const swapArrayIndexes = (arr: any[], oldIndex: number, newIndex: number) => {
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
};

export const isValidJsonString = (str: unknown): boolean => {
  if (typeof str !== 'string') {
    return false;
  }
  try {
    const result = JSON.parse(str);
    const type = Object.prototype.toString.call(result);
    return type === '[object Object]' || type === '[object Array]';
  } catch (e) {
    return false;
  }
};
