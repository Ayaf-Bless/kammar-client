import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

interface Props {
  onStepChange: (stepIndex: number) => void;
}

function SetVerificaTionCode({ onStepChange }: Props) {
  const username = "agatha";
  const email = "agatha@gmail.com";

  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-default-900 lg:text-3xl capitalize">
          Let&apos;s verify it&apos;s you 😃, {username}
        </h1>
        <p className="text-small text-default-400 lg:text-medium">
          We have sent a code to <b className="text-primary">{email}</b>
        </p>
      </div>

      <form>
        <Input
          isRequired
          label="Code"
          placeholder="Enter the code here"
          radius="none"
          required={true}
          type="text"
          variant="bordered"
          //   {...register("email")}
          //   errorMessage={errors.email?.message}
          //   isInvalid={errors.email ? true : false}
        />
        <p className="text-small text-default-500 lg:text-medium my-2">
          Didn&apos;t get the code?{" "}
          <b className="text-primary hover:underline">click here to resend</b>
        </p>
        <Button className="w-full" color="primary" radius="none" type="submit">
          Continue
        </Button>
      </form>
    </div>
  );
}

export default SetVerificaTionCode;
