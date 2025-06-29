import { Link } from 'react-router-dom';
import {
    CheckCircleIcon,
    ClockIcon,
    CurrencyDollarIcon,
    ShieldCheckIcon,
    TruckIcon,
    WrenchScrewdriverIcon,
    ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';
import { categories } from '../data/categories';

const services = categories;

const benefits = [
    {
        name: 'Reliable Service',
        description: 'We show up on time, every time, and complete the job to your satisfaction.',
        icon: ClockIcon
    },
    {
        name: 'Quality Work',
        description: 'We take pride in our work and ensure every job meets our high standards.',
        icon: CheckCircleIcon
    },
    {
        name: 'Competitive Pricing',
        description: 'We offer fair and transparent pricing for all our services.',
        icon: CurrencyDollarIcon
    },
    {
        name: 'Licensed & Insured',
        description: "We're fully licensed and insured for your peace of mind.",
        icon: ShieldCheckIcon
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Hero section */}
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-northstar-green/20">
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:max-w-xl lg:pt-8 text-center">
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Our Services
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            From lawn care to junk removal, we offer comprehensive property maintenance services
                            to keep your property looking its best year-round.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl text-center lg:mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Offer</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Choose from our range of professional property maintenance services, all delivered with
                        the same commitment to quality and customer satisfaction.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {services.map((service, index) => (
                        <article key={service.name} className={`flex flex-col items-start ${index === 2 ? 'lg:col-span-2 lg:mx-auto lg:max-w-2xl' : ''}`}>
                            <div className="relative w-full">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="group relative">
                                    <h3 className="mt-8 text-2xl font-bold leading-9 text-gray-900 group-hover:text-gray-600">
                                        {service.name}
                                    </h3>
                                    <p className="mt-5 text-lg leading-8 text-gray-600">{service.description}</p>
                                    <ul className="mt-4 space-y-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-x-2">
                                                <CheckCircleIcon className="h-6 w-6 text-northstar-green" />
                                                <span className="text-base text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Benefits section */}
            <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-2xl font-semibold leading-7 text-northstar-green">Why Choose Us</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need to know about our services
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We're committed to providing the best property maintenance services in Saskatoon.
                            Here's what sets us apart:
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                            {benefits.map((benefit) => (
                                <div key={benefit.name} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                        <benefit.icon className="h-5 w-5 flex-none text-northstar-green" aria-hidden="true" />
                                        {benefit.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">{benefit.description}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* CTA section */}
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to get started?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                            Contact us today to schedule a consultation or get a quote for your property maintenance needs.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="/contact"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Contact Us
                            </Link>
                            <Link to="/about" className="text-sm font-semibold leading-6 text-white">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 