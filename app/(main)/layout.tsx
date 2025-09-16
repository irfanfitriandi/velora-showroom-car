import React from 'react';

import Navbar from '@/components/layout/navbar';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <Navbar />
      {children}
    </main>
  );
}
