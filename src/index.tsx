import React, { ChangeEvent, useEffect, useState } from "react";
import { isValidNPI } from "./luhn";
interface NPIProps {
  type?: string;
  api: string;
  setFName?: React.Dispatch<React.SetStateAction<string>>;
  setLName?: React.Dispatch<React.SetStateAction<string>>;
  setPhone?: React.Dispatch<React.SetStateAction<string>>;
  setNPI?: React.Dispatch<React.SetStateAction<string>>;
  setAddress?: React.Dispatch<React.SetStateAction<string>>;
  setState?: React.Dispatch<React.SetStateAction<string>>;
  setCity?: React.Dispatch<React.SetStateAction<string>>;
  setCountry?: React.Dispatch<React.SetStateAction<string>>;
  setCountryName?: React.Dispatch<React.SetStateAction<string>>;
  setZip?: React.Dispatch<React.SetStateAction<string>>;
  setOrg?: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactElement<React.InputHTMLAttributes<HTMLInputElement>>;
  region?: string;
}
export const Pimkit = (props: NPIProps) => {
  const [npi, setNpi] = useState("");
  const {
    region,
    type,
    children,
    setFName,
    setLName,
    setAddress,
    setState,
    setZip,
    setCity,
    setCountry,
    setCountryName,
    setPhone,
    setOrg,
    api,
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

  const [npiCache, setNpiCache] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const valid = isValidNPI(npi);
    if (valid && npi !== npiCache) {
      setNpiCache(npi);
      setLoading(true);
      fetch(`${api}?number=${npi}`)
        .then((response) => response.json())
        .then((data) => {
          const results = data.results[0];
          const address = results.addresses[0];
          const basic = results.basic;
          fnWrapper(setOrg, basic.organization_name);
          fnWrapper(setFName, basic.authorized_official_first_name);
          fnWrapper(setLName, basic.authorized_official_last_name);
          fnWrapper(setPhone, address.telephone_number);
          fnWrapper(setAddress, address.address_1);
          fnWrapper(setCity, address.city);
          fnWrapper(setState, address.state);
          fnWrapper(setZip, address.postal_code);
          fnWrapper(setCountry, address.country_code);
          fnWrapper(setCountryName, address.country_name);
          setLoading(false);
          console.log("Fetched data:", data);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error fetching data:", error);
        });
    }
  }, [npi]);

  return (
    <>
      {!loading &&
        React.cloneElement(children, {
          onChange: changeHandler,
          value: npi,
        })}
      {loading &&
        React.cloneElement(children, {
          disabled: true,
          value: "Loading...",
        })}
    </>
  );
};
