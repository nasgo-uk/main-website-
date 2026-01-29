import Link from 'next/link';
import { locationsData } from '@/lib/locationsData';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Locations We Serve | NasGo',
    description: 'Find trusted NasGo professionals in your area. Serving Birmingham and London with reliable home services.',
};

export default function LocationsIndexPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Locations We Serve
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Professional home services available across these major cities.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {locationsData.map((location) => (
                        <Link
                            key={location.id}
                            href={`/locations/${location.id}`}
                            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300 block"
                        >
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {location.name}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {location.description}
                                </p>
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                        Popular Areas
                                    </h4>
                                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                                        {location.areas.slice(0, 5).map((area, index) => (
                                            <span key={area}>
                                                {area}{index < 4 ? ',' : '...'}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
