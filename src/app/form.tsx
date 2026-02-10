"use client";
import React, { useState } from "react";
import { NPI } from "./npi";
import { FieldsetStyle, LabelStyle, InputStyle } from "./styles.css";
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

  const firstNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const lastNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const addressChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const cityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
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
  const countryChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  const countryNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(e.target.value);
  };

  return (
    <form>
      <fieldset className={FieldsetStyle}>
        <legend>Patient</legend>
        <label className={LabelStyle} htmlFor="fName">
          First Name
          <input
            className={InputStyle}
            type="text"
            placeholder="First Name"
            name="fName"
          />
        </label>

        <label className={LabelStyle} htmlFor="lName">
          Last Name
          <input
            className={InputStyle}
            type="text"
            placeholder="Last Name"
            name="lName"
          />
        </label>
      </fieldset>
      <fieldset className={FieldsetStyle}>
        <legend>NPI</legend>
        <label className={LabelStyle} htmlFor="npi">
          <NPI
            type="MAILING"
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
            <input
              className={InputStyle}
              type="text"
              placeholder="Enter NPI Number"
              name="npi"
            />
          </NPI>
        </label>
      </fieldset>
      <fieldset className={FieldsetStyle}>
        <legend>Provider Information</legend>
        <label className={LabelStyle} htmlFor="org">
          Organization Name
          <input
            className={InputStyle}
            type="text"
            onChange={orgChangeHandler}
            value={org}
            placeholder="Organization Name"
          />
        </label>
        <label className={LabelStyle} htmlFor="firstName">
          First Name
          <input
            className={InputStyle}
            type="text"
            onChange={firstNameChangeHandler}
            value={firstName}
            placeholder="First Name"
          />
        </label>
        <label className={LabelStyle} htmlFor="lastName">
          Last Name
          <input
            className={InputStyle}
            type="text"
            onChange={lastNameChangeHandler}
            value={lastName}
            placeholder="Last Name"
          />
        </label>
        <label className={LabelStyle} htmlFor="address">
          Street Address
          <input
            className={InputStyle}
            type="text"
            onChange={addressChangeHandler}
            value={address}
            placeholder="Street Address"
          />
        </label>
        <label className={LabelStyle} htmlFor="city">
          City
          <input
            className={InputStyle}
            type="text"
            onChange={cityChangeHandler}
            value={city}
            placeholder="City"
          />
        </label>
        <label className={LabelStyle} htmlFor="state">
          State
          <input
            className={InputStyle}
            type="text"
            onChange={stateChangeHandler}
            value={state}
            placeholder="State"
          />
        </label>
        <label className={LabelStyle} htmlFor="zip">
          Zip Code
          <input
            className={InputStyle}
            type="text"
            onChange={zipChangeHandler}
            value={zip}
            placeholder="Zip Code"
          />
        </label>
        <label className={LabelStyle} htmlFor="country">
          Country
          <input
            className={InputStyle}
            type="text"
            onChange={countryChangeHandler}
            value={country}
            placeholder="Country"
          />
        </label>
        <label className={LabelStyle} htmlFor="countryName">
          Country Name
          <input
            className={InputStyle}
            type="text"
            onChange={countryNameChangeHandler}
            value={countryName}
            placeholder="Country Name"
          />
        </label>
      </fieldset>
      <fieldset className={FieldsetStyle}>
        <button>Submit</button>
      </fieldset>
      1003101296
    </form>
  );
};
