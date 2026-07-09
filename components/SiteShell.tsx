import BackgroundPattern from "@/components/BackgroundPattern";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SkipLink from "@/components/SkipLink";

type SiteShellProps = {
  children: React.ReactNode;
  withFooter?: boolean;
};

export default function SiteShell({
  children,
  withFooter = true,
}: SiteShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <SkipLink />
      <BackgroundPattern />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <div id="main-content">{children}</div>

      {withFooter ? <Footer /> : null}
    </main>
  );
}