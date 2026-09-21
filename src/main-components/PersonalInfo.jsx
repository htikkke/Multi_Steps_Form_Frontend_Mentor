import { useContext } from "react";
import { FormContext } from "../App";

export default function PersonalInfo() {
  const { setName, setEmail, setNumber, errors, handleInput } =
    useContext(FormContext);
  return (
    <div className="rounded-2xl p-8 w-full flex flex-col gap-8">
      {/* Personal-Info-Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-custom-blue-950 text-2xl">
          Personal Info
        </h1>
        <p className="font-normal text-custom-grey-500 text-xs">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      {/* Personal-Info-Input-Section */}
      <div className="flex flex-col gap-5 mt-5">
        {/* name-field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label className="font-bold text-xs text-custom-blue-950">
              Name
            </label>
            {/* error */}
            {errors.name && (
              <label className={`font-bold text-xs text-custom-red-500`}>
                This field is required
              </label>
            )}
          </div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder=" e.g. Stephen King"
            className={`border ${errors.name ? "border-custom-red-500" : "border-custom-grey-500"} p-2.5 w-full rounded-lg text-sm text-custom-blue-950 cursor-pointer outline-none focus:border focus:border-custom-purple-300`}
          />
        </div>
        {/* email-field */}
        <div>
          <div className="flex items-center justify-between">
            <label className="font-bold text-xs text-custom-blue-950">
              Email Address
            </label>
            {/* error */}
            {errors.email && (
              <label className="font-bold text-xs text-custom-red-500">
                This field is required
              </label>
            )}
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder=" e.g. stephenking@lorem.com"
            className={`border ${errors.email ? "border-custom-red-500" : "border-custom-grey-500"} p-2.5 w-full rounded-lg text-sm text-custom-blue-950 cursor-pointer outline-none focus:border focus:border-custom-purple-300`}
          />
        </div>
        {/* number-field */}
        <div>
          <div className="flex items-center justify-between">
            <label className="font-bold text-xs text-custom-blue-950">
              Phone Number
            </label>
            {/* error */}
            {errors.number && (
              <label className="font-bold text-xs text-custom-red-500">
                This field is required
              </label>
            )}
          </div>
          <input
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            placeholder=" e.g. +1 234 567 890"
            className={`border ${errors.number ? "border-custom-red-500" : "border-custom-grey-500"} p-2.5 w-full rounded-lg text-sm text-custom-blue-950 cursor-pointer outline-none focus:border focus:border-custom-purple-300`}
          />
        </div>
      </div>
      {/* Next-Button */}
      <div className="flex justify-end mt-20">
        <button
          onClick={handleInput}
          className="bg-custom-blue-950 rounded-lg text-custom-white py-2.5 px-5 text-sm cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
