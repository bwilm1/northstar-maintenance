import { Link } from 'react-router-dom';
import {
    CheckCircleIcon,
    ClockIcon,
    CurrencyDollarIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    MapPinIcon,
    HeartIcon,
    StarIcon
} from '@heroicons/react/24/outline';

const team = [
    {
        name: 'Jake Missura',
        role: 'Co-Founder & Operations Manager',
        image: process.env.PUBLIC_URL + '/images/jake.png',
        bio: 'Handles our scheduling and makes sure all the equipment is ready to go for each job.'
    },
    {
        name: 'Senan Monar',
        role: 'Co-Founder & Service Manager',
        image: process.env.PUBLIC_URL + '/images/senan.png',
        bio: 'Makes sure we do quality work and that customers are happy with the results.'
    },
    {
        name: 'Ryder Wilm',
        role: 'Co-Founder & Customer Relations',
        image: process.env.PUBLIC_URL + '/images/ryder.png',
        bio: 'Talks with customers and makes sure we understand what they need for their property.'
    }
];

const values = [
    {
        name: 'Local Pride',
        description: "We're proud to be a local Saskatoon business, serving our community with dedication.",
        icon: MapPinIcon
    },
    {
        name: 'Quality Service',
        description: 'We never compromise on quality, ensuring every job is done to the highest standards.',
        icon: StarIcon
    },
    {
        name: 'Customer Focus',
        description: 'Our customers are at the heart of everything we do, from service delivery to communication.',
        icon: HeartIcon
    },
    {
        name: 'Team Spirit',
        description: 'We work together as a team, supporting each other to deliver the best possible service.',
        icon: UserGroupIcon
    }
];

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero section */}
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-northstar-green/20">
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            About North Star
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We're three hard-working guys who take pride in keeping Saskatoon's properties
                            looking their best. Learn more about our story and what drives us.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Story section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="lg:flex lg:items-center lg:gap-x-16">
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1764&q=80"
                        alt="Professional landscaping project"
                        className="hidden lg:block w-1/2 rounded-2xl object-cover shadow-lg"
                    />
                    <div className="mx-auto max-w-2xl text-center lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            North Star Property Maintenance was founded with a simple mission: to provide reliable,
                            professional property maintenance services to our community. We believe in doing things
                            the right way, every time.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            As a local Saskatoon business, we understand the unique needs of our community and take
                            pride in serving our neighbors with the highest level of care and attention to detail.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team section */}
            <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Meet the dedicated team behind North Star Property Maintenance. We're committed to
                            providing the best service possible to our clients.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    >
                        {team.map((person) => (
                            <li key={person.name}>
                                <img
                                    className="aspect-[4/5] w-full rounded-2xl object-cover"
                                    src={person.image}
                                    alt={person.name}
                                />
                                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                                <p className="text-base leading-7 text-northstar-green">Co-Founder</p>
                                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Values section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-semibold leading-7 text-northstar-green">Our Values</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        What drives us
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        These core values guide everything we do at North Star Property Maintenance.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {values.map((value) => (
                            <div key={value.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <value.icon className="h-5 w-5 flex-none text-northstar-green" aria-hidden="true" />
                                    {value.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{value.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* CTA section */}
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to work with us?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                            Contact us today to discuss your property maintenance needs and get a free quote.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="/contact"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Contact Us
                            </Link>
                            <Link to="/services" className="text-sm font-semibold leading-6 text-white">
                                View Services <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 