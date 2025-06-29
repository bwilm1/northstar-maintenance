import {
    EnvelopeIcon,
    PhoneIcon,
    // InstagramIcon (not available in heroicons v2, will use a fallback)
} from '@heroicons/react/24/outline';
import { FaInstagram } from 'react-icons/fa';

const contactInfo = [
    {
        name: 'Email',
        description: 'Get in touch with us via email',
        icon: EnvelopeIcon,
        value: 'northstaryxe@gmail.com'
    },
    {
        name: 'Phone',
        description: 'Call us directly',
        icon: PhoneIcon,
        value: '(306) 321-7751'
    },
    {
        name: 'Instagram',
        description: 'DM us on Instagram',
        icon: FaInstagram,
        value: '@northstarproperty_yxe',
        link: 'https://instagram.com/northstarproperty_yxe'
    }
];

export default function ContactPage() {
    return (
        <div className="bg-white">
            {/* Hero section */}
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-northstar-green/20">
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Contact Us to Receive Your Quote Today!
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Get in touch with us to discuss your property maintenance needs or request a quote.
                            We're here to help!
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact information */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
                <div className="mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactInfo.map((info) => (
                            <div key={info.name} className="text-center group">
                                {info.name === 'Email' ? (
                                    <a
                                        href={`mailto:${info.value}`}
                                        className="block mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-northstar-green shadow-lg group-hover:scale-110 hover:bg-green-600 transition-all duration-200 cursor-pointer"
                                    >
                                        <info.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </a>
                                ) : info.name === 'Phone' ? (
                                    <a
                                        href={`tel:${info.value.replace(/\s/g, '')}`}
                                        className="block mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-northstar-green shadow-lg group-hover:scale-110 hover:bg-green-600 transition-all duration-200 cursor-pointer"
                                    >
                                        <info.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </a>
                                ) : info.name === 'Instagram' ? (
                                    <a
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-northstar-green shadow-lg group-hover:scale-110 hover:bg-green-600 transition-all duration-200 cursor-pointer"
                                    >
                                        <info.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </a>
                                ) : (
                                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-northstar-green shadow-lg group-hover:scale-110 transition-transform duration-200">
                                        <info.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                )}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.name}</h3>
                                <p className="text-sm text-gray-600 mb-3">{info.description}</p>
                                {info.name === 'Email' ? (
                                    <a
                                        href={`mailto:${info.value}`}
                                        className="text-base font-medium text-northstar-green hover:text-green-700 transition-colors duration-200 cursor-pointer"
                                    >
                                        {info.value}
                                    </a>
                                ) : info.name === 'Phone' ? (
                                    <a
                                        href={`tel:${info.value.replace(/\s/g, '')}`}
                                        className="text-base font-medium text-northstar-green hover:text-green-700 transition-colors duration-200 cursor-pointer"
                                    >
                                        {info.value}
                                    </a>
                                ) : info.name === 'Instagram' ? (
                                    <a
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base font-medium text-northstar-green hover:text-green-700 transition-colors duration-200 cursor-pointer"
                                    >
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-base font-medium text-northstar-green">{info.value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Map section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find Us</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We're based in Saskatoon, serving the entire city and surrounding areas.
                    </p>
                </div>
                <div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
                    <iframe
                        title="Saskatoon Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.6504900120997!2d-106.6700!3d52.1332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6bf47ed992b%3A0x5049e3295772690!2sSaskatoon%2C%20SK!5e0!3m2!1sen!2sca!4v1647881234567!5m2!1sen!2sca"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
} 