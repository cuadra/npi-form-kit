import React, { ChangeEvent, useEffect, useState } from "react";
import { isValidNPI } from "./utils/luhn";
interface NPIProps {
  setFName?: React.Dispatch<React.SetStateAction<string>>;
  setLName?: React.Dispatch<React.SetStateAction<string>>;
  setPhone?: React.Dispatch<React.SetStateAction<string>>;
  setNPI?: React.Dispatch<React.SetStateAction<string>>;
  setAddress?: React.Dispatch<React.SetStateAction<string>>;
  setState?: React.Dispatch<React.SetStateAction<string>>;
  setZip?: React.Dispatch<React.SetStateAction<string>>;
  setOrg?: React.Dispatch<React.SetStateAction<string>>;
}
export const NPI = (props: NPIProps) => {
  const [npi, setNpi] = useState("");
  const {
    setFName,
    setLName,
    setAddress,
    setState,
    setZip,
    setPhone,
    setOrg,
    setNPI,
  } = props;
  const cachedData: string[] = [];

  const fnWrapper = (
    fn: React.Dispatch<React.SetStateAction<string>> | undefined | null,
    data: string,
  ) => {
    if (fn !== undefined && fn !== null) {
      fn(data);
    }
  };
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNpi(e.target.value);
  };

  let npiCache: string = "";
  useEffect(() => {
    const valid = isValidNPI(npi);

    if (valid && npi !== npiCache) {
      npiCache = npi;
      fetch(`npi/`)
        .then((response) => response.json())
        .then((data) => {
          const address = data.addresses[0];
          const basic = data.basic;
          fnWrapper(setOrg, basic.organization_name);
          fnWrapper(setFName, basic.authorized_official_first_name);
          fnWrapper(setLName, basic.authorized_official_last_name);
          fnWrapper(setPhone, address.telephone_number);
          fnWrapper(setAddress, address.address_1);
          fnWrapper(setState, address.state);
          fnWrapper(setZip, address.postal_code);

          console.log("Fetched data:", data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }),
    [npi];

  return (
    <div>
      <h1>NPI Component {npi}</h1>
      <input onChange={changeHandler} value={npi} />
    </div>
  );
};
