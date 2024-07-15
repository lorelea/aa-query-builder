# Overview

The objective is to show a list of people that live in the selected Country, State/Province and City.

![screenshot](/screen-shot.jpg)

There is a mock endpoint (`/api/data`) that will return an array of schemas that will be used to build the query.

Here is an example response from the `/api/data` endpoint

```typescript
[
  { country: "Canada", state: "British Columbia", city: "Vancouver", person: "Patsy Johnson III" },
  { country: "Canada", state: "British Columbia", city: "Vancouver", person: "Alexis Lang" },
  { country: "Canada", state: "British Columbia", city: "Victoria", person: "Della Stark" },
  { country: "Canada", state: "British Columbia", city: "Victoria", person: "Ricky Schuster" },
  { country: "Canada", state: "British Columbia", city: "Victoria", person: "Hattie Bailey" },
  { country: "Canada", state: "Quebec", city: "Montreal", person: "Jonathon Mohr" },
  { country: "Canada", state: "Quebec", city: "Montreal", person: "Jim Wunsch" },
  { country: "Canada", state: "Quebec", city: "Quebec City", person: "Kayla Koelpin" },
  { country: "Canada", state: "Quebec", city: "Laval", person: "Lynda Lockman IV" },
  { country: "Canada", state: "Quebec", city: "Laval", person: "Shelia Donnelly" },
  { country: "Australia", state: "Victoria", city: "Melbourne", person: "Kurt Connelly" },
  { country: "Australia", state: "Victoria", city: "Melbourne", person: "Mrs. Rufus Champlin" },
  { country: "Australia", state: "Victoria", city: "Melbourne", person: "Gilbert Corkery" },
  { country: "Australia", state: "New South Wales", city: "Sydney", person: "Jonathon Nitzsche" },
  { country: "Australia", state: "New South Wales", city: "Sydney", person: "Aaron Kassulke" },
  { country: "Australia", state: "New South Wales", city: "Newcastle", person: "Jaime Durgan" },
  { country: "Australia", state: "New South Wales", city: "Central Coast", person: "Alonzo Sauer" },
];
```

Here is the type of the response from the `/api/schema` endpoint

```typescript
type Data = {
  country: string;
  state: string;
  city: string;
  person: string;
};
```

_Note_: The GUI is already built. You will only need to write the logic.

# Instructions

The user will be able to select a _country_, then a _state_, then a _city_, the application will display a list of people who live there.

When a user selects a _country_ they should only be able to select the _states_ for that _country_, when a user selects a _country_ and a _state_ then they should only be able to select the _cities_ for that _country_ and _state_, and so on.

![screenshot](/screen-shot.jpg)

**NOTE**: The UI has already been built. You just need to manipulate the data and wire up the inputs. The code you will be working with is located in the `code-challenge` directory

# Step 1: Fold the Data

Right now the data is stored as flat objects inside an array. You need to manipulate the data so that the you can access the list of people for any valid combination of _country_, _state_ and _city_ in  `O(1)` time. You must create a data structure that allows you to access the list of people in `O(1)` time when provided with a _country_, _state_ and _city_.

## Step 2: Wire Up the Inputs

Update the GUI to allow the user to select the country, state and city, then list the people who live there

![screenshot](/screen-shot.jpg)
