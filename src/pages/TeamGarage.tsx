import TeamGarage from "@/components/TeamGarage";
import NextLapButton from "@/components/NextLapButton";

const TeamGaragePage = () => {
  return (
    <main className="relative min-h-screen py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <TeamGarage />
        <NextLapButton />
      </div>
    </main>
  );
};

export default TeamGaragePage;
