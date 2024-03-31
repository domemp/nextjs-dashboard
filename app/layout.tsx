import '@/app/ui/global.css';
import { nunito } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Stark - Stark</title>
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}
