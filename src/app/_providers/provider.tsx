'use client';
import React from 'react';

import TrpcProvider from './trpc-provider';

export default function Provider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <TrpcProvider>{children}</TrpcProvider>;
}
