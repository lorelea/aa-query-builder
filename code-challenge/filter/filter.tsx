import { useCallback, useEffect, useMemo, useState } from "react";
import { Panel } from "../../src/components";
import { SelectControl } from "../../src/inputs";
import styles from "./filter.module.css";

type Data = {
  country: string;
  state: string;
  city: string;
  person: string;
};

type UseDataProps = {
  country: string;
  state: string;
  city: string;
};

function foldData(data: Data[]) {
  return data.reduce(
    (obj: Record<string, any>, { country, state, city, person }: Data) => {
      const countryObj = obj[country] || {};
      const stateObj = countryObj[state] || {};
      const cityArr = stateObj[city] || [];
      return {
        ...obj,
        [country]: {
          ...countryObj,
          [state]: {
            ...stateObj,
            [city]: cityArr.length ? [...cityArr, person] : [person],
          },
        },
      };
    },
    {}
  );
}

// example fetch request for data
// fetch('/api/data')
const useData = ({ country, state, city }: UseDataProps) => {
  const [data, setData] = useState<Record<string, any>>({});

  const fetchData = useCallback(() => {
    fetch("/api/data")
      .then((data) => data.json())
      .then((jsonData) => {
        const res = foldData(jsonData);
        setData(res);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    const selectedCountry = country ? data[country] : null;
    const selectedState = state ? selectedCountry[state] : null;
    const selectedCity = city ? selectedState[city] : null;
    return selectedCity || [];
  }, [data, country, state, city]);

  return filteredData;
};

export const Filter = () => {
  const [country, setCountry] = useState(``);
  const [state, setState] = useState(``);
  const [city, setCity] = useState(``);
  const data: string[] = useData({ country, state, city });

  return (
    <Panel title="Query Builder">
      <form className={styles.form}>
        <SelectControl
          label="Country"
          placeholder="Select..."
          value={country}
          options={["Canada"]}
          onChange={(event) => setCountry(event.target.value)}
        />
        <SelectControl
          label="State/Province"
          placeholder="Select..."
          value={state}
          options={["Ontario"]}
          onChange={(event) => setState(event.target.value)}
        />
        <SelectControl
          label="City"
          placeholder="Select..."
          value={city}
          options={["Toronto"]}
          onChange={(event) => setCity(event.target.value)}
        />
        <p className={styles.label}>People</p>
        <ul>
          {data.map((person) => (
            <li key={person}>{person}</li>
          ))}
          {/* <li>Annadiane Kelf</li>
          <li>Cordi Skain</li>
          <li>Hugh Cherm</li>
          <li>Murielle Mudge</li> */}
        </ul>
      </form>
    </Panel>
  );
};
