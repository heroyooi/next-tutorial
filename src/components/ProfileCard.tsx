import styles from './ProfileCard.module.css';

type Props = {
  name: string;
  job: string;
};

export default function ProfileCard({ name, job }: Props) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{job}</p>
    </div>
  );
}
