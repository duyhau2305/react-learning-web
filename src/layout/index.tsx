import BannerSection from "./bannerSection";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full p-0 bg-secondary">
        {/* <BannerSection /> */}
        {children}
      </main>
      <Footer />
    </>
  );
}
