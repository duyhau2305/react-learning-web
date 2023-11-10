import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full p-0 bg-[#fff9f1]">{children}</main>
      <Footer />
    </>
  );
}
