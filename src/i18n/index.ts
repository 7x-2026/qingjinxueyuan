import { en } from './en';
import { zh } from './zh';
import type { Language, LocalizedText } from '../data/types';

export const messages = { zh, en } as const;

export function getMessages(language: Language) {
  return messages[language];
}

export function localize(text: LocalizedText, language: Language): string {
  return language === 'en' ? (text.en ?? text.zh) : text.zh;
}

export function usesChineseFallback(
  text: LocalizedText,
  language: Language,
): boolean {
  return language === 'en' && text.en === undefined;
}

export { en, zh };
