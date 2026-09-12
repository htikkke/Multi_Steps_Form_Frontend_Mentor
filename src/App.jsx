import { useState, createContext } from "react";
import SideBar from "./SideBar";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";

export const FormContext = createContext();

export default function App() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <FormContext.Provider value={{ isYearly, setIsYearly }}>
      <div
        id="main-container"
        className="w-full max-w-3xl bg-custom-white rounded-2xl shadow-2xl p-6 flex gap-8"
      >
        <SideBar />
        <SelectPlan />
      </div>
    </FormContext.Provider>
  );
}
