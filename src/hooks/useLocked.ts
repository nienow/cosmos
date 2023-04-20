import {create} from 'zustand';

interface LockedInterface {
  locked: boolean;
}

export const useLocked = create<LockedInterface>(() => ({
  locked: false,
}));
