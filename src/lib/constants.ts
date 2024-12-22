import { ConversionType } from '@/types';

export const CONVERSION_TYPES: { value: ConversionType; label: string }[] = [
  { value: 'FULL_TO_HALF', label: 'Full-width to Half-width' },
  { value: 'HALF_TO_FULL', label: 'Half-width to Full-width' },
  { value: 'ROMAJI_TO_HIRAGANA', label: 'Romaji to Hiragana' },
  { value: 'ROMAJI_TO_KATAKANA', label: 'Romaji to Katakana' },
  { value: 'KANA_TO_ROMAJI', label: 'Kana to Romaji' },
  { value: 'KATAKANA_TO_ROMAJI', label: 'Katakana to Romaji' }
];

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';