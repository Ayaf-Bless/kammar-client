"use client";
import React, { useMemo } from "react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";

type Country = {
  id: number;
  name: string;
  currency: string;
  phone: number;
  capital: string | null;
  code: string;
  code3: string;
  number: number;
  flag: string;
};

interface Prop {
  countries: Country[];
  name: string;
}

const CountrySelect: React.FC<Prop> = ({ countries, name }) => {
  const countryOptions = useMemo(() => {
    return countries.map((country) => (
      <SelectItem
        key={country.id}
        startContent={
          <Avatar alt={country.name} className="w-6 h-6" src={country.flag} />
        }
        value={country.name}
      >
        {country.name}
      </SelectItem>
    ));
  }, [countries]);

  return (
    <Select
      label="Country"
      labelPlacement="inside"
      placeholder="Select your country"
      radius="none"
      variant="bordered"
      isRequired
      name={name}
    >
      {countryOptions}
    </Select>
  );
};

export default React.memo(CountrySelect);
