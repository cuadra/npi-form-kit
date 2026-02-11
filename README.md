# Pimkit (Provider Identifier Mapper Kit)

A reusable React component that performs an NPI (National Provider Identifier) lookup and automatically maps the returned provider data to your application's states, enabling seamless autofill of related form fields such as name, address, phone number, and organization details.

The component validates and resolves an NPI, retrieves provider information, and updates supplied state setters so forms can populate instantly without manual data entry. Designed to be lightweight and flexible, it allows developers to connect only the fields they need, making it easy to integrate into existing form workflows or larger data-entry systems.

## Screenshot

![npi](https://github.com/user-attachments/assets/61468e7c-88eb-4823-97da-ba162e81aaa2)

## Usage

### Quick Start

```tsx
import React, { useState } from "react";
import { Pimkit } from "pimkit";

export const QuickStart = () => {
  const [org, setOrg] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Pimkit api="/npi/" setOrg={setOrg} setPhone={setPhone}>
      <input type="text" placeholder="Enter NPI Number" name="npi" />
    </Pimkit>
  );
};
```

### Install

```bash
npm install pimkit
```

### Basic Setup

1. Create an API endpoint that returns NPI provider data.
2. Wrap a text input with `Pimkit` and pass the endpoint URL in `api`.
3. Provide any state setters you want `Pimkit` to populate.

### Example

This is based on `example/components/form.tsx` and shows a typical form integration:

```tsx
import React, { useState } from "react";
import { Pimkit } from "pimkit";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [countryName, setCountryName] = useState("");
  const [phone, setPhone] = useState("");
  const [npiNumber, setNPINumber] = useState("");
  const [org, setOrg] = useState("");

  return (
    <Pimkit
      api="/npi/"
      region="US"
      setFName={setFirstName}
      setLName={setLastName}
      setAddress={setAddress}
      setCity={setCity}
      setState={setState}
      setZip={setZip}
      setCountry={setCountry}
      setCountryName={setCountryName}
      setPhone={setPhone}
      setNPI={setNPINumber}
      setOrg={setOrg}
    >
      <input type="text" placeholder="Enter NPI Number" name="npi" />
    </Pimkit>
  );
};
```

### API Response Shape

The component reads `basic` and the first entry in `addresses` from the response:

```json
{
  "basic": {
    "organization_name": "101 DIABETIC SUPPLIES, LLC",
    "authorized_official_first_name": "DALE",
    "authorized_official_last_name": "GREYSLAK"
  },
  "addresses": [
    {
      "address_1": "1400 WHITE DR STE B",
      "city": "TITUSVILLE",
      "state": "FL",
      "postal_code": "327809657",
      "country_code": "US",
      "country_name": "United States",
      "telephone_number": "321-676-8989"
    }
  ]
}
```

### Notes

- The child element must be a single `<input>` element; `Pimkit` clones it to manage `value`, `onChange`, and `disabled` state.
- Only pass the setters you want populated. Any omitted setters are ignored.
- The NPI is validated with a Luhn check before the `api` request is made.

### Todo
- Ability to choose between mailing and location addresses.
- Include other country identifiers. (Currently only US)

## Example App

The Next.js example lives in `example/` and includes a mock NPI API route at `example/app/npi/route.ts`.

1. Install dependencies at the repo root: `npm install`
2. Start the example app: `cd example && npm run dev`
