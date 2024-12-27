export type ConversionType = 
  | 'FULL_TO_HALF'
  | 'HALF_TO_FULL'
  | 'ROMANJI_TO_HIRAGANA'
  | 'ROMANJI_TO_KATAKANA'
  | 'KANA_TO_ROMANJI'
  | 'KATAKANA_TO_ROMANJI';

export interface ConversionRequest {
  text: string;
  type: ConversionType;
}

export interface ConversionResponse {
  result: string;
  error?: string;
}