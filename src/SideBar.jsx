export default function SideBar() {
  return (
    <div className="bg-[url(/assets/images/bg-sidebar-desktop.svg)] bg-center bg-no-repeat p-8 flex flex-col gap-6 min-h-125 min-w-70 rounded-2xl">
      {/* Option-1 */}
      <div className="flex gap-5 items-center">
        <p className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center text-sm">
          1
        </p>
        <div className="flex flex-col">
          <p className="text-custom-purple-200 uppercase text-xs font-normal">
            Step-1
          </p>
          <p className="text-custom-white uppercase font-bold text-sm tracking-wider">
            Your info
          </p>
        </div>
      </div>
      {/* Option-2 */}
      <div className="flex gap-5 items-center">
        <p className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center text-sm">
          2
        </p>
        <div className="flex flex-col">
          <p className="text-custom-purple-200 uppercase text-xs font-normal">
            Step-2
          </p>
          <p className="text-custom-white uppercase font-bold text-sm tracking-wider">
            Select Plan
          </p>
        </div>
      </div>
      {/* Option-3 */}
      <div className="flex gap-5 items-center">
        <p className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center text-sm">
          3
        </p>
        <div className="flex flex-col">
          <p className="text-custom-purple-200 uppercase text-xs font-normal">
            Step-3
          </p>
          <p className="text-custom-white uppercase font-bold text-sm tracking-wider">
            Add-Ons
          </p>
        </div>
      </div>
      {/* Option-4 */}
      <div className="flex gap-5 items-center">
        <p className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center text-sm">
          4
        </p>
        <div className="flex flex-col">
          <p className="text-custom-purple-200 uppercase text-xs font-normal">
            Step-4
          </p>
          <p className="text-custom-white uppercase font-bold text-sm tracking-wider">
            Summary
          </p>
        </div>
      </div>
    </div>
  );
}
