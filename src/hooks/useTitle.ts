import {create} from 'zustand';

interface TitleInterface {
  title: boolean;
  titles: string[];
  toggleTitle: () => void;
  updateTitles: (i: number, title: string) => void;
}

export const useTitle = create<TitleInterface>(set => ({
  title: false,
  titles: [],
  toggleTitle: () => {
    set((state) => {
      return {title: !state.title};
    });
  },
  updateTitles: (i: number, title: string) => {
    set((state) => {
      state.titles[i] = title;
      return {titles: [...state.titles]};
    });
  }
}));
