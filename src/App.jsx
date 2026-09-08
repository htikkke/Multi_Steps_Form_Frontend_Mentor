import SideBar from "./SideBar";

export default function App() {
  return (
    <div
      id="main-container"
      className="w-full max-w-3xl bg-custom-white rounded-2xl shadow-2xl p-6 flex"
    >
      <SideBar />
    </div>
  );
}
