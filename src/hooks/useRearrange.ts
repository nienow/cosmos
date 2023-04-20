import {create} from 'zustand';

interface ArrangeInterface {
  rearranging: boolean;
  startIndex?: number;
}

export const useRearrange = create<ArrangeInterface>(() => ({
  rearranging: false
}));
