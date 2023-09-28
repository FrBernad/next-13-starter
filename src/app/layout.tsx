import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('flex min-h-screen flex-col')}>
        <main className="mb-12 mt-24 flex grow flex-col items-center justify-center space-y-4 md:px-4">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
