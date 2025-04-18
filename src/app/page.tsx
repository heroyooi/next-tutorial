import Link from 'next/link';
import MyButton from '@/components/MyButton';
import Counter from '@/components/Counter';
import ProfileCard from '@/components/ProfileCard';

export default function Home() {
  return (
    <main>
      <h1>안녕하세요, 학생 여러분!</h1>
      <p>Next.js로 만든 나의 첫 웹페이지 🎉</p>

      <Link href='/about'>소개 페이지로 이동하기</Link>
      <br />
      <Link href='/contact'>연락 페이지로 이동하기</Link>
      <br />
      <Link href='/landing'>랜딩 페이지로 이동하기</Link>

      <h2>버튼 테스트</h2>
      <MyButton label='확인' />
      <MyButton label='취소' />

      <h2>useState 테스트</h2>
      <Counter />

      <h2>팀 소개</h2>
      <ProfileCard name='홍길동' job='퍼블리셔' />
      <ProfileCard name='김개발' job='프론트엔드 개발자' />
    </main>
  );
}
