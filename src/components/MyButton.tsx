type MyButtonProps = {
  label: string;
};

export default function MyButton({ label }: MyButtonProps) {
  return <button>{label}</button>;
}
