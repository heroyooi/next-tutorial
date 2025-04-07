import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>안녕하세요, 학생 여러분!</h1>
      <p>Next.js로 만든 나의 첫 웹페이지 🎉</p>

      <Link href="/about">소개 페이지로 이동하기</Link>
      <Link href="/contact">연락 페이지로 이동하기</Link>
    </main>
  )
}