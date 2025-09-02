import { Noto_Sans_KR } from "next/font/google";
import Link from "next/link";
import '@/styles/globals.scss';
import styles from "@/styles/layout.module.scss";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <header className={styles.header}>
          <nav>
            <Link href="/">홈</Link>
            <Link href="/about">소개</Link>
            <Link href="/posts">Posts</Link>
          </nav>
        </header>
        <main className={styles.container}>{children}</main>
        <footer className={styles.footer}>© 2025 My Next.js App</footer>
      </body>
    </html>
  );
}

