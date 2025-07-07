import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import UpNavBar from "./components/UpNavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <UpNavBar />
    </div>
  );
}
