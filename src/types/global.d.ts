// src/types/global.d.ts

export {};

declare global {
  interface Window {
    fbq: (
      action: string,
      eventName: string,
      params?: Record<string, string | number | boolean>
    ) => void;
  }
}