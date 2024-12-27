import { ConversionType } from '@/types';

export const CONVERSION_TYPES: { [key: string]: { value: ConversionType; label: string; api_value: string } } = {
  FULL_TO_HALF: { value: 'FULL_TO_HALF', label: 'Full-width to Half-width', api_value: '/convert/fullsize-to-halfsize' },
  HALF_TO_FULL: { value: 'HALF_TO_FULL', label: 'Half-width to Full-width', api_value: '/convert/halfsize-to-fullsize' },
  ROMANJI_TO_HIRAGANA: { value: 'ROMANJI_TO_HIRAGANA', label: 'Romanji to Hiragana', api_value: '/convert/romanji-to-kana' },
  ROMANJI_TO_KATAKANA: { value: 'ROMANJI_TO_KATAKANA', label: 'Romanji to Katakana', api_value: '/convert/romanji-to-kata' },
  KANA_TO_ROMANJI: { value: 'KANA_TO_ROMANJI', label: 'Kana to Romanji', api_value: '/convert/kana-to-romanji' },
  KATAKANA_TO_ROMANJI: { value: 'KATAKANA_TO_ROMANJI', label: 'Katakana to Romanji', api_value: '/convert/kata-to-romanji' }
}

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';