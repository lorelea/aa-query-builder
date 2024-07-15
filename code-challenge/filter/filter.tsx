import { Panel } from "../../src/components";
import { SelectControl } from "../../src/inputs";
import styles from "./filter.module.css";

// example fetch request for data
// fetch('/api/data')

export const Filter = () => {
  return (
    <Panel title="Query Builder">
      <form className={styles.form}>
        <SelectControl
          label="Country"
          placeholder="Select..."
          value="Canada"
          options={["Canada"]}
          onChange={(event) => console.log(event)}
        />
        <SelectControl
          label="State/Province"
          placeholder="Select..."
          value="Ontario"
          options={["Ontario"]}
          onChange={(event) => console.log(event)}
        />
        <SelectControl
          label="City"
          placeholder="Select..."
          value="Toronto"
          options={["Toronto"]}
          onChange={(event) => console.log(event)}
        />
        <p className={styles.label}>People</p>
        <ul>
          <li>Annadiane Kelf</li>
          <li>Cordi Skain</li>
          <li>Hugh Cherm</li>
          <li>Murielle Mudge</li>
        </ul>
      </form>
    </Panel>
  );
};
