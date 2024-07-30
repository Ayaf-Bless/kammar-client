"use client";
import React, { memo, useMemo } from "react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";

import countries from "@/utils/constants";

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
  name: string;
}

const CountrySelect = memo(function CountrySelect({ name }: Prop) {
  const memoCountries = useMemo(() => {
    return countries;
  }, []);

  return (
    <Select
      isRequired
      label="Country"
      labelPlacement="inside"
      name={name}
      placeholder="Select your country"
      radius="none"
      variant="bordered"
    >
      {memoCountries.map((country) => (
        <SelectItem
          key={country.id}
          startContent={
            <Avatar alt={country.name} className="w-6 h-6" src={country.flag} />
          }
          value={country.name}
        >
          {country.name}
        </SelectItem>
      ))}
    </Select>
  );
});

export default React.memo(CountrySelect);
