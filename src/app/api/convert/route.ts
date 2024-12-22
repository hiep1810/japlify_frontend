import { NextResponse } from 'next/server';
import type { ConversionRequest, ConversionResponse } from '@/types';

export async function POST(request: Request) {
  try {
    const body: ConversionRequest = await request.json();
    
    // Trong môi trường development, trả về mock data
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.json<ConversionResponse>({
        result: `Converted: ${body.text} (${body.type})`
      });
    }

    // Trong production, gọi API thật
    const response = await fetch(`${process.env.API_URL}/convert`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Conversion failed');
    }

    return NextResponse.json<ConversionResponse>(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}