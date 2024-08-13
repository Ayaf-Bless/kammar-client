import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  Checkbox,
  DatePicker,
  Input,
  Textarea,
} from "@nextui-org/react";

import Wrapper from "@/components/general/wrapper";

interface IEducation {
  country: string;
  university: string;
  title: string;
  major: string;
  year: string;
}

interface IExperience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  currentlyWorkingHere: boolean;
}

interface ICertificate {
  name: string;
  from: string;
  year: string; // Using string for simplicity in form handling
}

interface IPortfolio {
  title: string;
  description: string;
  url: string;
}

const initialEducation: IEducation = {
  country: "",
  university: "",
  title: "",
  major: "",
  year: "",
};
const initialExperience: IExperience = {
  company: "",
  title: "",
  startDate: "",
  endDate: "",
  description: "",
  currentlyWorkingHere: false,
};
const initialCertificate: ICertificate = { name: "", from: "", year: "" };
const initialPortfolio: IPortfolio = { title: "", description: "", url: "" };

function SkillsAndExpertise() {
  const [education, setEducation] = useState<IEducation[]>([initialEducation]);
  const [experience, setExperience] = useState<IExperience[]>([
    initialExperience,
  ]);
  const [certificates, setCertificates] = useState<ICertificate[]>([
    initialCertificate,
  ]);
  const [portfolio, setPortfolio] = useState<IPortfolio[]>([initialPortfolio]);

  const handleAddItem = <T,>(
    items: T[],
    setItems: React.Dispatch<React.SetStateAction<T[]>>,
    initialItem: T,
  ) => {
    setItems([...items, initialItem]);
  };

  const handleRemoveItem = <T,>(
    index: number,
    items: T[],
    setItems: React.Dispatch<React.SetStateAction<T[]>>,
  ) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleChange = <T,>(
    index: number,
    key: keyof T,
    value: string,
    items: T[],
    setItems: React.Dispatch<React.SetStateAction<T[]>>,
  ) => {
    const newItems = [...items];

    newItems[index][key] = value as T[keyof T];

    setItems(newItems);
  };

  return (
    <Wrapper>
      <form>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Skills & Expertise
        </h2>
        <Accordion>
          <AccordionItem title="Experience">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-4"
              >
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`exp-company-${index}`}
                  >
                    Company
                  </label>
                  <Input
                    // className="mt-1 block w-full rounded-md border-0 py-1.5 px-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`exp-company-${index}`}
                    name={`exp-company-${index}`}
                    type="text"
                    value={exp.company}
                    variant="bordered"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "company",
                        e.target.value,
                        experience,
                        setExperience,
                      )
                    }
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`exp-title-${index}`}
                  >
                    Title
                  </label>
                  <Input
                    // className="mt-1 block w-full rounded-md border-0  py-1.5 px-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`exp-title-${index}`}
                    name={`exp-title-${index}`}
                    type="text"
                    value={exp.title}
                    variant="bordered"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "title",
                        e.target.value,
                        experience,
                        setExperience,
                      )
                    }
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`exp-startDate-${index}`}
                  >
                    Start Date
                  </label>
                  <Input
                    // className="mt-1 block w-full rounded-md border-0  py-1.5 px-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`exp-startDate-${index}`}
                    name={`exp-startDate-${index}`}
                    type="text"
                    value={exp.startDate}
                    variant="bordered"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "startDate",
                        e.target.value,
                        experience,
                        setExperience,
                      )
                    }
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`exp-endDate-${index}`}
                  >
                    End Date
                  </label>
                  <Input
                    // className="mt-1 block w-full rounded-md border-0  py-1.5 px-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`exp-endDate-${index}`}
                    name={`exp-endDate-${index}`}
                    type="text"
                    value={exp.endDate}
                    variant="bordered"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "endDate",
                        e.target.value,
                        experience,
                        setExperience,
                      )
                    }
                  />
                </div>
                <div className="sm:col-span-6">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`exp-description-${index}`}
                  >
                    Description
                  </label>
                  <Textarea
                    // className="mt-1 block w-full rounded-md border-0  py-1.5 px-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`exp-description-${index}`}
                    name={`exp-description-${index}`}
                    value={exp.description}
                    variant="bordered"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "description",
                        e.target.value,
                        experience,
                        setExperience,
                      )
                    }
                  />
                </div>
                <div className="sm:col-span-6 flex items-center">
                  <Checkbox
                    // checked={exp.currentlyWorkingHere}
                    // className="mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    id={`exp-currentlyWorkingHere-${index}`}
                    name={`exp-currentlyWorkingHere-${index}`}
                    type="checkbox"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "currentlyWorkingHere",
                        e.target.checked.toString(),
                        experience,
                        setExperience,
                      )
                    }
                  >
                    <label
                      className="block text-sm font-medium leading-6 text-gray-900"
                      htmlFor={`exp-currentlyWorkingHere-${index}`}
                    >
                      Currently working here
                    </label>
                  </Checkbox>
                </div>
                {index > 0 && (
                  <button
                    className="text-red-500 hover:text-red-700"
                    type="button"
                    onClick={() =>
                      handleRemoveItem(index, experience, setExperience)
                    }
                  >
                    ✖️
                  </button>
                )}
              </div>
            ))}
            <button
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              type="button"
              onClick={() =>
                handleAddItem(experience, setExperience, initialExperience)
              }
            >
              Add Experience
            </button>
          </AccordionItem>
          <AccordionItem title="Education">
            {education.map((edu, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-4"
              >
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`edu-country-${index}`}
                  >
                    Country
                  </label>
                  <Input
                    // className="mt-1 block w-full rounded-md border-0  py-1.5 px-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`edu-country-${index}`}
                    name={`edu-country-${index}`}
                    type="text"
                    value={edu.country}
                    variant="bordered"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "country",
                        e.target.value,
                        education,
                        setEducation,
                      )
                    }
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`edu-university-${index}`}
                  >
                    University
                  </label>
                  <Input
                    // className="mt-1 block w-full rounded-md border-0  py-1.5 px-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`edu-university-${index}`}
                    name={`edu-university-${index}`}
                    type="text"
                    value={edu.university}
                    variant="bordered"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "university",
                        e.target.value,
                        education,
                        setEducation,
                      )
                    }
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`edu-title-${index}`}
                  >
                    Title
                  </label>
                  <Input
                    // className="mt-1 block w-full rounded-md border-0  py-1.5 px-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`edu-title-${index}`}
                    name={`edu-title-${index}`}
                    type="text"
                    value={edu.title}
                    variant="bordered"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "title",
                        e.target.value,
                        education,
                        setEducation,
                      )
                    }
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`edu-major-${index}`}
                  >
                    Major
                  </label>
                  <Input
                    // className="mt-1 block w-full rounded-md border-0  py-1.5 px-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`edu-major-${index}`}
                    name={`edu-major-${index}`}
                    type="text"
                    value={edu.major}
                    variant="bordered"
                    onChange={(e) =>
                      handleChange(
                        index,
                        "major",
                        e.target.value,
                        education,
                        setEducation,
                      )
                    }
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`edu-year-${index}`}
                  >
                    Year
                  </label>
                  <DatePicker
                    // className="mt-1 block w-full rounded-md border-0 bg-none py-1.5 px-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    showMonthAndYearPickers
                    id={`edu-year-${index}`}
                    name={`edu-year-${index}`}
                    variant="bordered"
                    // type="text"
                    // value={edu.year}
                    // onChange={(e) =>
                    //   handleChange(
                    //     index,
                    //     "year",
                    //     e.target.value,
                    //     education,
                    //     setEducation,
                    //   )
                    // }
                  />
                </div>
                {index > 0 && (
                  <button
                    className="text-red-500 hover:text-red-700"
                    type="button"
                    onClick={() =>
                      handleRemoveItem(index, education, setEducation)
                    }
                  >
                    ✖️
                  </button>
                )}
              </div>
            ))}
            <button
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              type="button"
              onClick={() =>
                handleAddItem(education, setEducation, initialEducation)
              }
            >
              Add Education
            </button>
          </AccordionItem>
          {/* <AccordionItem title="Certificates">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-4"
              >
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`cert-name-${index}`}
                  >
                    Name
                  </label>
                  <Input
                    // className="mt-1 block w-full rounded-md border-0  py-1.5 px-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`cert-name-${index}`}
                    name={`cert-name-${index}`}
                    type="text"
                    value={cert.name}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "name",
                        e.target.value,
                        certificates,
                        setCertificates,
                      )
                    }
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`cert-from-${index}`}
                  >
                    From
                  </label>
                  <Input
                    // className="mt-1 block w-full rounded-md border-0  py-1.5 px-2 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`cert-from-${index}`}
                    name={`cert-from-${index}`}
                    type="text"
                    value={cert.from}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "from",
                        e.target.value,
                        certificates,
                        setCertificates,
                      )
                    }
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`cert-year-${index}`}
                  >
                    Year
                  </label>
                  <Input
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`cert-year-${index}`}
                    name={`cert-year-${index}`}
                    type="text"
                    value={cert.year}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "year",
                        e.target.value,
                        certificates,
                        setCertificates,
                      )
                    }
                  />
                </div>
                {index > 0 && (
                  <button
                    className="text-red-500 hover:text-red-700"
                    type="button"
                    onClick={() =>
                      handleRemoveItem(index, certificates, setCertificates)
                    }
                  >
                    ✖️
                  </button>
                )}
              </div>
            ))}
            <button
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              type="button"
              onClick={() =>
                handleAddItem(certificates, setCertificates, initialCertificate)
              }
            >
              Add Certificate
            </button>
          </AccordionItem>
          <AccordionItem title="Portfolio">
            {portfolio.map((port, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-4"
              >
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`port-title-${index}`}
                  >
                    Title
                  </label>
                  <Input
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`port-title-${index}`}
                    name={`port-title-${index}`}
                    type="text"
                    value={port.title}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "title",
                        e.target.value,
                        portfolio,
                        setPortfolio,
                      )
                    }
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`port-description-${index}`}
                  >
                    Description
                  </label>
                  <Input
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`port-description-${index}`}
                    name={`port-description-${index}`}
                    type="text"
                    value={port.description}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "description",
                        e.target.value,
                        portfolio,
                        setPortfolio,
                      )
                    }
                  />
                </div>
                <div className="sm:col-span-6">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor={`port-url-${index}`}
                  >
                    URL
                  </label>
                  <Input
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    id={`port-url-${index}`}
                    name={`port-url-${index}`}
                    type="text"
                    value={port.url}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "url",
                        e.target.value,
                        portfolio,
                        setPortfolio,
                      )
                    }
                  />
                </div>
                {index > 0 && (
                  <button
                    className="text-red-500 hover:text-red-700"
                    type="button"
                    onClick={() =>
                      handleRemoveItem(index, portfolio, setPortfolio)
                    }
                  >
                    ✖️
                  </button>
                )}
              </div>
            ))}
            <button
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              type="button"
              onClick={() =>
                handleAddItem(portfolio, setPortfolio, initialPortfolio)
              }
            >
              Add Portfolio
            </button>
          </AccordionItem> */}
        </Accordion>
      </form>
    </Wrapper>
  );
}

export default SkillsAndExpertise;
