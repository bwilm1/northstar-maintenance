export default function Testimonials() {
    const testimonials = [
        {
            content: "North Star Property Maintenance has been taking care of our lawn for over a year now. Their attention to detail and consistent quality is impressive. Highly recommend!",
            author: "Sarah M.",
            role: "Homeowner in Saskatoon",
        },
        {
            content: "These guys are professional, reliable, and do amazing work. They transformed our overgrown yard into something we're proud of. The before and after difference is incredible.",
            author: "Michael T.",
            role: "Property Manager",
        },
        {
            content: "I've tried several maintenance companies in Saskatoon, and North Star is by far the best. They're always on time, thorough, and the results speak for themselves.",
            author: "Jennifer K.",
            role: "Business Owner",
        },
    ];

    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-xl font-semibold leading-7 text-northstar-green sm:text-2xl">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Don't just take our word for it. Here's what our satisfied clients have to say about our services.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
                        >
                            <div>
                                <p className="text-lg leading-7 text-gray-600">"{testimonial.content}"</p>
                            </div>
                            <div className="mt-6 flex items-center gap-x-4">
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 