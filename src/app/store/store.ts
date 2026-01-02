import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createGameSlice } from './game';
import { createAnswersSlice } from './answers';
import { AppStore } from './store.types';

export const useAppStore = create<AppStore>()(
  immer(
    devtools(
      (...args) => ({
        game: createGameSlice(...args),
        answers: createAnswersSlice(...args),
      }),
      { name: 'app-storage' }
    )
  )
);
