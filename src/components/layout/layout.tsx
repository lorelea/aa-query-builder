import styles from "./layout.module.css";

export type LayoutProps = { children: React.ReactNode };

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
