import { CONVERSION_TYPES } from "@/lib/constants";
import { Copy } from 'lucide-react';

interface ConversionResultProps {
  result: { [key: string]: { converted_text: string , original_text: string } };
}

export function ConversionResult({ result }: ConversionResultProps) {
  const keys = Object.keys(result);
  if (!result) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      {keys.includes(CONVERSION_TYPES.FULL_TO_HALF.value) && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Full-width to Half-width:</h3>
          <div className="flex items-center gap-2">
            <p className="text-xl break-words flex-1">{result[CONVERSION_TYPES.FULL_TO_HALF.value].converted_text}</p>
            <button
              onClick={() => handleCopy(result[CONVERSION_TYPES.FULL_TO_HALF.value].converted_text)}
              className="p-2 hover:bg-gray-200 rounded-full"
              title="Copy to clipboard"
            >
              <Copy size={20} />
            </button>
          </div>
        </div>    
      )}
      {keys.includes(CONVERSION_TYPES.HALF_TO_FULL.value) && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Half-width to Full-width:</h3>
          <div className="flex items-center gap-2">
            <p className="text-xl break-words flex-1">{result[CONVERSION_TYPES.HALF_TO_FULL.value].converted_text}</p>
            <button
              onClick={() => handleCopy(result[CONVERSION_TYPES.HALF_TO_FULL.value].converted_text)}
              className="p-2 hover:bg-gray-200 rounded-full"
              title="Copy to clipboard"
            >
              <Copy size={20} />
            </button>
          </div>
        </div>    
      )}
      {keys.includes(CONVERSION_TYPES.ROMANJI_TO_HIRAGANA.value) && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Romanji to Hiragana:</h3>
          <div className="flex items-center gap-2">
            <p className="text-xl break-words flex-1">{result[CONVERSION_TYPES.ROMANJI_TO_HIRAGANA.value].converted_text}</p>
            <button
              onClick={() => handleCopy(result[CONVERSION_TYPES.ROMANJI_TO_HIRAGANA.value].converted_text)}
              className="p-2 hover:bg-gray-200 rounded-full"
              title="Copy to clipboard"
            >
              <Copy size={20} />
            </button>
          </div>
        </div>    
      )}
      {keys.includes(CONVERSION_TYPES.ROMANJI_TO_KATAKANA.value) && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Romanji to Katakana:</h3>
          <div className="flex items-center gap-2">
            <p className="text-xl break-words flex-1">{result[CONVERSION_TYPES.ROMANJI_TO_KATAKANA.value].converted_text}</p>
            <button
              onClick={() => handleCopy(result[CONVERSION_TYPES.ROMANJI_TO_KATAKANA.value].converted_text)}
              className="p-2 hover:bg-gray-200 rounded-full"
              title="Copy to clipboard"
            >
              <Copy size={20} />
            </button>
          </div>
        </div>    
      )}
      {keys.includes(CONVERSION_TYPES.KANA_TO_ROMANJI.value) && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Kana to Romanji:</h3>
          <div className="flex items-center gap-2">
            <p className="text-xl break-words flex-1">{result[CONVERSION_TYPES.KANA_TO_ROMANJI.value].converted_text}</p>
            <button
              onClick={() => handleCopy(result[CONVERSION_TYPES.KANA_TO_ROMANJI.value].converted_text)}
              className="p-2 hover:bg-gray-200 rounded-full"
              title="Copy to clipboard"
            >
              <Copy size={20} />
            </button>
          </div>
        </div>    
      )}
      {keys.includes(CONVERSION_TYPES.KATAKANA_TO_ROMANJI.value) && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Katakana to Romanji:</h3>
          <div className="flex items-center gap-2">
            <p className="text-xl break-words flex-1">{result[CONVERSION_TYPES.KATAKANA_TO_ROMANJI.value].converted_text}</p>
            <button
              onClick={() => handleCopy(result[CONVERSION_TYPES.KATAKANA_TO_ROMANJI.value].converted_text)}
              className="p-2 hover:bg-gray-200 rounded-full"
              title="Copy to clipboard"
            >
              <Copy size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}