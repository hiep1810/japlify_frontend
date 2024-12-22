interface ConversionResultProps {
  result: string;
}

export function ConversionResult({ result }: ConversionResultProps) {
  if (!result) return null;

  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-medium mb-2">Result:</h3>
      <p className="text-xl break-words">{result}</p>
    </div>
  );
}