'use client';

import Link from 'next/link';
import { Github } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Japlify</span>
          </Link>

          {/* Navigation Menu */}
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/" 
                ? "font-bold text-foreground" 
                : "text-foreground/60"
              )}
            >
              Dashboard
            </Link>
            <Link
              href="/docs"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/docs" 
                  ? "font-bold text-foreground"
                  : "text-foreground/60"
              )}
            >
              API Docs
            </Link>
            <Link
              href="https://github.com/hiep1810/japlify_frontend"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground/80"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 