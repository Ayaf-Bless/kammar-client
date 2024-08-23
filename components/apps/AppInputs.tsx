interface IInputWithPrefixProp {
  prefix: string;
  placeholder: string;
}

export function AppInputWithPrefix({
  prefix,
  placeholder,
}: IInputWithPrefixProp) {
  return (
    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
        {prefix}{" "}
      </span>
      <input
        className="block flex-1 border-0 focus:outline-none focus:border-black bg-transparent focus:border-solid py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        id="profession"
        name="profession"
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}
