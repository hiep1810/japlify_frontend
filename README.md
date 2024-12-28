# Text Conversion App

A modern web application built with [Next.js](https://nextjs.org) that provides real-time text conversion with multiple transformation options.

## Features

- ⚡ Real-time text conversion
- 🔄 Multiple conversion types supported
- 🎨 Clean and responsive UI with loading states
- 🚀 Optimized API requests with debouncing
- 💻 User-friendly interface
- 🌐 API integration ready
- 🎯 Type-safe with TypeScript
- 📱 Mobile-first design

## Quick Start

First, clone the repository:

```bash
git clone https://github.com/yourusername/text-conversion-app.git
cd text-conversion-app
```

Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- 🔥 [Next.js](https://nextjs.org/) - React framework for production
- 💅 [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- 🎨 [shadcn/ui](https://ui.shadcn.com/) - Re-usable UI components
- 🎯 [TypeScript](https://www.typescriptlang.org/) - Static type checking
- 📦 [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- 🔄 Custom hooks for state management
- ⚡ API integration with debouncing

## Project Structure

```
src/
  ├── app/              # Next.js app router pages
  ├── components/       # React components
  │   ├── ui/          # Reusable UI components
  │   └── forms/       # Form-related components
  ├── hooks/           # Custom React hooks
  │   ├── use-debounce.ts
  │   └── use-toast.ts
  ├── lib/            # Utilities and constants
  │   ├── constants.ts
  │   └── utils.ts
  └── types/          # TypeScript type definitions
```

## Key Components

- `ConversionForm`: Main form component with real-time conversion
- `Input`: Enhanced input component with loading states
- `Toast`: Notification system for feedback
- Custom hooks for debouncing and notifications

## API Reference

The application uses the following API endpoints:

### Text Conversion

```http
GET /api/convert
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. Text to convert |
| `type` | `string` | **Required**. Conversion type |

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## Development

```bash
# Run development server
npm run dev

# Run tests
npm run test

# Run linting
npm run lint
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
