import { faker } from "@faker-js/faker";

const data = [
  { country: "USA", state: "California", city: "Los Angelas" },
  { country: "USA", state: "California", city: "San Francisco" },
  { country: "USA", state: "California", city: "San Jose" },
  { country: "USA", state: "New York", city: "New York City" },
  { country: "USA", state: "New York", city: "Buffalo" },
  { country: "USA", state: "New York", city: "Rochester" },
  { country: "USA", state: "New York", city: "Niagara Falls" },
  { country: "USA", state: "Texas", city: "Huston" },
  { country: "USA", state: "Texas", city: "San Antonio" },
  { country: "USA", state: "Texas", city: "Dallas" },
  { country: "USA", state: "Texas", city: "Austin" },
  { country: "Canada", state: "Ontario", city: "Toronto" },
  { country: "Canada", state: "Ontario", city: "Ottawa" },
  { country: "Canada", state: "Ontario", city: "Hamilton" },
  { country: "Canada", state: "Ontario", city: "North Bay" },
  { country: "Canada", state: "British Columbia", city: "Vancouver" },
  { country: "Canada", state: "British Columbia", city: "Victoria" },
  { country: "Canada", state: "Quebec", city: "Montreal" },
  { country: "Canada", state: "Quebec", city: "Quebec City" },
  { country: "Canada", state: "Quebec", city: "Laval" },
  { country: "Australia", state: "Victoria", city: "Melbourne" },
  { country: "Australia", state: "New South Wales", city: "Sydney" },
  { country: "Australia", state: "New South Wales", city: "Newcastle" },
  { country: "Australia", state: "New South Wales", city: "Central Coast" },
  { country: "Australia", state: "Queensland", city: "Brisbane" },
  { country: "Australia", state: "Queensland", city: "Gold Coast" },
];

const log = data.flatMap((x) => {
  const count = Math.floor(Math.random() * 4) + 4;
  const out = [];

  for (let i = 0; i < count; i++) {
    out.push({ ...x, person: faker.name.fullName() });
  }
  return out;
});

console.log(JSON.stringify(log, null, 2));
