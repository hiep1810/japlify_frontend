export type ConversionType = 
  | 'FULL_TO_HALF'
  | 'HALF_TO_FULL'
  | 'ROMAJI_TO_HIRAGANA'
  | 'ROMAJI_TO_KATAKANA'
  | 'KANA_TO_ROMAJI'
  | 'KATAKANA_TO_ROMAJI';

export interface ConversionRequest {
  text: string;
  type: ConversionType;
}

export interface ConversionResponse {
  result: string;
  error?: string;
}