import { useState } from 'react';
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    ClockIcon
} from '@heroicons/react/24/outline';

const contactInfo = [
    {
        name: 'Email',
        description: 'Get in touch with us via email',
        icon: EnvelopeIcon,
        value: 'contact@northstarpm.ca'
    },
    {
        name: 'Phone',
        description: 'Call us directly',
        icon: PhoneIcon,
        value: '(306) 555-0123'
    },
    {
        name: 'Location',
        description: 'Based in Saskatoon, SK',
        icon: MapPinIcon,
        value: 'Saskatoon, Saskatchewan'
    }
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="bg-white">
            {/* Hero section */}
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-northstar-green/20">
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Contact Us
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Get in touch with us to discuss your property maintenance needs or request a quote.
                            We're here to help!
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact information */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We're here to help with all your property maintenance needs. Contact us using any of
                        the methods below or fill out our contact form.
                    </p>
                </div>
                <div className="mx-auto mt-16 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center text-base leading-7">
                    {contactInfo.map((info) => (
                        <div key={info.name} className="text-center">
                            <dt className="font-semibold text-gray-900">
                                <div className="mx-auto mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-northstar-green">
                                    <info.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                {info.name}
                            </dt>
                            <dd className="mt-1 text-gray-600">{info.description}</dd>
                            <dd className="mt-2 text-base leading-7 text-northstar-green">{info.value}</dd>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact form */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Send us a Message</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-northstar-green sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-northstar-green sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                                Phone
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-northstar-green sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="service" className="block text-sm font-semibold leading-6 text-gray-900">
                                Service Interested In
                            </label>
                            <div className="mt-2.5">
                                <select
                                    name="service"
                                    id="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-northstar-green sm:text-sm sm:leading-6"
                                >
                                    <option value="">Select a service</option>
                                    <option value="lawn-care">Lawn Care</option>
                                    <option value="property-cleanup">Property Cleanup</option>
                                    <option value="junk-removal">Junk Removal</option>
                                    <option value="seasonal-services">Seasonal Services</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-northstar-green sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-northstar-green px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-northstar-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-northstar-green"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
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