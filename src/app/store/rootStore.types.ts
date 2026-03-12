import type { StateCreator } from 'zustand';

import type { AnswersSlice } from './answers';
import type { CategorySlice } from './category';
import type { GameSlice } from './game';

/**
 * Root Zustand store combining game, answers, and category slices.
 */
export interface AppStore {
  /**
   * Slice for quiz questions, loading state, and correct answers.
   */
  game: GameSlice;
  /**
   * Slice for user selections, current question index, and answer actions.
   */
  answers: AnswersSlice;
  /**
   * Slice for categories list and fetch state.
   */
  category: CategorySlice;
}

/**
 * Zustand state creator with Immer middleware for immutable updates.
 */
export type ImmerStateCreator<T> = StateCreator<
  AppStore,
  [['zustand/immer', never]],
  [],
  T
>;
