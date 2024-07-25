"use client";
import { Input } from "@nextui-org/input";
import { CalendarDate } from "@internationalized/date";
import { Button, DateInput } from "@nextui-org/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CountrySelect from "@/components/countrySelect";
import { countries } from "@/utils/constants";
import { useAppSelector } from "@/store/store";
import { useToast } from "@/contexts/ToastContext";

interface Props {
  onStepChange: (stepIndex: number) => void;
}

const GetToknowFormSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phoneNumber: z.string().optional(),
  country: z.string().optional(),
  birthDate: z.date().optional(),
  // profilePicture: z.file,
});

type GetToknowFormSchema = z.infer<typeof GetToknowFormSchema>;

function GetToknowForm({ onStepChange }: Props) {
  const username = useAppSelector((state) => state.auth.username);

  const { addToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GetToknowFormSchema>({
    resolver: zodResolver(GetToknowFormSchema),
  });

  const onSubmit = async (data: GetToknowFormSchema) => {
    console.log(data);
    try {
    } catch (err: any) {
      addToast("error", "Something went wrong", err.data.message);
    }
  };

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
        <form
          className="flex w-full flex-col gap-3 max-w-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            isRequired
            label="Your first name"
            placeholder="Enter your first name"
            radius="none"
            required={true}
            type="text"
            variant="bordered"
            {...register("firstName")}
            //   errorMessage={errors.email?.message}
            //   isInvalid={errors.email ? true : false}
          />
          <Input
            label="Your last name"
            placeholder="Enter your last name"
            radius="none"
            type="text"
            variant="bordered"
            {...register("lastName")}
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
            {...register("phoneNumber")}
            //   errorMessage={errors.email?.message}
            //   isInvalid={errors.email ? true : false}
          />
          <CountrySelect countries={countries} {...register("country")} />
          <DateInput
            isRequired
            label="Birth date"
            placeholderValue={new CalendarDate(1995, 11, 6)}
            radius="none"
            variant="bordered"
            // {...register("birthDate")}
          />
          {/* <Input
            isRequired
            label="Choose your profile picture"
            placeholder="Choose your profile picture"
            radius="none"
            type="file"
            variant="bordered"
            //   {...register("email")}
            //   errorMessage={errors.email?.message}
            //   isInvalid={errors.email ? true : false}
          /> */}
          <Button color="primary" radius="none" type="submit">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}

export default GetToknowForm;
