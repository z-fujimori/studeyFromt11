import Image from "next/image";
import News from "./components/News";
import MainContent from "./components/MainContent";
import Map from "./components/Map";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-[640px] mx-auto">
        <News />
        <MainContent />
      </div>
      <Map />
    </div>
  );
}
