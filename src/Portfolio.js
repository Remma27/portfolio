import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail, Phone, Github, ExternalLink, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const TechIcon = ({ name }) => {
    return (
        <div className={`${getTechColor(name)} text-white rounded-full px-3 py-1 text-sm flex items-center`}>
            <span className="mr-1">{getTechIcon(name)}</span>
            {name}
        </div>
    );
};


const getTechIcon = (tech) => {
    const icons = {
        'JavaScript': '🟨',
        'TypeScript': '🔷',
        'Python': '🐍',
        'Java': '☕',
        'React': '⚛️',
        'Angular': '🅰️',
        'Express.js': '🚀',
        'Node.js': '🟢',
        'MongoDB': '🍃',
        'MySQL': '🐬',
        'SQL': '🗄️',
        'Oracle': '🔶',
        'Firebase': '🔥',
        'AWS': '☁️',
        'Git': '🔧',
        'GitHub': '🐙',
        'Android Studio': '🤖',
        'React Native': '📱',
        'HTML': '🌐',
        'CSS': '🎨',
        'jQuery': '🛠️',
        'RxJS': '🔬',
        'Windows': '🪟',
        'Linux': '🐧',
        'APIs RESTful': '🔗',
        'GraphQL': '🔍',
        'Apollo': '🚀',
        'PokeAPI': '🔎',
    };
    return icons[tech] || '🔹';
};

const getTechColor = (tech) => {
    const colors = {
        'JavaScript': 'bg-yellow-300',
        'TypeScript': 'bg-blue-600',
        'Python': 'bg-blue-400',
        'Java': 'bg-red-600',
        'React': 'bg-cyan-500',
        'Angular': 'bg-red-500',
        'Express.js': 'bg-black',
        'Node.js': 'bg-green-500',
        'MongoDB': 'bg-green-400',
        'MySQL': 'bg-blue-800',
        'SQL': 'bg-gray-400',
        'Oracle': 'bg-orange-600',
        'Firebase': 'bg-orange-400',
        'AWS': 'bg-yellow-500',
        'Git': 'bg-orange-600',
        'GitHub': 'bg-gray-700',
        'Android Studio': 'bg-green-700',
        'React Native': 'bg-purple-400',
        'HTML': 'bg-orange-500',
        'CSS': 'bg-blue-300',
        'jQuery': 'bg-blue-500',
        'RxJS': 'bg-purple-600',
        'Windows': 'bg-blue-700',
        'Linux': 'bg-yellow-800',
        'APIs RESTful': 'bg-green-300',
        'GraphQL': 'bg-pink-500',
        'Apollo': 'bg-blue-900',
        'PokeAPI': 'bg-red-300',
    };
    return colors[tech] || 'bg-gray-500';
};

const TechCategory = ({ category, technologies }) => (
    <div className="mb-4 text-center"> {/* Centro de texto horizontalmente */}
        <h3 className="text-lg font-semibold mb-2">{category}</h3>
        <div className="flex flex-wrap gap-2 justify-center items-center"> {/* Centrado horizontal y vertical */}
            {technologies.map((tech, index) => (
                <TechIcon key={index} name={tech} />
            ))}
        </div>
    </div>
);


