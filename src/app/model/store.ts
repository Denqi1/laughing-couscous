import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createGameSlice, GameSlice } from './game';
import { AnswersSlice, createAnswersSlice } from './answers';

export type AppStore = {
  game: GameSlice;
  answers: AnswersSlice;
};

export type ImmerStateCreator<T> = StateCreator<
  AppStore,
  [['zustand/immer', never]],
  [],
  T
>;

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
