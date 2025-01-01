'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CONVERSION_TYPES } from '@/lib/constants';
import { CodeBlock } from '@/components/ui/code-block';

export default function DocsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const curlExample = `curl -X GET "${baseUrl}/convert/fullsize-to-halfsize?text=テスト"`;
  
  const jsExample = `const response = await fetch(
  '${baseUrl}/convert/fullsize-to-halfsize?text=テスト'
);
const data = await response.json();
console.log(data);`;

  const pythonExample = `import requests

response = requests.get(
    '${baseUrl}/convert/fullsize-to-halfsize',
    params={'text': 'テスト'}
)
data = response.json()
print(data)`;

  const responseExample = {
    converted_text: "Example converted text",
    original_text: "Example input text"
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">API Documentation</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <section className="prose max-w-none dark:prose-invert">
            <h2>Overview</h2>
            <p>
              The Japlify API provides text conversion services for Japanese text formats. 
              It supports converting between full-width and half-width characters, 
              romanized text (romaji) to hiragana/katakana, and vice versa.
            </p>

            <h3>Base URL</h3>
            <CodeBlock code={baseUrl || ''} language="bash" />

            <h3>Authentication</h3>
            <p>
              Currently, the API is open and does not require authentication.
            </p>
          </section>
        </TabsContent>

        <TabsContent value="endpoints" className="space-y-8">
          {Object.values(CONVERSION_TYPES).map((type) => (
            <section key={type.value} className="prose max-w-none dark:prose-invert">
              <h3>{type.label}</h3>
              <CodeBlock code={`GET ${type.api_value}`} language="bash" />
              
              <h4>Query Parameters</h4>
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>text</td>
                    <td>string</td>
                    <td>Yes</td>
                    <td>The text to convert</td>
                  </tr>
                </tbody>
              </table>

              <h4>Response</h4>
              <CodeBlock 
                code={JSON.stringify(responseExample, null, 2)} 
                language="json" 
              />
            </section>
          ))}
        </TabsContent>

        <TabsContent value="examples" className="space-y-4">
          <section className="prose max-w-none dark:prose-invert">
            <h2>Example Usage</h2>
            
            <h3>Using cURL</h3>
            <CodeBlock code={curlExample} language="bash" />

            <h3>Using JavaScript Fetch</h3>
            <CodeBlock code={jsExample} language="javascript" />

            <h3>Using Python Requests</h3>
            <CodeBlock code={pythonExample} language="python" />
          </section>
        </TabsContent>
      </Tabs>
    </main>
  );
} 