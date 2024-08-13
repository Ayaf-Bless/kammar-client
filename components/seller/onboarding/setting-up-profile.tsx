import { ChangeEventHandler, useState } from "react";
import { Textarea } from "@nextui-org/input";

import Wrapper from "@/components/general/wrapper";
import { useCharacterCount } from "@/libs/hooks/useCharacterCount";
import { AppInputWithPrefix } from "@/components/apps/AppInputs";

interface Language {
  language: string;
  proficiency: string;
}

const languagesList = [
  "English",
  "Spanish",
  "French",
  "Chinese",
  "German",
  "Japanese",
  "Russian",
  "Portuguese",
  "Arabic",
  "Hindi",
  "Swahili",
];

const proficiencyLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Fluent",
  "Native",
];

function SetupProfileSeller() {
  const { remainingChars, handleInputChange, isMax } = useCharacterCount(200);

  const [languages, setLanguages] = useState<Language[]>([
    { language: "", proficiency: "" },
  ]);

  const addLanguage = () => {
    setLanguages([...languages, { language: "", proficiency: "" }]);
  };

  const handleLanguageChange = (index: number, key: string, value: string) => {
    const newLanguages = [...languages];

    newLanguages[index][key as keyof Language] = value;
    setLanguages(newLanguages);
  };

  const removeLanguage = (index: number) => {
    const newLanguages = languages.filter((_, i) => i !== index);

    setLanguages(newLanguages);
  };

  return (
    <Wrapper>
      <form>
        <div className="space-y-12">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly and fields with{" "}
              <span className="text-danger-500">*</span> are mandatory.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="profession"
                >
                  Profession <span className="text-danger-500">*</span>
                </label>
                <div className="mt-2">
                  <AppInputWithPrefix
                    placeholder="content creator"
                    prefix="I am a/an"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="bio"
                >
                  Bio <span className="text-danger-500">*</span>
                </label>
                <div className="mt-2">
                  <Textarea
                    id="bio"
                    maxLength={100}
                    name="bio"
                    radius="sm"
                    rows={3}
                    variant="bordered"
                    onChange={
                      handleInputChange as unknown as ChangeEventHandler<HTMLInputElement>
                    }
                  />
                  <div className="flex items-center justify-between">
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Write a few sentences about yourself.
                    </p>
                    <p
                      className={`mt-1 text-sm leading-6 text-right ${isMax ? "text-green-600" : "text-gray-600"}`}
                    >
                      {remainingChars}/200
                    </p>
                  </div>
                </div>
              </div>

              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="sm:col-span-6 grid grid-cols-2 gap-x-4"
                >
                  <div>
                    <label
                      className="block text-sm font-medium leading-6 text-gray-900"
                      htmlFor={`language-${index}`}
                    >
                      Language <span className="text-danger-500">*</span>
                    </label>
                    <div className="mt-2">
                      <select
                        className="block w-full rounded-md border-0 px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"
                        id={`language-${index}`}
                        name={`language-${index}`}
                        value={lang.language}
                        onChange={(e) =>
                          handleLanguageChange(
                            index,
                            "language",
                            e.target.value,
                          )
                        }
                      >
                        <option value="">Select Language</option>
                        {languagesList.map((language) => (
                          <option key={language} value={language}>
                            {language}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium leading-6 text-gray-900"
                      htmlFor={`proficiency-${index}`}
                    >
                      Proficiency
                    </label>
                    <div className="mt-2">
                      <select
                        className="block w-full rounded-md border-0 px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"
                        id={`proficiency-${index}`}
                        name={`proficiency-${index}`}
                        value={lang.proficiency}
                        onChange={(e) =>
                          handleLanguageChange(
                            index,
                            "proficiency",
                            e.target.value,
                          )
                        }
                      >
                        <option value="">Select Proficiency</option>
                        {proficiencyLevels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>
                    {index > 0 && (
                      <div className="flex items-center justify-center">
                        <button
                          className="text-red-500 hover:text-red-700"
                          type="button"
                          onClick={() => removeLanguage(index)}
                        >
                          ✖️
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div className="sm:col-span-6">
                <button
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  type="button"
                  onClick={addLanguage}
                >
                  Add Language
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

export default SetupProfileSeller;
