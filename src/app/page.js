import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import JoinCommunity from "@/components/Home/JoinCommunity";
import TrendingIdeas from "@/components/Home/TrendingIdeas";
import WhyIdeaVault from "@/components/Home/WhyIdeaVault";

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
      <HowItWorks />
      <WhyIdeaVault />
      <JoinCommunity />
    </div>
  );
}
