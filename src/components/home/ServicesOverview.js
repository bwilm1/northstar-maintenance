import { Link } from 'react-router-dom';
import {
    SunIcon,
    HomeIcon,
    TrashIcon,
    TruckIcon,
} from '@heroicons/react/24/outline';
import { categories } from '../../data/categories';

const iconMap = {
    'Lawn Care': SunIcon,
    'Property Cleanup': TrashIcon,
    'Junk Removal': TruckIcon
};

const services = categories.map(category => ({
    ...category,
    icon: iconMap[category.name],
    link: '/services'
}));

export default function ServicesOverview() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-6 sm:px-8 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our Services
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We offer a comprehensive range of property maintenance services to keep your space looking its best.
                    </p>
                </div>
                <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div key={service.name} className="flex flex-col">
                                    <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
                                        <img
                                            src={service.image}
                                            alt={service.name}
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                                        </div>
                                    </div>
                                    <dt className="flex items-center gap-x-3 text-xl sm:text-2xl font-semibold leading-7 text-gray-900">
                                        {service.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">{service.description}</p>
                                        <p className="mt-6">
                                            <Link
                                                to={service.link}
                                                className="text-sm font-semibold leading-6 text-northstar-green"
                                            >
                                                Learn more <span aria-hidden="true">→</span>
                                            </Link>
                                        </p>
                                    </dd>
                                </div>
                            );
                        })}
                    </dl>
                </div>
            </div>
        </div>
    );
} 