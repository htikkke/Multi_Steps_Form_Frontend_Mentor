import { useState, createContext } from "react";
import SideBar from "./main-components/SideBar";
import PersonalInfo from "./main-components/PersonalInfo";
import SelectPlan from "./main-components/SelectPlan";
import AddOn from "./main-components/AddOn";

export const FormContext = createContext();

export default function App() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <FormContext.Provider value={{ isYearly, setIsYearly }}>
      <div
        id="main-container"
        className="w-full max-w-4xl bg-custom-white rounded-2xl shadow-2xl p-6 flex gap-8"
      >
        <SideBar />
        <AddOn />
      </div>
    </FormContext.Provider>
  );
}
