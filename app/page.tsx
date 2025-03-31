import Biography from "@/components/biography";
import About from "@/components/about";
import Workexperience from "@/components/workexperience";
import { ModeToggle } from "@/components/light-dark-toggle";

export default function Home() {
  return (
    <main className="container">
      <Biography />
      <About />
      <Workexperience />
      <ModeToggle />
    </main>
  );
}
