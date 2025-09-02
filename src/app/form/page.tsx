"use client";

import { useState } from "react";
import card from "../../styles/card.module.scss";
import styles from "../../styles/form.module.scss";

export default function FormPage() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(name.trim());
  };

  return (
    <section className={card.card}>
      <h1 className={card.title}>폼 입력 예제</h1>
      <p className={card.desc}>이름을 입력하고 제출해 보세요.</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">이름</label>
        <input
          id="name"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-describedby="name-hint"
        />
        <span id="name-hint" className={styles.hint}>예: 홍길동</span>

        <button className={styles.submit} type="submit">제출</button>
      </form>

      {submitted && <p style={{ marginTop: "1rem" }}>안녕하세요, <strong>{submitted}</strong>님! 👋</p>}
    </section>
  );
}
