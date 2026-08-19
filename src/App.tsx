import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Preview } from "@/components/sections/Preview";
import { Product } from "@/components/sections/Product";
import { Impact } from "@/components/sections/Impact";
import { Compliance } from "@/components/sections/Compliance";
import { ContactCTA } from "@/components/sections/ContactCTA";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Preview />
        <Product />
        <Impact />
        <Compliance />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
