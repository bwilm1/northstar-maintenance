import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { getCategoryNames } from '../data/categories';

const categories = getCategoryNames();

const images = [
    {
        id: 1,
        category: 'Lawn Care',
        src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        alt: 'Freshly mowed lawn',
        description: 'Perfectly manicured lawn after our maintenance service'
    },
    {
        id: 2,
        category: 'Property Cleanup',
        src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        alt: 'Yard cleanup',
        description: 'Before and after of a property cleanup project'
    },
    {
        id: 3,
        category: 'Junk Removal',
        src: process.env.PUBLIC_URL + '/images/junk-removal.jpg',
        alt: 'Junk removal service',
        description: 'Efficient junk removal from a residential property'
    },
    {
        id: 4,
        category: 'Seasonal Services',
        src: process.env.PUBLIC_URL + '/images/seasonal.jpg',
        alt: 'Seasonal maintenance',
        description: 'Fall cleanup and preparation for winter'
    }
];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = selectedCategory === 'All'
        ? images
        : images.filter(image => image.category === selectedCategory);

    return (
        <div className="bg-white">
            {/* Hero section */}
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-northstar-green/20">
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:max-w-xl lg:pt-8 text-center">
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Our Work
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Take a look at some of our recent projects and see the quality of work we deliver
                            for our clients in Saskatoon.
                        </p>
                    </div>
                </div>
            </div>

            {/* Category filters */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category
                                ? 'bg-northstar-green text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Image grid */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="group relative cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="overflow-hidden rounded-lg h-72 w-full bg-gray-100">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-2xl font-medium text-gray-900">{image.category}</h3>
                                <p className="mt-1 text-sm text-gray-500">{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image modal */}
            <Dialog
                open={selectedImage !== null}
                onClose={() => setSelectedImage(null)}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white">
                        {selectedImage && (
                            <div className="relative">
                                <button
                                    className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-400 hover:text-gray-500"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <XMarkIcon className="h-6 w-6" />
                                </button>
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="w-full rounded-t object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-2xl font-medium text-gray-900">{selectedImage.category}</h3>
                                    <p className="mt-1 text-sm text-gray-500">{selectedImage.description}</p>
                                </div>
                            </div>
                        )}
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
} 