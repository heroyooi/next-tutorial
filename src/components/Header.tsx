import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ backgroundColor: '#eee', padding: '20px' }}>
      <h1>내 사이트</h1>
      <nav>
        <Link href="/">홈</Link> | <Link href="/about">소개</Link>
      </nav>
    </header>
  )
}