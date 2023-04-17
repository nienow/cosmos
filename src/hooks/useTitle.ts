import {create} from 'zustand';

interface TitleInterface {
  showTitle: boolean;
  // titles: string[];
  toggleTitle: () => void;
  // updateTitles: (i: number, title: string) => void;
}

export const useTitle = create<TitleInterface>(set => ({
  showTitle: false,
  // titles: [],
  toggleTitle: () => {
    set((state) => {
      return {showTitle: !state.showTitle};
    });
  },
  // updateTitles: (i: number, title: string) => {
  //   set((state) => {
  //     state.titles[i] = title;
  //     return {titles: [...state.titles]};
  //   });
  // }
}));
