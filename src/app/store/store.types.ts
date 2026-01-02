import { StateCreator } from 'zustand';
import { AnswersSlice } from './answers';
import { GameSlice } from './game';

export interface AppStore {
  game: GameSlice;
  answers: AnswersSlice;
}

export type ImmerStateCreator<T> = StateCreator<
  AppStore,
  [['zustand/immer', never]],
  [],
  T
>;
