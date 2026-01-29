import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locationsData } from '@/lib/locationsData';
import { servicesData } from '@/lib/servicesData';
import { Metadata } from 'next';
import { LocalBusinessSchema } from '@/components/seo/schemas/LocalBusinessSchema';
import { siteConfig } from '@/lib/seo.config';

// Fix for Next.js 15+: params is a Promise
interface Props {
    params: Promise<{
        city: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const city = locationsData.find((l) => l.id === resolvedParams.city);

    if (!city) {
        return {
            title: 'Location Not Found',
        };
    }

    return {
        title: `Home Services in ${city.name} | ${siteConfig.name}`,
        description: city.metaDescription,
    };
}

export default async function CityPage({ params }: Props) {
    const resolvedParams = await params;
    const city = locationsData.find((l) => l.id === resolvedParams.city);

    if (!city) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* JSON-LD Schema */}
            <LocalBusinessSchema
                city={city.name}
                latitude={city.coordinates.lat}
                longitude={city.coordinates.lng}
            />

            {/* Hero Section */}
            <div className="bg-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                        Expert Home Services in {city.name}
                    </h1>
                    <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
                        {city.description}
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
                    Available Services in {city.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((category) => {
                        // Flatten all subservices from all subcategories for this category
                        const allSubServices = category.subCategories.flatMap(sc => sc.services);

                        return (
                            <div key={category.id} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                                <div className="mb-4">
                                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                                        {category.name}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {category.name} Services
                                </h3>
                                <ul className="mt-4 space-y-2">
                                    {allSubServices.slice(0, 4).map((sub) => (
                                        <li key={sub.id}>
                                            <Link
                                                href={`/locations/${city.id}/${sub.id}`}
                                                className="text-gray-600 hover:text-blue-600 flex items-center"
                                            >
                                                <span className="mr-2">•</span> {sub.name}
                                            </Link>
                                        </li>
                                    ))}
                                    {allSubServices.length > 4 && (
                                        <li className="text-sm text-gray-500 italic">and more...</li>
                                    )}
                                </ul>
                                <div className="mt-6">
                                    <Link href={`/services/${category.id}`} className="text-blue-600 font-medium hover:text-blue-800">
                                        View All {category.name} Services →
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Areas Served Section */}
            <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Areas We Cover in {city.name}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {city.areas.map((area) => (
                            <span
                                key={area}
                                className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm border border-gray-200"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                    <p className="text-center mt-8 text-gray-500">
                        And many more neighborhoods across {city.name}.
                    </p>
                </div>
            </div>
        </div>
    );
}
