import styles from "@/styles/home.module.scss";

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Hello Next.js 🚀</h1>
      <p className={styles.description}>
        SCSS와 글로벌 레이아웃을 적용한 Next.js 기본 페이지입니다.
      </p>
    </main>
  );
}