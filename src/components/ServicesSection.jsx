import React from 'react'

const ServicesSection = () => {

    const services = [
        {
            icon: '⚛️',
            title: 'Frontend Development',
            description: 'Modern React applications with responsive design, Tailwind CSS, and smooth animations. Built for performance and great user experiences.',
            skill1: 'React.js',
            skill2: 'Tailwind CSS',
            skill3: 'JavaScript',
        },
        {
            icon: '🔧',
            title: 'Backend Development',
            description: 'Robust Node.js and Express.js backends with RESTful APIs, authentication, JWT, and middleware. Secure and scalable server solutions.',
            skill1: 'Node.js',
            skill2: 'Express.js',
            skill3: 'REST APIs',
        },
        {
            icon: '🗄️',
            title: 'Database Design',
            description: 'MongoDB database design, schema optimization, and Mongoose integration. Building efficient data models and queries for web applications.',
            skill1: 'MongoDB',
            skill2: 'Mongoose',
            skill3: 'Database Design',
        },
        {
            icon: '🚀',
            title: 'Full-Stack Solutions',
            description: 'Complete MERN stack applications with authentication, payment integration, admin dashboards, and real-time features end-to-end.',
            skill1: 'MERN Stack',
            skill2: 'E-Commerce',
            skill3: 'Payment APIs',
        }
    ]

    return (
        <section id='services' className='bg-[#0a0a0a] py-8 px-6 md:px-12 lg:px-20'>
            <div
                data-aos="fade-left"
                className='flex flex-col md:justify-between'>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-8 flex items-center gap-3">
                    <span className="w-8 h-px bg-gray-700"></span>
                    MY EXPERTISE
                </p>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-white">
                    Full-Stack Services
                </h2>
                {/* Fix 1: Changed text-4 → text-base (valid Tailwind class) */}
                <p className="text-gray-400 text-base leading-relaxed mb-12">
                    End-to-end web development services covering frontend, backend, database, and complete MERN stack solutions.
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
