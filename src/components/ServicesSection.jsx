import React from 'react'

const ServicesSection = () => {

    const services = [
        {
            icon: '📱',
            title: 'Responsive Web Design',
            description: 'Pixel-perfect interfaces that look stunning on every device. From mobile-first foundations to complex responsive layouts with flawless breakpoints.',
            skill1: 'Mobile-first',
            skill2: 'Cross-browser',
            skill3: 'Accessible',
        },
        {
            icon: '⚡',
            title: 'Frontend Development',
            description: 'Modern React and Next.js applications with clean architecture, reusable components, TypeScript, and comprehensive testing strategies.',
            skill1: 'React',
            skill2: 'JavaScript',
            skill3: 'Testing',
        },
        {
            icon: '🚀',
            title: 'Performance Optimization',
            description: 'Auditing and optimizing existing applications for speed, Core Web Vitals, bundle size, and overall runtime performance excellence.',
            skill1: 'Core Web Vitals',
            skill2: 'SEO',
            skill3: 'Bundle optimization',
        },
        {
            icon: '🎨',
            title: 'UI Implementation',
            description: 'Transforming Figma designs into living, breathing interfaces with meticulous attention to detail, animations, and micro-interactions.',
            skill1: 'Figma to code',
            skill2: 'Animations',
            skill3: 'Design systems',
        }
    ]

    return (
        <section id='services' className='bg-[#0a0a0a] py-8 px-6 md:px-12 lg:px-20'>
            <div
                data-aos="fade-left"
                className='flex flex-col md:justify-between'>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-8 flex items-center gap-3">
                    <span className="w-8 h-px bg-gray-700"></span>
                    WHAT I OFFER
                </p>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-white">
                    Services
                </h2>
                {/* Fix 1: Changed text-4 → text-base (valid Tailwind class) */}
                <p className="text-gray-400 text-base leading-relaxed mb-12">
                    Specialized frontend services built around quality, performance, and exceptional user experiences.
                </p>
            </div>
            <div
                data-aos="fade-right"
                className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                {
                    services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="box border border-[#ffffff14] bg-[#101010] p-6 rounded-2xl flex flex-col items-start">
                                <div className='inline border border-[#ffffff14] p-3 rounded-2xl text-2xl'>
                                    {service.icon}
                                </div>
                                {/* Fix 2: Changed h1 → h3 (only one h1 per page; h2 is already used above) */}
                                <h3 className='text-white text-3xl py-4'>
                                    {service.title}
                                </h3>
                                <p className='text-[#999999]'>
                                    {service.description}
                                </p>
                                {/* Fix 3: Unified badge padding — all badges now use consistent md:py-3 md:px-6 */}
                                <div className='flex flex-wrap gap-4 py-4'>
                                    <span className='py-2 px-5 bg-[#26262682] rounded-full flex items-center text-[12px] text-[#A0A0A0] border border-[#ffffff14] md:py-3 md:px-6 uppercase'>
                                        {service.skill1}
                                    </span>
                                    <span className='py-2 px-5 bg-[#26262682] rounded-full flex items-center text-[12px] text-[#A0A0A0] border border-[#ffffff14] md:py-3 md:px-6 uppercase'>
                                        {service.skill2}
                                    </span>
                                    <span className='py-2 px-5 bg-[#26262682] rounded-full flex items-center text-[12px] text-[#A0A0A0] border border-[#ffffff14] md:py-3 md:px-6 uppercase'>
                                        {service.skill3}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ServicesSection
