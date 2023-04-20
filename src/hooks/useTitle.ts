import {create} from 'zustand';

interface TitleInterface {
  showTitle: boolean;
  toggleTitle: () => void;
}

export const useTitle = create<TitleInterface>(set => ({
  showTitle: false,
  toggleTitle: () => {
    set((state) => {
      return {showTitle: !state.showTitle};
    });
  }
}));
