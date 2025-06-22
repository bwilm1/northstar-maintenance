import { Link } from 'react-router-dom';

export default function AboutSnippet() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto flex flex-col items-center justify-center max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="w-full flex flex-col items-center lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:items-start lg:flex-none">
                    <div className="lg:pr-4 w-full flex flex-col items-center lg:items-start">
                        <div className="lg:max-w-lg text-center lg:text-left">
                            <h2 className="text-xl font-semibold leading-7 text-northstar-green sm:text-2xl">About Us</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Local Property Maintenance Experts</p>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                We're a team of dedicated professionals committed to keeping your property looking its best year-round.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center px-6 lg:px-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:pr-8 lg:block">
                    <img
                        className="w-full max-w-xl rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Our team at work"
                    />
                </div>
            </div>
        </div>
    );
} 