import { ChangeEventHandler, useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/react";

import Wrapper from "@/components/general/wrapper";
import { useCharacterCount } from "@/libs/hooks/useCharacterCount";
import { AppInputWithPrefix } from "@/components/apps/AppInputs";
import Badge from "@/components/general/badge";

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

  // const [becomeseller, { isLoading }] = useBecomeSellerMutation();

  const [languages, setLanguages] = useState<Language[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    language: "",
    proficiency: "",
  });
  const [currentSkill, setCurrentSkill] = useState<string>("");

  const handleAddLanguage = () => {
    if (currentLanguage.language && currentLanguage.proficiency) {
      setLanguages([...languages, currentLanguage]);
      setCurrentLanguage({ language: "", proficiency: "" });
    }
  };

  const handleLanguageChange = (key: keyof Language, value: string) => {
    setCurrentLanguage((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddSkill = () => {
    if (currentSkill) {
      setSkills([...skills, currentSkill]);
      setCurrentSkill("");
    }
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
              This information will be displayed publicly. Fields with{" "}
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

              {/* Language Input */}
              <div className="flex flex-col justify-between gap-2 w-[50vw] ">
                <div>
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor="language"
                  >
                    Language <span className="text-danger-500">*</span>
                  </label>
                  <div className="mt-2">
                    <Select
                      // className="block w-full rounded-md border-0 px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                      id="language"
                      label="Select Language"
                      name="language"
                      selectedKeys={currentLanguage.language}
                      value={currentLanguage.language}
                      variant="bordered"
                      onChange={(e) =>
                        handleLanguageChange("language", e.target.value)
                      }
                    >
                      {languagesList.map((language) => (
                        <SelectItem key={language} value={language}>
                          {language}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor="proficiency"
                  >
                    Proficiency
                  </label>
                  <div className="mt-2">
                    <Select
                      // className="block w-full rounded-md border-0 px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                      id="proficiency"
                      label="Select Proficiency"
                      name="proficiency"
                      selectedKeys={currentLanguage.proficiency}
                      value={currentLanguage.proficiency}
                      variant="bordered"
                      onChange={(e) =>
                        handleLanguageChange("proficiency", e.target.value)
                      }
                    >
                      {proficiencyLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
                <div>
                  <Button
                    // className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    color="secondary"
                    type="button"
                    variant="ghost"
                    onClick={handleAddLanguage}
                  >
                    Add Language
                  </Button>
                </div>
              </div>

              {/* Display Added Languages as Badges */}
              <div className="sm:col-span-6 flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <Badge key={index} type="indigo">
                    {lang.language} - {lang.proficiency}
                  </Badge>
                ))}
              </div>

              {/* Skill Input */}
              <div className="sm:col-span-6">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="skill"
                >
                  Skills
                </label>
                <div className="mt-2 flex flex-col gap-2">
                  <Input
                    // className="mr-2"
                    id="skill"
                    name="skill"
                    placeholder="Enter a skill"
                    value={currentSkill}
                    variant="bordered"
                    onChange={(e) => setCurrentSkill(e.target.value)}
                  />
                  <div>
                    <Button
                      // className="ml-4 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                      color="secondary"
                      variant="ghost"
                      onClick={handleAddSkill}
                    >
                      Add Skill
                    </Button>
                  </div>
                </div>
              </div>

              {/* Display Added Skills as Badges */}
              <div className="sm:col-span-6 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} type="indigo">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

export default SetupProfileSeller;