const ProjectCard = ({ title, description, technologies, projectUrl, videoUrl, pageUrl }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col h-full min-h-[400px]">
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-green-200 mb-4 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <TechIcon key={index} name={tech} />
                ))}
            </div>
            <div className="flex justify-between mt-auto">
                <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition-colors text-sm"
                >
                    Repositorio <ExternalLink className="ml-1 w-4 h-4" />
                </a>
                {videoUrl && (
                    <a
                        href={videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                        Video <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                )}
                {pageUrl && (
                    <a
                        href={pageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-purple-600 text-white px-3 py-2 rounded hover:bg-purple-700 transition-colors text-sm"
                    >
                        Página <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                )}
            </div>
        </div>
    </div>
);




const EducationCard = ({ title, institution, period }) => (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg flex flex-col justify-between min-h-[200px]">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-green-200">{institution}</p>
        <p className="text-green-400">{period}</p>
    </div>
);


const CertificateCard = ({ title, issuer }) => (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-green-200">{issuer}</p>
    </div>
);

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const technologiesByCategory = {
        'Lenguajes de Programación': ['JavaScript', 'TypeScript', 'Python', 'Java'],
        'Frameworks y Librerías': ['React', 'Angular', 'Express.js'],
        'Desarrollo Móvil': ['Android Studio', 'React Native'],
        'Bases de Datos': ['MongoDB', 'MySQL', 'SQL', 'Oracle'],
        'Tecnologías Cloud': ['AWS'],
        'Control de Versiones': ['Git', 'GitHub'],
        'Sistemas Operativos': ['Windows', 'Linux'],
        'Otros': ['Node.js', 'Firebase', 'APIs RESTful'],
    };

    const softSkills = [
        'Comunicación efectiva',
        'Trabajo en equipo',
        'Resolución de problemas',
        'Adaptabilidad',
        'Pensamiento crítico',
        'Gestión del tiempo',
        'Liderazgo',
        'Creatividad',
    ];

    const projects = [
        {
            title: "Student Welfare App",
            description: "Aplicación web diseñada para gestionar y registrar actividades de apoyo al bienestar estudiantil.",
            technologies: ["Angular", "Node.js", "MySQL", "Express.js"],
            projectUrl: "https://github.com/Remma27/StudentWelfareApp",
        },
        {
            title: "Firebase Research Portal",
            description: "Portal web para la gestión de proyectos de investigación estudiantil, utilizando Firebase como backend.",
            technologies: ["Firebase", "React", "JavaScript"],
            projectUrl: "https://github.com/Remma27/FirebaseResearchPortal/tree/main",
            videoUrl: "https://youtu.be/w1rQoe08cd8",
        },
        {
            title: "Student Research Android",
            description: "Aplicación Android para administrar proyectos de investigación estudiantil desde dispositivos móviles.",
            technologies: ["Android Studio", "Kotlin", "Firebase"],
            projectUrl: "https://github.com/Remma27/StudentResearchAndroid",
            videoUrl: "https://youtu.be/w1rQoe08cd8",
        },
        {
            title: "Pokedex",
            description: "Aplicación móvil que simula una Pokedex, permitiendo explorar información detallada sobre diferentes Pokémon.",
            technologies: ["React Native", "JavaScript", "PokeAPI"],
            projectUrl: "https://github.com/Remma27/Pokedex",
        },
        {
            title: "Login React Native Firebase",
            description: "Sistema de autenticación en aplicaciones móviles desarrollado con React Native y Firebase.",
            technologies: ["React Native", "Firebase", "JavaScript"],
            projectUrl: "https://github.com/Remma27/LoginReactNativeFirebase",
        },
        {
            title: "GraphQL Job Listing Platform",
            description: "Plataforma de gestión de inventario digital para profesionales en la región del Pacífico de Costa Rica, utilizando GraphQL y MongoDB.",
            technologies: ["MongoDB", "Apollo", "GraphQL", "Node.js"],
            projectUrl: "https://github.com/Remma27/GraphQLJobListingPlatform",
        },
        {
            title: "Job Search Platform",
            description: "Aplicación web con funcionalidades para solicitantes de empleo y empleadores, incluyendo perfiles, publicaciones y búsqueda de trabajos.",
            technologies: ["MongoDB", "HTML", "CSS", "JavaScript"],
            projectUrl: "https://github.com/Remma27/job-search-platform",
            videoUrl: "https://estuutnac-my.sharepoint.com/:v:/g/personal/emrodriguezso_est_utn_ac_cr/EQiQ-SXCexFBoq2iqbQvlXMBMewMXNIl3ofLSSTRzEaHPg?e=uxpVqp"
        },
        {
            title: "Graphic Designer Portfolio",
            description: "Portafolio web de una sola página para un diseñador gráfico, con secciones de 'Acerca de', 'Proyectos', formulario de contacto y enlaces a redes sociales.",
            technologies: ["HTML", "CSS", "JavaScript"],
            projectUrl: "https://github.com/Remma27/graphic-designer-portfolio",
            pageUrl: "https://remma27.github.io/graphic-designer-portfolio/"
        },
        {
            title: "Angular Rick and Morty App",
            description: "Aplicación web que consume la API de Rick and Morty para mostrar información sobre personajes, episodios y ubicaciones de la serie.",
            technologies: ["Angular", "JavaScript"],
            projectUrl: "https://github.com/Remma27/angular-rick-and-morty",
        },
        {
            title: "Student Service Web",
            description: "Aplicación web para estudiantes y personal universitario, diseñada para registrar objetos perdidos y llevar un control del uso de computadoras en las clases.",
            technologies: ["Angular", "MongoDB"],
            projectUrl: "https://github.com/utn-integrador-III/student-service-web/tree/dev",
        },
    ];


    const education = [
        {
            title: "Bachillerato en Ingeniería en Tecnologías de la Información",
            institution: "Universidad Técnica Nacional",
            period: "Mayo 2024 - Presente",
        },
        {
            title: "Diplomado Universitario en Ingeniería en Tecnologías de la Información",
            institution: "Universidad Técnica Nacional",
            period: "Enero 2022 – Mayo 2024",
        },
        {
            title: "Tecnico Medio en Contabilidad",
            institution: "Colegio Técnico Profesional de Puntarenas",
            period: "Enero 2019 – Diciembre 2021",
        },
    ];

    const certificates = [
        {
            title: "CCNAv7 III TI 3-2023 - G",
            issuer: "Cisco",
        },
        {
            title: "CCNAv7 II TI 2-2023 - F",
            issuer: "Cisco",
        },
        {
            title: "CCNAv7 I TI 1-2023 - A",
            issuer: "Cisco",
        },
    ];

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

    return (
        <div className="bg-gray-900 text-green-300 min-h-screen">
            <nav className="bg-gray-800 p-4 sticky top-0 z-10 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-green-400">Emmanuel Rodríguez</h1>
                    <div className="hidden md:flex space-x-4">
                        {['about', 'skills', 'projects', 'education', 'certificates', 'contact'].map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item}`}
                                className="hover:text-green-500 transition-colors duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </motion.a>
                        ))}
                    </div>
                    <motion.button
                        onClick={toggleMenu}
                        className="md:hidden text-green-400"
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </motion.button>
                </div>
            </nav>

            {isMenuOpen && (
                <motion.div
                    className="md:hidden bg-gray-800 p-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    {['about', 'skills', 'projects', 'education', 'certificates', 'contact'].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item}`}
                            className="block py-2 hover:text-green-500 transition-colors duration-300"
                            whileHover={{ x: 10 }}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </motion.a>
                    ))}
                </motion.div>
            )}

            <main className="container mx-auto p-4 max-w-4xl">
                <motion.section
                    id="about"
                    className="my-8 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 className="text-3xl font-bold mb-4 text-green-400" variants={itemVariants}>Sobre mí</motion.h2>
                    <motion.p className="text-green-200 mb-4" variants={itemVariants}>
                        Soy un estudiante de Ingeniería en Tecnologías de la Información con enfoque en desarrollo web full-stack.
                        Me caracterizo por mi atención al detalle y enfoque analítico en la resolución de problemas.
                    </motion.p>
                    <motion.a
                        href="https://estuutnac-my.sharepoint.com/:b:/g/personal/emrodriguezso_est_utn_ac_cr/ETBF9VtC3ShOgF4FoGxJfX8BHj3D7ed54S-yTbJRmL9z2g?e=uc5cDB"
                        download
                        className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
                        target="_blank" rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Descargar CV <Download className="ml-2 w-4 h-4" />
                    </motion.a>
                </motion.section>

                <motion.section
                    id="skills"
                    className="my-12"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 className="text-3xl font-bold mb-6 text-center text-green-400" variants={itemVariants}>Habilidades Técnicas</motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(technologiesByCategory).map(([category, technologies]) => (
                            <motion.div key={category} variants={itemVariants}>
                                <TechCategory category={category} technologies={technologies} />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="soft-skills"
                    className="my-12"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 className="text-3xl font-bold mb-6 text-center text-green-400" variants={itemVariants}>Habilidades Blandas</motion.h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 rounded-full px-4 py-2 shadow-lg"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="projects"
                    className="my-12"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 className="text-3xl font-bold mb-6 text-center text-green-400" variants={itemVariants}>Proyectos Destacados</motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <ProjectCard
                                    key={index}
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
                    className="my-12"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 className="text-3xl font-bold mb-6 text-center text-green-400" variants={itemVariants}>Educación</motion.h2>
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
                    className="my-12"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 className="text-3xl font-bold mb-6 text-center text-green-400" variants={itemVariants}>Certificados</motion.h2>
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
                    className="my-12 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 className="text-3xl font-bold mb-6 text-green-400" variants={itemVariants}>Contacto</motion.h2>
                    <div className="flex flex-col items-center space-y-2">
                        {[
                            { href: "tel:+50672149100", icon: <Phone className="mr-2" />, text: "(+506) 72149100" },
                            { href: "mailto:emmanuelrsolano27@gmail.com", icon: <Mail className="mr-2" />, text: "emmanuelrsolano27@gmail.com" },
                            { href: "https://www.linkedin.com/in/emmanuel-rodríguez-solano-98961a2ba", icon: <Linkedin className="mr-2" />, text: "LinkedIn" },
                            { href: "https://github.com/Remma27", icon: <Github className="mr-2" />, text: "GitHub" }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                className="flex items-center text-green-200 hover:text-green-500 transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.icon} {item.text}
                            </motion.a>
                        ))}
                    </div>
                </motion.section>
            </main>

            <footer className="bg-gray-800 text-center p-4 text-green-200">
                <p>&copy; 2024 Emmanuel Rodríguez Solano. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Portfolio;