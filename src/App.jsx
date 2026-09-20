import { useState, createContext } from "react";
import SideBar from "./main-components/SideBar";
import PersonalInfo from "./main-components/PersonalInfo";
import SelectPlan from "./main-components/SelectPlan";
import AddOn from "./main-components/AddOn";
import FinishingUp from "./main-components/FinishingUp";
import ThankU from "./main-components/ThankU";

export const FormContext = createContext();

export default function App() {
  const [isYearly, setIsYearly] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <AddOn />;
      case 4:
        return <FinishingUp />;
      case 5:
        return <ThankU />;
    }
  };

  return (
    <FormContext.Provider
      value={{ isYearly, setIsYearly, currentStep, setCurrentStep }}
    >
      <div
        id="main-container"
        className="w-full max-w-4xl h-142 bg-custom-white rounded-2xl shadow-2xl p-6 flex gap-8"
      >
        <SideBar />
        <div
          id="hero-container"
          className="flex-1 transition-all duration-500 ease-in-out transform opacity-100"
        >
          {renderStep()}
        </div>
      </div>
    </FormContext.Provider>
  );
}
