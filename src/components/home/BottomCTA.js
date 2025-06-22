import { Link } from 'react-router-dom';
import { PhoneIcon } from '@heroicons/react/24/outline';

export default function BottomCTA() {
    return (
        <div className="bg-northstar-green">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to Transform Your Property?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
                        Get in touch today for a free quote. We're ready to help you maintain a beautiful property year-round.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/contact"
                            className="btn bg-white text-northstar-green hover:bg-gray-100"
                        >
                            Get a Free Quote
                        </Link>
                        <a
                            href="tel:3063217751"
                            className="flex items-center gap-x-2 text-base font-semibold leading-7 text-white"
                        >
                            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                            (306) 321-7751
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 