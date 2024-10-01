import Header from "./components/Header";
import IntroSection from "./sections/IntroSection";
import TimelineSection from "./sections/TimelineSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-start items-center min-h-screen">
      <Header />
      <IntroSection />
      <TimelineSection />
    </main>
  );
}
