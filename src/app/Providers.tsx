'use client';

import client from '@/services/github';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </ApolloProvider>
  );
}
