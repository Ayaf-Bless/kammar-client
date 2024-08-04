import { useState } from "react";
import Wrapper from "@/components/general/wrapper";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { PlusIcon } from "@heroicons/react/24/outline";

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
    newItems[index][key] = value;
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
                    htmlFor={`exp-company-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id={`exp-company-${index}`}
                    name={`exp-company-${index}`}
                    value={exp.company}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "company",
                        e.target.value,
                        experience,
                        setExperience,
                      )
                    }
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor={`exp-title-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id={`exp-title-${index}`}
                    name={`exp-title-${index}`}
                    value={exp.title}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "title",
                        e.target.value,
                        experience,
                        setExperience,
                      )
                    }
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor={`exp-startDate-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Start Date
                  </label>
                  <input
                    type="text"
                    id={`exp-startDate-${index}`}
                    name={`exp-startDate-${index}`}
                    value={exp.startDate}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "startDate",
                        e.target.value,
                        experience,
                        setExperience,
                      )
                    }
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor={`exp-endDate-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    End Date
                  </label>
                  <input
                    type="text"
                    id={`exp-endDate-${index}`}
                    name={`exp-endDate-${index}`}
                    value={exp.endDate}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "endDate",
                        e.target.value,
                        experience,
                        setExperience,
                      )
                    }
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor={`exp-description-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <textarea
                    id={`exp-description-${index}`}
                    name={`exp-description-${index}`}
                    value={exp.description}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "description",
                        e.target.value,
                        experience,
                        setExperience,
                      )
                    }
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                <div className="sm:col-span-6 flex items-center">
                  <input
                    type="checkbox"
                    id={`exp-currentlyWorkingHere-${index}`}
                    name={`exp-currentlyWorkingHere-${index}`}
                    checked={exp.currentlyWorkingHere}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "currentlyWorkingHere",
                        e.target.checked.toString(),
                        experience,
                        setExperience,
                      )
                    }
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor={`exp-currentlyWorkingHere-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Currently working here
                  </label>
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoveItem(index, experience, setExperience)
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    ✖️
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                handleAddItem(experience, setExperience, initialExperience)
              }
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
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
                    htmlFor={`edu-country-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id={`edu-country-${index}`}
                    name={`edu-country-${index}`}
                    value={edu.country}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "country",
                        e.target.value,
                        education,
                        setEducation,
                      )
                    }
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor={`edu-university-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    University
                  </label>
                  <input
                    type="text"
                    id={`edu-university-${index}`}
                    name={`edu-university-${index}`}
                    value={edu.university}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "university",
                        e.target.value,
                        education,
                        setEducation,
                      )
                    }
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor={`edu-title-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id={`edu-title-${index}`}
                    name={`edu-title-${index}`}
                    value={edu.title}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "title",
                        e.target.value,
                        education,
                        setEducation,
                      )
                    }
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor={`edu-major-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Major
                  </label>
                  <input
                    type="text"
                    id={`edu-major-${index}`}
                    name={`edu-major-${index}`}
                    value={edu.major}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "major",
                        e.target.value,
                        education,
                        setEducation,
                      )
                    }
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor={`edu-year-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Year
                  </label>
                  <input
                    type="text"
                    id={`edu-year-${index}`}
                    name={`edu-year-${index}`}
                    value={edu.year}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "year",
                        e.target.value,
                        education,
                        setEducation,
                      )
                    }
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoveItem(index, education, setEducation)
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    ✖️
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                handleAddItem(education, setEducation, initialEducation)
              }
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Add Education
            </button>
          </AccordionItem>
          <AccordionItem title="Certificates">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-4"
              >
                <div className="sm:col-span-3">
                  <label
                    htmlFor={`cert-name-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id={`cert-name-${index}`}
                    name={`cert-name-${index}`}
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
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor={`cert-from-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    From
                  </label>
                  <input
                    type="text"
                    id={`cert-from-${index}`}
                    name={`cert-from-${index}`}
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
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor={`cert-year-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Year
                  </label>
                  <input
                    type="text"
                    id={`cert-year-${index}`}
                    name={`cert-year-${index}`}
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
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoveItem(index, certificates, setCertificates)
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    ✖️
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                handleAddItem(certificates, setCertificates, initialCertificate)
              }
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
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
                    htmlFor={`port-title-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id={`port-title-${index}`}
                    name={`port-title-${index}`}
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
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor={`port-description-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id={`port-description-${index}`}
                    name={`port-description-${index}`}
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
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor={`port-url-${index}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    URL
                  </label>
                  <input
                    type="text"
                    id={`port-url-${index}`}
                    name={`port-url-${index}`}
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
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                  />
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoveItem(index, portfolio, setPortfolio)
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    ✖️
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                handleAddItem(portfolio, setPortfolio, initialPortfolio)
              }
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Add Portfolio
            </button>
          </AccordionItem>
        </Accordion>
      </form>
    </Wrapper>
  );
}

export default SkillsAndExpertise;
