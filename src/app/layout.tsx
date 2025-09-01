import { Noto_Sans_KR } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'My Next.js App',
  description: 'Next.js 기초 강좌 프로젝트',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/">홈</Link>
            <Link href="/about">소개</Link>
          </nav>
        </header>
        <main style={{ padding: '2rem' }}>{children}</main>
      </body>
    </html>
  );
}
