import styles from "./select.module.css";
import * as classnames from "classnames";

// these are just the standard props from the select element
type SelectElementProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export type SelectProps = Omit<SelectElementProps, "children"> & {
  options?: string[];
};

export const Select = ({ options, value, placeholder, ...rest }: SelectProps): JSX.Element => {
  return (
    <select
      className={classnames({
        [styles.select]: true,
        [styles.placeholder]: !!value,
      })}
      value={value}
      defaultValue={undefined}
      {...rest}
    >
      <option className={styles.placeholderOption} defaultValue={undefined}>
        {placeholder}
      </option>
      {options?.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
};
