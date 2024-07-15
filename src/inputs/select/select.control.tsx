import { FormControl, FormControlProps } from "../form-control";
import { Select, SelectProps } from "./select.input";

export type SelectControlProps = SelectProps & Omit<FormControlProps, "children">;

export const SelectControl = ({ label, ...inputProps }: SelectControlProps) => {
  return (
    <FormControl label={label}>
      <Select {...inputProps} />
    </FormControl>
  );
};
