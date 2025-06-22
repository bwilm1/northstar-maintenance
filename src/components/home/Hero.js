import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Perfectly maintained lawn"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            </div>

            <div className="container mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Your Property, Perfectly Maintained
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Saskatoon's trusted team for professional lawn care and property maintenance.
                        We keep your outdoor spaces looking their best, year-round.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/contact"
                            className="btn btn-primary"
                        >
                            Get a Free Quote
                        </Link>
                        <Link
                            to="/services"
                            className="btn btn-secondary"
                        >
                            Our Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 