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

type City = string[];
type State = Record<string, City>;
type Country = Record<string, State>;
type FoldedData = Record<string, Country>;

type FilterProps = {
  country: string;
  state: string;
  city: string;
};

const INIT_FILTER = { country: "", state: "", city: "" };

function foldData(data: Data[]): FoldedData {
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
const useData = ({ country, state, city }: FilterProps) => {
  const [data, setData] = useState<FoldedData>({});

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
    if (!data || (!country && !state && !city)) {
      return [];
    }

    const selectedCountry = country ? data[country] : {};

    const selectedState = state
      ? selectedCountry[state]
      : Object.values(selectedCountry).reduce(
          (obj, stateObj) => ({ ...obj, ...stateObj }),
          {}
        );

    const selectedCity = city
      ? selectedState[city]
      : Object.values(selectedState).flat();

    return selectedCity || [];
  }, [data, country, state, city]);

  const countryOptions = Object.keys(data);
  const stateOptions = country ? Object.keys(data[country]) : [];
  const cityOptions = state ? Object.keys(data[country][state]) : [];

  return { data: filteredData, countryOptions, stateOptions, cityOptions };
};

export const Filter = () => {
  const [filter, setFilter] = useState(INIT_FILTER);
  const { data, countryOptions, stateOptions, cityOptions } = useData(filter);

  return (
    <Panel title="Query Builder">
      <form className={styles.form}>
        <SelectControl
          label="Country"
          placeholder="Select..."
          value={filter.country}
          options={countryOptions}
          onChange={(event) =>
            setFilter({ ...INIT_FILTER, country: event.target.value })
          }
        />
        <SelectControl
          label="State/Province"
          placeholder="Select..."
          value={filter.state}
          options={stateOptions}
          onChange={(event) =>
            setFilter({
              ...filter,
              state: event.target.value,
              city: INIT_FILTER.city,
            })
          }
        />
        <SelectControl
          label="City"
          placeholder="Select..."
          value={filter.city}
          options={cityOptions}
          onChange={(event) =>
            setFilter({ ...filter, city: event.target.value })
          }
        />
        <p className={styles.label}>People</p>
        <ul>
          {data.map((person) => (
            <li key={person}>{person}</li>
          ))}
        </ul>
      </form>
    </Panel>
  );
};
