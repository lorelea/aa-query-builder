import styles from "./panel.module.css";

export type PanelProps = { title: string; children: React.ReactNode };

export const Panel = ({ title, children }: PanelProps): JSX.Element => {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
