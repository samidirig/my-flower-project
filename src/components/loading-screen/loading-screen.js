import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LoadingScreen() {
  return (
    <div className="w-full h-screen absolute flex flex-col items-center justify-center gap-5 z-50">
      <p className="text-black font-normal text-xl">Loading</p>
      <div className="animate-spin">
        <AiOutlineLoading3Quarters style={{ width: 40, height: 40 }} />
      </div>
    </div>
  );
}
