import styles from "./code.module.css";

export type CodeProps = { children: string };

export const Code = ({ children }: CodeProps) => {
  return (
    <code>
      <pre className={styles.pre}>{children}</pre>
    </code>
  );
};
