import React from 'react';

const Blog = () => {
    return (
        <div className="bg-gray-900 text-white p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Mental Health Blog</h2>
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">Understanding Stress</h3>
                <p className="text-lg">
                    Stress is a natural response to challenges or demands. It can manifest in various ways and affect our mental and physical well-being. Understanding the sources of stress and learning to identify its symptoms are crucial steps in managing it effectively.
                </p>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">Tips to Reduce Stress</h3>
                <p className="text-lg">
                    There are many techniques to alleviate stress and promote relaxation. Some effective strategies include deep breathing exercises, mindfulness meditation, regular physical activity, and maintaining a healthy lifestyle. It's important to find what works best for you and incorporate it into your daily routine.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-semibold mb-2">Seeking Professional Help</h3>
                <p className="text-lg">
                    If you find that stress is significantly impacting your daily life and well-being, don't hesitate to seek professional help. Therapists, counselors, and mental health professionals can provide valuable support and guidance tailored to your individual needs.
                </p>
            </div>
        </div>
    );
}

export default Blog;
