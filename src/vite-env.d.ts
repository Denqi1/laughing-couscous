/// <reference types="vite/client" />

/**
 * Vite-injected environment variables available at build time.
 */
interface ImportMetaEnv {
  /**
   * Base URL for the QuizAPI (e.g. https://quizapi.io/api/v1).
   */
  VITE_API_BASE_URL: string;
  /**
   * API key for authenticating with QuizAPI.
   */
  VITE_API_KEY: string;
}

/**
 * Vite's augmented import.meta object.
 */
interface ImportMeta {
  /**
   * Read-only access to ImportMetaEnv.
   */
  readonly env: ImportMetaEnv;
}
