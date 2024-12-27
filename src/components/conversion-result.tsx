import { CONVERSION_TYPES } from "@/lib/constants";

interface ConversionResultProps {
  result: { [key: string]: { converted_text: string , original_text: string } };
}

export function ConversionResult({ result }: ConversionResultProps) {
  const keys = Object.keys(result);
  if (!result) return null;


  return (
    <div>
      {keys.includes(CONVERSION_TYPES.FULL_TO_HALF.value) && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Full-width to Half-width:</h3>
          <p className="text-xl break-words">{result[CONVERSION_TYPES.FULL_TO_HALF.value].converted_text}</p>
        </div>    
      )}
      {keys.includes(CONVERSION_TYPES.HALF_TO_FULL.value) && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Half-width to Full-width:</h3>
          <p className="text-xl break-words">{result[CONVERSION_TYPES.HALF_TO_FULL.value].converted_text}</p>
        </div>    
      )}
      {keys.includes(CONVERSION_TYPES.ROMANJI_TO_HIRAGANA.value) && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Romanji to Hiragana:</h3>
          <p className="text-xl break-words">{result[CONVERSION_TYPES.ROMANJI_TO_HIRAGANA.value].converted_text}</p>
        </div>    
      )}
      {keys.includes(CONVERSION_TYPES.ROMANJI_TO_KATAKANA.value) && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Romanji to Katakana:</h3>
          <p className="text-xl break-words">{result[CONVERSION_TYPES.ROMANJI_TO_KATAKANA.value].converted_text}</p>
        </div>    
      )}
      {keys.includes(CONVERSION_TYPES.KANA_TO_ROMANJI.value) && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Kana to Romanji:</h3>
          <p className="text-xl break-words">{result[CONVERSION_TYPES.KANA_TO_ROMANJI.value].converted_text}</p>
        </div>    
      )}
      {keys.includes(CONVERSION_TYPES.KATAKANA_TO_ROMANJI.value) && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Katakana to Romanji:</h3>
          <p className="text-xl break-words">{result[CONVERSION_TYPES.KATAKANA_TO_ROMANJI.value].converted_text}</p>
        </div>
      )}
    </div>
  );
}