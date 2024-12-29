'use client';

import { useEffect, useState } from 'react';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { API_BASE_URL, CONVERSION_TYPES } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';
import { useDebounce } from '@/hooks/use-debounce';
import { Loader2 } from "lucide-react";

interface ConversionResult {
  [key: string]: { converted_text: string , original_text: string }
}

interface ConversionFormProps {
  onConvert: (result: ConversionResult) => void;
}

export function ConversionForm({ onConvert }: ConversionFormProps) {
  const [text, setText] = useState<string>('');
  const [type, setType] = useState<string[]>(Object.keys(CONVERSION_TYPES));
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const debouncedValue = useDebounce<string>(text, 750); // 750ms delay

  useEffect(() => {
    if (debouncedValue) {
      handleConversion(debouncedValue);
    }
  }, [debouncedValue]);

  async function handleConversion(newText: string) {
    if (!newText) return;
    setIsLoading(true);

    const api_values = type.map(type => CONVERSION_TYPES[type].api_value);
    const endpoints = api_values.map(api_value => `${API_BASE_URL}${api_value}?text=${encodeURIComponent(newText)}`);

    try {
        const responses = await Promise.all(endpoints.map(endpoint => fetch(endpoint, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })));

      const datas = await Promise.all(responses.map(response => response.json()));

      if (!responses.every(response => response.ok)) {
        throw new Error(datas.map(data => data.error).join(', ') || 'Conversion failed');
      }

      const result = type.reduce((acc, currentType, index) => {
        acc[currentType] = datas[index];
        return acc;
      }, {} as ConversionResult);

      onConvert(result);
      
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Something went wrong',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newText = e.target.value;
    setText(newText);
  }

  return (
    <form onSubmit={() => {}} className="space-y-4">
      <div className="space-y-2">
        {Object.keys(CONVERSION_TYPES).map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={option}
              checked={type.includes(option)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setType((prev) => [...prev, option]);
                } else {
                  setType((prev) => prev.filter((t) => t !== option));
                }
              }}
            />
            <label
              htmlFor={option}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {CONVERSION_TYPES[option].label}
            </label>
          </div>
        ))}
      </div>

      <div className="relative">
        <Input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text to convert..."
          required
          disabled={isLoading}
          className={`transition-opacity ${
            isLoading ? 'opacity-50 cursor-not-allowed animate-pulse' : ''
          }`}
        />
        {isLoading && (
          <Loader2 className="absolute right-3 top-2 animate-spin text-muted-foreground" />
        )}
      </div>
    </form>
  );
}