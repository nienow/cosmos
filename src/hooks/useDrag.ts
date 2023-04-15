import {create} from 'zustand';

interface DragInterface {
  dragging: boolean;
  dragIndex?: number;
}

export const useDrag = create<DragInterface>(() => ({
  dragging: false
}));
