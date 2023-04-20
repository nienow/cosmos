import {create} from 'zustand';

interface OptionsInterface {
  showOptions: boolean;
  toggleOptions: () => void;
}

export const useOptions = create<OptionsInterface>((set) => ({
  showOptions: false,
  toggleOptions: () => {
    set((state) => {
      return {showOptions: !state.showOptions};
    });
  }
}));
