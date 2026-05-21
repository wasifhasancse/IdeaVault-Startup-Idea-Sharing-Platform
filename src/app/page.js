import Hero from "@/components/Hero/Hero";
import TrendingIdeas from "@/components/Home/TrendingIdeas";

export const metadata = {
  title: "Home",
  description:
    "Welcome to IdeaVault — discover and share startup ideas with a community of innovators.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <TrendingIdeas />
    </div>
  );
}
