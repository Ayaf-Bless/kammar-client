"use client";
import { Input } from "@nextui-org/input";
import { CalendarDate } from "@internationalized/date";
import { Button, DateInput } from "@nextui-org/react";

import CountrySelect from "@/components/countrySelect";
import { countries } from "@/utils/constants";

function GetToknowForm() {
  const username = "Agatha";

  return (
    //max-w-xs firstName, lastName, profilePicture, country, dateOfBirth
    <div className="flex flex-col gap-9">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-default-900 lg:text-3xl capitalize">
          Hello 👋 {username}
        </h1>
        <p className="text-small text-default-400 lg:text-medium">
          We&apos;re happy to have you with us, let&apos;s get you onboarded
        </p>
      </div>
      <div>
        <form className="flex w-full flex-col gap-3 max-w-md">
          <Input
            isRequired
            label="Your first name"
            placeholder="Enter your first name"
            radius="none"
            required={true}
            type="text"
            variant="bordered"
            //   {...register("email")}
            //   errorMessage={errors.email?.message}
            //   isInvalid={errors.email ? true : false}
          />
          <Input
            label="Your last name"
            placeholder="Enter your last name"
            radius="none"
            type="text"
            variant="bordered"
            //   {...register("email")}
            //   errorMessage={errors.email?.message}
            //   isInvalid={errors.email ? true : false}
          />
          <Input
            isRequired
            label="Your phone number"
            placeholder="Enter your phone number"
            radius="none"
            type="tel"
            variant="bordered"
            //   {...register("email")}
            //   errorMessage={errors.email?.message}
            //   isInvalid={errors.email ? true : false}
          />
          <CountrySelect countries={countries} />
          <DateInput
            isRequired
            label="Birth date"
            placeholderValue={new CalendarDate(1995, 11, 6)}
            radius="none"
            variant="bordered"
          />
          <Input
            isRequired
            label="Choose your profile picture"
            placeholder="Choose your profile picture"
            radius="none"
            type="file"
            variant="bordered"
            //   {...register("email")}
            //   errorMessage={errors.email?.message}
            //   isInvalid={errors.email ? true : false}
          />
          <Button color="primary" radius="none" type="submit">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}

export default GetToknowForm;
