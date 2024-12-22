'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select } from './ui/select';
import { CONVERSION_TYPES } from '@/lib/constants';
import { ConversionType } from '@/types';
import { useToast } from '@/hooks/use-toast';

interface ConversionFormProps {
  onConvert: (result: string) => void;
}

export function ConversionForm({ onConvert }: ConversionFormProps) {
  const [text, setText] = useState('');
  const [type, setType] = useState<ConversionType>('FULL_TO_HALF');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, type }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Conversion failed');
      }

      onConvert(data.result);
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select
        value={type}
        onValueChange={(value) => setType(value as ConversionType)}
      >
        {CONVERSION_TYPES.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to convert..."
        required
      />

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Converting...' : 'Convert'}
      </Button>
    </form>
  );
}