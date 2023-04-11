import {create} from 'zustand';

interface LayoutModeInterface {
  layoutMode: boolean;
}

export const useLayoutMode = create<LayoutModeInterface>(() => ({
  layoutMode: false
}));
