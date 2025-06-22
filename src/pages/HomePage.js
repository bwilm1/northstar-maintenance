import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AboutSnippet from '../components/home/AboutSnippet';
import Testimonials from '../components/home/Testimonials';
import BottomCTA from '../components/home/BottomCTA';

export default function HomePage() {
    return (
        <div className="bg-white">
            <Hero />
            <ServicesOverview />
            <WhyChooseUs />
            <AboutSnippet />
            <Testimonials />
            <BottomCTA />
        </div>
    );
} 