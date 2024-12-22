'use client';

import { useState } from 'react';
import { ConversionForm } from '@/components/conversion-form';
import { ConversionResult } from '@/components/conversion-result';

export default function Home() {
  const [result, setResult] = useState('');

  return (
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Japanese Text Converter
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p>
          Welcome to the Japanese Text Converter! This tool helps you convert text between
          different Japanese writing formats, including full-width/half-width characters,
          romaji, hiragana, and katakana.
        </p>
      </div>

      <ConversionForm onConvert={setResult} />
      <ConversionResult result={result} />
    </main>
  );
}
