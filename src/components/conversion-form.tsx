'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { API_BASE_URL, CONVERSION_TYPES } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';

interface ConversionFormProps {
  onConvert: (result: { [key: string]: { converted_text: string , original_text: string } }) => void;
}

export function ConversionForm({ onConvert }: ConversionFormProps) {
  const [text, setText] = useState('');
  const [type, setType] = useState<string[]>(Object.keys(CONVERSION_TYPES));
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newText = e.target.value;
    setText(newText);
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
      }, {} as { [key: string]: any });

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

      <Input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text to convert..."
        required
      />
    </form>
  );
}