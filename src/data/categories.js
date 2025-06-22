export const categories = [
    {
        id: 'lawn-care',
        name: 'Lawn Care',
        description: 'Professional lawn maintenance services to keep your property looking its best.',
        features: [
            'Regular lawn mowing',
            'Edging and trimming',
            'Weed control',
            'Fertilization',
            'Lawn aeration',
            'Seasonal clean-up'
        ],
        image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        id: 'property-cleanup',
        name: 'Property Cleanup',
        description: 'Comprehensive property cleanup services for both residential and commercial properties.',
        features: [
            'Debris removal',
            'Leaf and yard waste cleanup',
            'Gutter cleaning',
            'Pressure washing',
            'Window cleaning',
            'General property maintenance'
        ],
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        id: 'junk-removal',
        name: 'Junk Removal',
        description: 'Efficient and responsible junk removal services for any size project.',
        features: [
            'Furniture removal',
            'Appliance disposal',
            'Construction debris removal',
            'Yard waste removal',
            'Responsible disposal',
            'Same-day service available'
        ],
        image: process.env.PUBLIC_URL + '/images/junk-removal.jpg'
    },
    {
        id: 'seasonal-services',
        name: 'Seasonal Services',
        description: 'Specialized services to prepare your property for each season.',
        features: [
            'Spring cleanup',
            'Summer maintenance',
            'Fall leaf removal',
            'Winter snow removal',
            'Holiday decoration installation/removal',
            'Seasonal property preparation'
        ],
        image: process.env.PUBLIC_URL + '/images/seasonal.jpg'
    }
];

export const getCategoryNames = () => ['All', ...categories.map(category => category.name)]; 