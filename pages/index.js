import Hero from '../components/Hero';
import Features from '../components/Features';
import Quickstart from '../components/Quickstart';
import HowItWorks from '../components/HowItWorks';
import PricingTable from '../components/PricingTable';
import DocumentationLinks from '../components/DocumentationLinks';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import DarkModeToggle from '../components/DarkModeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">VIVALAVIDA</h1>
        <DarkModeToggle />
      </header>
      <main className="container mx-auto px-4 py-8 space-y-16">
        <Hero />
        <Features />
        <Quickstart />
        <HowItWorks />
        <PricingTable />
        <DocumentationLinks />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}