/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import { 
    Menu, X, Linkedin, Mail, Phone, Github, ExternalLink, Download, ChevronUp,
    Globe, Code2, FileJson, Database, Cloud, Server, Smartphone, Monitor,
    Terminal, Layers, Package, GitBranch, Cpu, Box
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TechIcon = ({ name }) => {
    const Icon = getTechIcon(name);
    return (
        <motion.div 
            className={`${getTechColor(name)} text-white rounded-full px-3 py-1 text-sm flex items-center shadow-md hover:shadow-xl transition-all`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
        >
            {Icon && <Icon className="w-4 h-4 mr-1.5" />}
            {name}
        </motion.div>
    );
};


const getTechIcon = (tech) => {
    const icons = {
        'ASP.NET': Globe,
        'C#': Code2,
        'JavaScript': FileJson,
        'TypeScript': Code2,
        'Python': Terminal,
        'Java': Code2,
        'React': Layers,
        'Angular': Box,
        'Node.js': Server,
        'MongoDB': Database,
        'MySQL': Database,
        'SQL': Database,
        'Oracle': Database,
        'Firebase': Cloud,
        'AWS': Cloud,
        'Azure': Cloud,
        'GitHub': GitBranch,
        'Android Studio': Smartphone,
        'React Native': Smartphone,
        'HTML': Globe,
        'CSS': Monitor,
        'Windows': Monitor,
        'Linux': Terminal,
        'APIs RESTful': Globe,
        'GraphQL': Database,
        'Apollo': Server,
        'PokeAPI': Globe,
        'Kotlin': Code2,
        'Express.js': Server,
        'Git': GitBranch,
        'jQuery': Code2,
        'RxJS': Package,
    };
    return icons[tech] || Cpu;
};

const getTechColor = (tech) => {
    const colors = {
        'JavaScript': 'bg-yellow-600',
        'TypeScript': 'bg-blue-700',
        'Python': 'bg-blue-500',
        'Java': 'bg-red-700',
        'React': 'bg-cyan-600',
        'Angular': 'bg-red-600',
        'Express.js': 'bg-gray-700',
        'Node.js': 'bg-green-600',
        'MongoDB': 'bg-green-700',
        'MySQL': 'bg-blue-800',
        'SQL': 'bg-indigo-700',
        'Oracle': 'bg-red-800',
        'Firebase': 'bg-orange-600',
        'AWS': 'bg-yellow-700',
        'Git': 'bg-orange-700',
        'GitHub': 'bg-purple-800',
        'Android Studio': 'bg-green-800',
        'React Native': 'bg-purple-600',
        'HTML': 'bg-orange-700',
        'CSS': 'bg-blue-600',
        'jQuery': 'bg-blue-700',
        'RxJS': 'bg-purple-700',
        'Windows': 'bg-blue-800',
        'Linux': 'bg-yellow-800',
        'APIs RESTful': 'bg-green-700',
        'GraphQL': 'bg-pink-700',
        'Apollo': 'bg-indigo-800',
        'PokeAPI': 'bg-red-700',
        'Kotlin': 'bg-purple-800',
    };
    return colors[tech] || 'bg-gray-600';
};

const TechCategory = ({ category, technologies }) => (
    <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{category}</h3>
        <div className="flex flex-wrap gap-2 justify-center items-center">
            {technologies.map((tech, index) => (
                <TechIcon key={index} name={tech} />
            ))}
        </div>
    </div>
);

const ProjectCard = ({ title, description, technologies, projectUrl, videoUrl, pageUrl }) => (
    <motion.div 
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-700"
        whileHover={{ y: -5 }}
    >
        <div className="p-6 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-3 text-sky-400">{title}</h3>
            <p className="text-gray-300 mb-4 grow overflow-y-auto text-sm leading-relaxed">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <TechIcon key={index} name={tech} />
                ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
                <ActionButton href={projectUrl} label="Repository" className="bg-sky-500 hover:bg-sky-600" />
                {videoUrl && <ActionButton href={videoUrl} label="Video" className="bg-green-500 hover:bg-green-600" />}
                {pageUrl && <ActionButton href={pageUrl} label="Page" className="bg-orange-500 hover:bg-orange-600" />}
            </div>
        </div>
    </motion.div>
);

const ActionButton = ({ href, label, className }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center text-white px-4 py-2 rounded-lg transition-all duration-200 ease-in-out text-sm font-medium shadow-md hover:shadow-lg ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {label} <ExternalLink className="ml-1 w-4 h-4" />
    </motion.a>
);

const EducationCard = ({ title, institution, period }) => (
    <motion.div 
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[200px] h-full border border-gray-700"
        whileHover={{ y: -5, scale: 1.02 }}
    >
        <h3 className="text-xl font-bold text-sky-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-1">{institution}</p>
        <p className="text-gray-400 text-sm">{period}</p>
    </motion.div>
);

const CertificateCard = ({ title, issuer, description }) => (
    <motion.div 
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[200px] h-full border border-gray-700"
        whileHover={{ y: -5, scale: 1.02 }}
    >
        <h3 className="text-xl font-bold mb-3 text-sky-400">{title}</h3>
        <p className="text-gray-300 mb-2 font-medium">{issuer}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const ExperienceCard = ({ title, institution, period, description }) => (
    <motion.div 
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[200px] h-full border border-gray-700"
        whileHover={{ y: -5, scale: 1.02 }}
    >
        <h3 className="text-xl font-bold mb-3 text-sky-400">{title}</h3>
        <p className="text-gray-300 mb-1 font-medium">{institution}</p>
        <p className="text-gray-400 text-sm mb-3">{period}</p>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const Portfolio = () => {
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const sectionTop = section.offsetTop - navHeight - 20;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    const technologiesByCategory = {
        'Programming Languages': ['C#', 'JavaScript', 'TypeScript', 'Python', 'Java', 'Kotlin'],
        'Frameworks and Libraries': ['ASP.NET', 'React', 'Angular', 'Express.js'],
        'Mobile Development': ['Android Studio', 'React Native'],
        Databases: ['MySQL','MongoDB', 'SQL', 'Oracle'],
        'Cloud Technologies': ['Azure','AWS'],
        'Version Control': ['Git', 'GitHub'],
        'Operating Systems': ['Windows', 'Linux'],
        Others: ['Node.js', 'Firebase', 'RESTful APIs'],
    }

    const softSkills = [
        'Detailed Analysis',
        'Focus on Quality',
        'Problem Solving',
        'Critical Thinking',
        'Results Orientation',
        'Attention to Detail',
        'Data-Driven Decision Making',
        'Perseverance',
    ];

    const projects = [
        {
            title: "Centralized Business Portal with ASP.NET",
            description: "Web application for centralized management of business information, including users, roles, permissions, and modules for viewing machinery downtime connected via ODBC to a HANNA database. Also includes a Pest Control module with QR code generation and readings, route management, and reports.",
            technologies: ["ASP.NET", "C#", "JavaScript", "MySQL", "HTML", "CSS", "ODBC", "QR Codes"],
            projectUrl: "https://github.com/Remma27/Interglo",
        },
        {
            title: "Rice Import System with ASP.NET",
            description: "Web application to record the movements and weighings of rice import trucks unloaded from ships, organized by different companies, with user accounts, roles, and permissions. With the creation of a RESTful API for data management.",
            technologies: ["ASP.NET", "C#", "JavaScript", "MySQL", "HTML", "CSS", "APIs RESTful"],
            projectUrl: "https://github.com/Remma27/SistemaImportaciones",
        },
        {
            title: "Student Welfare Application",
            description: "Web application designed to manage and record student welfare support activities.",
            technologies: ["Angular", "Node.js", "MySQL", "Express.js"],
            projectUrl: "https://github.com/Remma27/StudentWelfareApp",
        },
        {
            title: "Research Portal with Firebase",
            description: "Web portal for managing student research projects, using Firebase as a backend.",
            technologies: ["Firebase", "React", "JavaScript"],
            projectUrl: "https://github.com/Remma27/FirebaseResearchPortal/tree/main",
            videoUrl: "https://youtu.be/w1rQoe08cd8",
        },
        {
            title: "Student Research Android",
            description: "Android application to manage student research projects from mobile devices.",
            technologies: ["Android Studio", "Kotlin", "Firebase"],
            projectUrl: "https://github.com/Remma27/StudentResearchAndroid",
            videoUrl: "https://youtu.be/w1rQoe08cd8",
        },
        {
            title: "Pokedex",
            description: "Mobile application that simulates a Pokedex, allowing users to explore detailed information about different Pokémon.",
            technologies: ["React Native", "JavaScript", "PokeAPI"],
            projectUrl: "https://github.com/Remma27/Pokedex",
        },
        {
            title: "Login with React Native and Firebase",
            description: "Authentication system in mobile applications developed with React Native and Firebase.",
            technologies: ["React Native", "Firebase", "JavaScript"],
            projectUrl: "https://github.com/Remma27/LoginReactNativeFirebase",
        },
        {
            title: "Job Listing Platform with GraphQL",
            description: "Digital inventory management platform for professionals in the Pacific region of Costa Rica, using GraphQL and MongoDB.",
            technologies: ["MongoDB", "Apollo", "GraphQL", "Node.js"],
            projectUrl: "https://github.com/Remma27/graphql-job-listing-platform",
        },
        {
            title: "Job Search Platform",
            description: "Web application with features for job seekers and employers, including profiles, postings, and job search.",
            technologies: ["MongoDB", "HTML", "CSS", "JavaScript"],
            projectUrl: "https://github.com/Remma27/job-search-platform",
            videoUrl: "https://estuutnac-my.sharepoint.com/:v:/g/personal/emrodriguezso_est_utn_ac_cr/EQiQ-SXCexFBoq2iqbQvlXMBMewMXNIl3ofLSSTRzEaHPg?e=uxpVqp"
        },
        {
            title: "Graphic Designer Portfolio",
            description: "Single-page web portfolio for a graphic designer, featuring 'About', 'Projects' sections, a contact form, and social media links.",
            technologies: ["HTML", "CSS", "JavaScript"],
            projectUrl: "https://github.com/Remma27/graphic-designer-portfolio",
            pageUrl: "https://remma27.github.io/graphic-designer-portfolio/"
        },
        {
            title: "Rick and Morty App with Angular",
            description: "Web application that consumes the Rick and Morty API to display information about the show's characters, episodes, and locations.",
            technologies: ["Angular", "JavaScript"],
            projectUrl: "https://github.com/Remma27/AngularRickandMortyApp",
        },
        {
            title: "Student Service Web",
            description: "Web application to register lost items and manage computer usage in classes, connected to APIs developed in the project using the Scrum methodology.",
            technologies: ["Angular", "MongoDB"],
            projectUrl: "https://github.com/utn-integrador-III/student-service-web/tree/dev",
            pageUrl: "https://remma27.github.io/student-service-web/home",
            videoUrl: "https://youtu.be/oBNZt-JRMcs"
        },
        {
            title: "Balance Game Simulation",
            description: "Develop a React-Native app to simulate a balance game. The app should randomly calculate material weights.",
            technologies: ["React Native", "JavaScript"],
            projectUrl: "https://github.com/Remma27/JuegoBalanzas",
            videoUrl: "https://www.youtube.com/watch?v=MoaCqE_rXYY"
        },
    ];

    const education = [
        {
            title: "Bachelor's in Information Technology Engineering",
            institution: "Universidad Tecnica Nacional",
            period: "May 2024 - May 2025",
        },
        {
            title: "University Diploma in Information Technology Engineering",
            institution: "Universidad Tecnica Nacional",
            period: "January 2022 – May 2024",
        },
        {
            title: "Technical Diploma in Accounting",
            institution: "Colegio Tecnico Profesional de Puntarenas",
            period: "January 2019 – December 2021",
        },
    ];

    const experience = [
        {
            title: "Full-Stack Web Developer",
            institution: "Comercializadora Inter Global, Interglo S.L.R.",
            period: "April 2025 - Present",
            description: "Developing and maintaining full-stack web applications using modern technologies like React, Node.js, and databases. Collaborating on projects to deliver high-quality software solutions.",
        },
        {
            title: "Internship at Interglo",
            institution: "Comercializadora Inter Global, Interglo S.L.R.",
            period: "February 2025 - May 2025",
            description: "Gained hands-on experience in web development, learning full-stack technologies, and contributing to company projects under supervision.",
        },
    ];


    const certificates = [
        {
            title: 'English for Work Program Modules 1 and 2',
            issuer: 'Universidad Técnica Nacional',
            description:
                'Certificate for completing the English for Work program, covering modules 1 and 2, focusing on practical English skills for professional environments, including communication, vocabulary, and workplace scenarios.',
        },
        {
            title: 'English Language Certificate',
            issuer: 'Universidad de Costa Rica',
            description:
                'Certificate demonstrating proficiency in the English language, covering reading, writing, listening, and speaking skills at an intermediate level. Listening: B2, Reading: B1, Writing: A2, Speaking: A2.',
        },
        {
            title: 'CCNAv7 III TI 3-2023 - G',
            issuer: 'Cisco',
            description:
                'Cisco certification covering advanced networking concepts, including the configuration and troubleshooting of complex networks. This level delves into topics such as advanced OSPF, network security, and network automation with tools like Python and RESTful APIs.',
        },
        {
            title: 'CCNAv7 II TI 2-2023 - F',
            issuer: 'Cisco',
            description:
                'Cisco certification focused on the configuration and management of intermediate-level networks. It includes concepts like VLAN implementation, RSTP, DHCP, NAT, and basic dynamic routing configuration with OSPF in small and medium-sized networks.',
        },
        {
            title: 'CCNAv7 I TI 1-2023 - A',
            issuer: 'Cisco',
            description:
                'Cisco entry-level certification introducing networking fundamentals, including the OSI model, IP addressing, and the basic configuration of network devices like switches and routers. This certificate provides a solid foundation for understanding basic networking concepts.',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    const navItems = [
        { id: 'about', title: 'About' },
        { id: 'experience', title: 'Experience' },
        { id: 'skills', title: 'Skills' },
        { id: 'projects', title: 'Projects' },
        { id: 'education', title: 'Education' },
        { id: 'certificates', title: 'Certificates' },
        { id: 'contact', title: 'Contact' }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 text-white min-h-screen relative">
            <nav className="bg-gray-800/95 backdrop-blur-sm p-4 sticky top-0 z-50 shadow-2xl transition-all duration-300 border-b border-gray-700">
                <div className="container mx-auto flex justify-between items-center">
                    <motion.h1 
                        className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Emmanuel Rodríguez
                    </motion.h1>

                    {/* Menu for larger screens */}
                    <div className="hidden md:flex space-x-4">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="hover:text-sky-500 transition-colors duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.title}
                            </motion.button>
                        ))}
                    </div>

                    {/* Hamburger button for smaller screens */}
                    <motion.button
                        onClick={toggleMenu}
                        className="md:hidden text-sky-400"
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </motion.button>
                </div>

                {/* Dropdown menu for smaller screens */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden bg-gray-800 p-4 flex flex-col space-y-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block py-2 hover:text-sky-500 transition-colors duration-300 text-left"
                                    whileHover={{ x: 10 }}
                                >
                                    {item.title}
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <main className="container mx-auto p-4 max-w-6xl">
                <motion.section
                    id="about"
                    className="my-16 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent" 
                        variants={itemVariants}
                    >
                        About me
                    </motion.h2>
                    <motion.p 
                        className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto leading-relaxed" 
                        variants={itemVariants}
                    >
                        I'm a Full-Stack Web Developer with a background in Information Technology Engineering. I am known for my attention to detail and analytical approach to problem-solving.
                    </motion.p>
                    <motion.a
                        href="/CV_Emmanuel_2025.pdf"
                        download
                        className="inline-flex items-center bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                        target="_blank" rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download CV <Download className="ml-2 w-5 h-5" />
                    </motion.a>

                </motion.section>
                <motion.section
                    id="experience"
                    className="my-16"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent" 
                        variants={itemVariants}
                    >
                        Experience
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {experience.map((exp, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <ExperienceCard {...exp} />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="skills"
                    className="my-16"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent" 
                        variants={itemVariants}
                    >
                        Technical Skills
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(technologiesByCategory).map(([category, technologies]) => (
                            <motion.div 
                                key={category} 
                                variants={itemVariants}
                                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl"
                            >
                                <TechCategory category={category} technologies={technologies} />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="soft-skills"
                    className="my-16"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent" 
                        variants={itemVariants}
                    >
                        Soft Skills
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl px-6 py-3 shadow-lg border border-gray-700"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -2 }}
                            >
                                <span className="text-gray-200 font-medium">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="projects"
                    className="my-16"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent" 
                        variants={itemVariants}
                    >
                        Projects
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    technologies={project.technologies}
                                    projectUrl={project.projectUrl}
                                    videoUrl={project.videoUrl}
                                    pageUrl={project.pageUrl}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="education"
                    className="my-16"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent" 
                        variants={itemVariants}
                    >
                        Education
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {education.map((edu, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <EducationCard {...edu} />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="certificates"
                    className="my-16"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent" 
                        variants={itemVariants}
                    >
                        Certificates
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((cert, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <CertificateCard {...cert} />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="contact"
                    className="my-16 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-4xl font-bold mb-10 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent" 
                        variants={itemVariants}
                    >
                        Contact
                    </motion.h2>
                    <div className="flex flex-col items-center space-y-4">
                        {[
                            { href: "tel:+50672149100", icon: <Phone className="mr-3" />, text: "(+506) 72149100" },
                            { href: "mailto:emmanuelrsolano27@gmail.com", icon: <Mail className="mr-3" />, text: "emmanuelrsolano27@gmail.com" },
                            { href: "https://www.linkedin.com/in/emmanuel-rodríguez-solano-98961a2ba", icon: <Linkedin className="mr-3" />, text: "LinkedIn" },
                            { href: "https://github.com/Remma27", icon: <Github className="mr-3" />, text: "GitHub" }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                className="flex items-center text-gray-300 hover:text-sky-400 transition-all duration-300 bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl border border-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.icon} <span className="font-medium">{item.text}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.section>
            </main>

            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        className="fixed bottom-6 right-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-sky-500/50 border border-sky-400"
                        onClick={scrollToTop}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 20 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>

            <footer className="bg-gray-800/95 backdrop-blur-sm text-center p-6 text-gray-300 border-t border-gray-700 mt-20">
                <p className="font-medium">&copy; {new Date().getFullYear()} Emmanuel Rodríguez Solano.</p>
            </footer>

            {/* Google Translate Element */}
            <div id="google_translate_element" style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }}></div>
        </div>
    );
};


export default Portfolio;