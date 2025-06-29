import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-[#222828] shadow-sm">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
                <div className="flex h-24 items-center justify-between">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5 flex items-center">
                            <span className="sr-only">North Star Property Maintenance</span>
                            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="North Star Property Maintenance Logo" className="h-20 w-auto" />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link
                            to="/contact"
                            className="bg-northstar-green text-white hover:bg-green-600 inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
                <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#222828] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5 flex items-center">
                            <span className="sr-only">North Star Property Maintenance</span>
                            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="North Star Property Maintenance Logo" className="h-20 w-auto" />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/contact"
                                    className="bg-northstar-green text-white hover:bg-green-600 inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
} 