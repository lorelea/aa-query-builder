import styles from "./form-control.module.css";

export type FormControlProps = {
  label: string;
  children: React.ReactNode;
};

export const FormControl = ({ label, children }: FormControlProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <div className={styles.input}>{children}</div>
    </div>
  );
};
