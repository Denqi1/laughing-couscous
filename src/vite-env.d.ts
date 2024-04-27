/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_KEY: string;
  VITE_API_BASE_URL: string;

  VITE_API_ENDPOINT_GET_CATEGORIES: string;
  VITE_API_ENDPOINT_GET_TAGS: string;
  VITE_API_ENDPOINT_QUESTIONS: string;

  VITE_API_DIFFICULTY_EASY: string;
  VITE_API_DIFFICULTY_MEDIUM: string;
  VITE_API_DIFFICULTY_HARD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
