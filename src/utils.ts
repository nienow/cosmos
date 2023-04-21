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
