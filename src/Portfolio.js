import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail, Phone, Github, ExternalLink, Download } from 'lucide-react';

const TechIcon = ({ name }) => {
    return (
        <div className="bg-gray-700 text-green-300 rounded-full px-3 py-1 text-sm">
            {name}
        </div>
    );
};

const TechCategory = ({ category, technologies }) => (
    <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{category}</h3>
        <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
                <TechIcon key={index} name={tech} />
            ))}
        </div>
    </div>
);

const ProjectCard = ({ title, description, technologies, projectUrl, videoUrl }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-green-200 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
                <TechIcon key={index} name={tech} />
            ))}
        </div>
        <div className="flex flex-wrap gap-2">
            <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
                Repositorio <ExternalLink className="ml-2 w-4 h-4" />
            </a>
            {videoUrl && (
                <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Video <ExternalLink className="ml-2 w-4 h-4" />
                </a>
            )}
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
            description: "Aplicación web para gestionar registros de apoyo al bienestar estudiantil.",
            technologies: ['Angular', 'Node.js', 'MySQL', 'Express.js'],
            projectUrl: "https://github.com/Remma27/StudentWelfareApp",
            videoUrl: "https://example.com/student-welfare-app-video",
        },
        {
            title: "Firebase Research Portal",
            description: "Portal web para gestionar proyectos de investigación estudiantil usando Firebase.",
            technologies: ['Firebase', 'React', 'JavaScript'],
            projectUrl: "https://github.com/Remma27/FirebaseResearchPortal/tree/main",
            videoUrl: "https://example.com/firebase-research-portal-video",
        },
        {
            title: "Student Research Android",
            description: "Aplicación Android para gestionar proyectos de investigación estudiantil.",
            technologies: ['Android Studio', 'Kotlin', 'Firebase'],
            projectUrl: "https://github.com/Remma27/StudentResearchAndroid",
            videoUrl: "https://example.com/student-research-android-video",
        },
        {
            title: "Pokedex",
            description: "Aplicación móvil que simula una Pokedex para explorar información sobre Pokémon.",
            technologies: ['React Native', 'JavaScript', 'PokeAPI'],
            projectUrl: "https://github.com/Remma27/Pokedex",
        },
        {
            title: "Login React Native Firebase",
            description: "Sistema de autenticación en React Native utilizando Firebase.",
            technologies: ['React Native', 'Firebase', 'JavaScript'],
            projectUrl: "https://github.com/Remma27/LoginReactNativeFirebase",
        },
        {
            title: "GraphQL Job Listing Platform",
            description: "Solución de base de datos para gestionar un inventario digital de profesionales en la región del Pacífico de Costa Rica.",
            technologies: ['MongoDB', 'Apollo', 'GraphQL', 'Node.js'],
            projectUrl: "https://github.com/Remma27/GraphQLJobListingPlatform",
        },
        {
            title: "Job Search Platform",
            description: "Aplicación web con interfaces para solicitantes de empleo y empleadores. Incluye registro, gestión de perfiles, publicación de ofertas y búsqueda de trabajos o candidatos.",
            technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
            projectUrl: "https://github.com/Remma27/job-search-platform",
        },
        {
            title: "Graphic Designer Portfolio",
            description: "Portafolio web de una sola página para un diseñador gráfico con secciones como 'Acerca de', 'Proyectos', formulario de contacto y enlaces a redes sociales.",
            technologies: ['HTML', 'CSS', 'jQuery'],
            projectUrl: "https://github.com/Remma27/graphic-designer-portfolio",
        },
        {
            title: "Angular Rick and Morty App",
            description: "Aplicación web que utiliza la API de Rick and Morty para mostrar información sobre personajes, episodios y ubicaciones de la serie.",
            technologies: ['Angular', 'TypeScript', 'RxJS'],
            projectUrl: "https://github.com/Remma27/angular-rick-and-morty",
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
                    <p className="text-green-200 mb-4">
                        Soy un estudiante de Ingeniería en Tecnologías de la Información con enfoque en desarrollo web full-stack.
                        Me caracterizo por mi atención al detalle y enfoque analítico en la resolución de problemas.
                    </p>
                    <a
                        href="/path/to/your-cv.pdf"
                        download
                        className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                    >
                        Descargar CV <Download className="ml-2 w-4 h-4" />
                    </a>
                </section>

                <section id="skills" className="my-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Habilidades Técnicas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(technologiesByCategory).map(([category, technologies]) => (
                            <TechCategory key={category} category={category} technologies={technologies} />
                        ))}
                    </div>
                </section>

                <section id="soft-skills" className="my-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Habilidades Blandas</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="bg-gray-800 rounded-full px-4 py-2">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                <section id="projects" className="my-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Proyectos Destacados</h2>
                    <div className="grid md:grid-cols-2 gap-6">
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