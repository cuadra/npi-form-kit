"use client";
import React, { useState } from "react";
import { NPI } from "./npi";
export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [npiNumber, setNPINumber] = useState("");
  const [org, setOrg] = useState("");
  const map = {
    setFName: setFirstName,
    setLName: setLastName,
    setAddress: setAddress,
    setState: setState,
    setZip: setZip,
    setPhone: setPhone,
    setNPI: setNPINumber,
    setOrg: setOrg,
  };
  const firstNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const lastNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const addressChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const stateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const zipChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZip(e.target.value);
  };
  const orgChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrg(e.target.value);
  };
  return (
    <form>
      <fieldset>
        <input
          type="text"
          onChange={orgChangeHandler}
          value={org}
          placeholder="First Name"
        />
        <input
          type="text"
          onChange={firstNameChangeHandler}
          value={firstName}
          placeholder="First Name"
        />
        <input
          type="text"
          onChange={lastNameChangeHandler}
          value={lastName}
          placeholder="Last Name"
        />
        <input
          type="text"
          onChange={addressChangeHandler}
          value={address}
          placeholder="Street Address"
        />

        <input
          type="text"
          onChange={stateChangeHandler}
          value={state}
          placeholder="State"
        />
        <input
          type="text"
          onChange={zipChangeHandler}
          value={zip}
          placeholder="Zip Code"
        />
      </fieldset>
      1003101296
      <NPI {...map}>Test</NPI>
    </form>
  );
};
