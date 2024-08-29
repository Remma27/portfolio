import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail, Phone, Github, ExternalLink, Code, Server, Database, Cloud, Monitor } from 'lucide-react';

const TechCategory = ({ category, technologies }) => (
    <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">{category}</h3>
        <div className="flex flex-wrap gap-4">
            {technologies.map((tech, index) => (
                <div key={index} className="flex items-center bg-gray-800 rounded-full px-3 py-1">
                    <tech.icon size={20} className="text-green-400 mr-2" />
                    <span className="text-sm">{tech.name}</span>
                </div>
            ))}
        </div>
    </div>
);

const ProjectCard = ({ title, description, technologies, imageUrl, projectUrl }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-green-200 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-green-700 text-green-100 px-2 py-1 rounded text-sm">
                        {tech}
                    </span>
                ))}
            </div>
            <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
                Ver Proyecto <ExternalLink className="ml-2 w-4 h-4" />
            </a>
        </div>
    </div>
);

const EducationCard = ({ title, institution, period }) => (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-green-200">{institution}</p>
        <p className="text-green-400">{period}</p>
    </div>
);

const CertificateCard = ({ title, issuer, imageUrl }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-green-200">{issuer}</p>
        </div>
    </div>
);

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const technologiesByCategory = {
        'Lenguajes de Programación': [
            { name: 'JavaScript', icon: Code },
            { name: 'TypeScript', icon: Code },
            { name: 'Python', icon: Code },
            { name: 'Java', icon: Code },
        ],
        'Frameworks y Librerías': [
            { name: 'React', icon: Monitor },
            { name: 'Angular', icon: Monitor },
            { name: 'Express.js', icon: Server },
        ],
        'Bases de Datos': [
            { name: 'MongoDB', icon: Database },
            { name: 'MySQL', icon: Database },
        ],
        'Tecnologías Cloud': [
            { name: 'AWS', icon: Cloud },
        ],
        'Otros': [
            { name: 'Node.js', icon: Server },
        ],
    };

    const projects = [
        {
            title: "Sistema de Gestión de Inventario",
            description: "Una aplicación web full-stack para gestionar inventarios de pequeñas empresas.",
            technologies: ['React', 'Node.js', 'MongoDB'],
            imageUrl: "/api/placeholder/400/300",
            projectUrl: "https://github.com/Remma27",
        },
        {
            title: "App de Seguimiento Fitness",
            description: "Aplicación móvil para seguimiento de rutinas de ejercicio y dieta.",
            technologies: ['React Native', 'Firebase'],
            imageUrl: "/api/placeholder/400/300",
            projectUrl: "https://github.com/Remma27",
        },
        {
            title: "Dashboard de Análisis de Datos",
            description: "Dashboard interactivo para visualización de datos de ventas y métricas de negocio.",
            technologies: ['Angular', 'D3.js', 'Node.js'],
            imageUrl: "/api/placeholder/400/300",
            projectUrl: "https://github.com/Remma27",
        },
    ];

    const education = [
        {
            title: "Licenciatura en Ingeniería en Tecnologías de la Información",
            institution: "Universidad Técnica Nacional",
            period: "Mayo 2024 - Presente",
        },
        {
            title: "Diplomado Universitario en Ingeniería en Tecnologías de la Información",
            institution: "Universidad Técnica Nacional",
            period: "Enero 2022 – Mayo 2024",
        },
        {
            title: "Diploma Técnico en Contabilidad",
            institution: "Colegio Técnico Profesional de Puntarenas",
            period: "Enero 2019 – Diciembre 2021",
        },
    ];

    const certificates = [
        {
            title: "CCNAv7 III TI 3-2023 - G",
            issuer: "Cisco",
            imageUrl: "/api/placeholder/400/300",
        },
        {
            title: "CCNAv7 II TI 2-2023 - F",
            issuer: "Cisco",
            imageUrl: "/api/placeholder/400/300",
        },
        {
            title: "CCNAv7 I TI 1-2023 - A",
            issuer: "Cisco",
            imageUrl: "/api/placeholder/400/300",
        },
    ];

    return (
        <div className="bg-gray-900 text-green-300 min-h-screen">
            <nav className="bg-gray-800 p-4 sticky top-0 z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Emmanuel Rodríguez</h1>
                    <div className="hidden md:flex space-x-4">
                        <a href="#about" className="hover:text-green-500">Sobre mí</a>
                        <a href="#skills" className="hover:text-green-500">Habilidades</a>
                        <a href="#projects" className="hover:text-green-500">Proyectos</a>
                        <a href="#education" className="hover:text-green-500">Educación</a>
                        <a href="#certificates" className="hover:text-green-500">Certificados</a>
                        <a href="#contact" className="hover:text-green-500">Contacto</a>
                    </div>
                    <button onClick={toggleMenu} className="md:hidden">
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 p-4">
                    <a href="#about" className="block py-2 hover:text-green-500">Sobre mí</a>
                    <a href="#skills" className="block py-2 hover:text-green-500">Habilidades</a>
                    <a href="#projects" className="block py-2 hover:text-green-500">Proyectos</a>
                    <a href="#education" className="block py-2 hover:text-green-500">Educación</a>
                    <a href="#certificates" className="block py-2 hover:text-green-500">Certificados</a>
                    <a href="#contact" className="block py-2 hover:text-green-500">Contacto</a>
                </div>
            )}

            <main className="container mx-auto p-4 max-w-4xl">
                <section id="about" className="my-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
                    <p className="text-green-200">
                        Soy un estudiante de Ingeniería en Tecnologías de la Información con enfoque en desarrollo web full-stack.
                        Me caracterizo por mi atención al detalle y enfoque analítico en la resolución de problemas.
                    </p>
                </section>

                <section id="skills" className="my-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Habilidades Técnicas</h2>
                    {Object.entries(technologiesByCategory).map(([category, technologies]) => (
                        <TechCategory key={category} category={category} technologies={technologies} />
                    ))}
                </section>

                <section id="projects" className="my-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Proyectos Destacados</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </section>

                <section id="education" className="my-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Educación</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {education.map((edu, index) => (
                            <EducationCard key={index} {...edu} />
                        ))}
                    </div>
                </section>

                <section id="certificates" className="my-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Certificados</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((cert, index) => (
                            <CertificateCard key={index} {...cert} />
                        ))}
                    </div>
                </section>

                <section id="contact" className="my-12 text-center">
                    <h2 className="text-3xl font-bold mb-6">Contacto</h2>
                    <div className="flex flex-col items-center space-y-2">
                        <a href="tel:+50672149100" className="flex items-center text-green-200 hover:text-green-500">
                            <Phone className="mr-2" /> (+506) 72149100
                        </a>
                        <a href="mailto:emmanuelrsolano27@gmail.com" className="flex items-center text-green-200 hover:text-green-500">
                            <Mail className="mr-2" /> emmanuelrsolano27@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/emmanuel-rodríguez-solano-98961a2ba" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-200 hover:text-green-500">
                            <Linkedin className="mr-2" /> LinkedIn
                        </a>
                        <a href="https://github.com/Remma27" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-200 hover:text-green-500">
                            <Github className="mr-2" /> GitHub
                        </a>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-center p-4">
                <p>&copy; 2024 Emmanuel Rodríguez Solano. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Portfolio;