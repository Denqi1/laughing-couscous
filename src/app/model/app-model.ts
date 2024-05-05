import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createGameSlice, GameSlice } from '../../pages/game';
import {
  AnswersSlice,
  createAnswersSlice,
} from '../../entities/answer/answer.model';

export type AppStore = {
  game: GameSlice;
  answers: AnswersSlice;
};

export type ImmerStateCreator<T> = StateCreator<
  AppStore,
  [['zustand/immer', never], never],
  [],
  T
>;

export const useAppStore = create<AppStore>()(
  immer(
    devtools((...args) => ({
      game: createGameSlice(...args),
      answers: createAnswersSlice(...args),
    }))
  )
);
