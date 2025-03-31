import Biography from "@/components/biography";
import About from "@/components/about";
import Workexperience from "@/components/workexperience";

export default function Home() {
  return (
    <main className="container">
      <Biography />
      <About />
      <Workexperience />
    </main>
  );
}
