import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import EventInfo from "@/components/EventInfo";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import AccountInfo from "@/components/AccountInfo";
import Guestbook from "@/components/Guestbook";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Hero />
      <Invitation />
      <EventInfo />
      <Gallery />
      <Location />
      <AccountInfo />
      <Guestbook />
      <Footer />
    </main>
  );
}
