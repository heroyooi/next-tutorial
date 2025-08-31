import styles from '@/styles/home.module.scss';

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Hello Next.js 🚀</h1>
      <p className={styles.description}>
        이것이 나의 첫 번째 Next.js + SCSS 페이지입니다.
      </p>
    </main>
  );
}
