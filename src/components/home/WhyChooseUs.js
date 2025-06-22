import {
    MapPinIcon,
    UserGroupIcon,
    CheckCircleIcon,
    CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const features = [
    {
        name: 'Local & Reliable',
        description: "We're a local Saskatoon business, committed to serving our community with pride and reliability.",
        icon: MapPinIcon,
    },
    {
        name: 'Owner-Operated',
        description: 'Every job is personally supervised by one of our three owners, ensuring quality and attention to detail.',
        icon: UserGroupIcon,
    },
    {
        name: 'Attention to Detail',
        description: 'We take pride in our work and never cut corners. Your satisfaction is our top priority.',
        icon: CheckCircleIcon,
    },
    {
        name: 'Free Estimates',
        description: 'Get a detailed quote for your project with no obligation. We believe in transparent pricing.',
        icon: CurrencyDollarIcon,
    },
];

export default function WhyChooseUs() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-xl font-semibold leading-7 text-northstar-green sm:text-2xl">Why Choose Us</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience the Northstar Difference</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We're committed to providing exceptional service and building lasting relationships with our clients.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <feature.icon className="h-5 w-5 flex-none text-northstar-green" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
} 