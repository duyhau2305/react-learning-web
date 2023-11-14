import About from "./About";
import BannerSection from "./BannerSection";
import BrandComponent from "./Brand";
import FeatureCourses from "./FeatureCourses";
import PopularCategory from "./PopularCategory";

export default function HomePage() {
  return (
    <section className="w-full">
      <BannerSection />
      <BrandComponent/>
      <PopularCategory/>
      <FeatureCourses/>
      <About/>
      {/* <BannerSection />
      <BannerSection />
      <BannerSection />
      <BannerSection />
      <BannerSection />
      <BannerSection />
      <BannerSection />
      <BannerSection />
      <BannerSection />
      <BannerSection />
      <BannerSection />
      <BannerSection />
      <BannerSection /> */}
    </section>
  );
}
