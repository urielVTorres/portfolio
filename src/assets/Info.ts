
export const topBarInfo : {language: string, buttons: {text:string, value:string}[]}[] = [
    {
        language: "Español",
        buttons: [{text:"Sobre Mí",value:"about-me"}, {text:"Habilidades", value:"skills"}, {text:"Proyectos", value:"project"}, {text: "Contacto", value:"contact-me"}]
    },
    {
        language: "English",
        buttons:[{text:"About Me",value:"about-me"}, {text:"Skills", value:"skills"}, {text:"Projects", value:"project"}, {text: "Contact Me", value:"contact-me"}]
    }

]

export const AboutMeInfo : {language: string, greeting: string, about: string}[] = [
    {
        language: "Español",
        greeting: "Hola, me llamo Uriel Vargas.",
        about: "Ingeniero de software, trabajando en crear una mejor versión de mí mismo. Creo que la web es la plataforma del futuro. Amante de las ciencias y los lenguajes de programación. Hola mundo."
    },
    {
        language: "English",
        greeting: "Hey! My name is Uriel Vargas.",
        about: "Software engineer, enhancing myself for a better tomorrow. I think web is the platform of the future. Lover of science and programming languages. Hello World."
    }
]

interface ISkill {
    language: string,
    info: {
        title:string,
        description: string
    }[],
    tec: string[];
}

export const Skills : ISkill[] = [
    {
        language: "Español",
        info: [
            {
                title: "Diseñador Web",
                description: "El diseño es el primer paso para crear cualquier página web. Como Carl Sagan dijo alguna vez: La imaginación a menudo nos lleva a mundos que nunca existieron, pero sin ella no vamos a ninguna parte."    
            },
            {
                title: "Resolución de problemas",
                description: "Resolver problemas es lo mejor para mí, ya sean problemas durante el desarrollo web, de programación competitiva o problemas en la vida real. Para mí, no hay nada más estimulante que pensar en diferentes formas de resolver un acertijo"
            },
            {
                title: "Desarrollador Web",
                description: "Soy un desarrollador web full stack y he desarrollado algunos proyectos usando ReactJs (MERN) y VueJs."
            }
        ],
        tec: [
            "JavaScript", "TypeScript", "HTML", "CSS", "SASS", "Node.js", "Tailwind", "MongoDB", "React.js", "Vue.js", "Express.js", "Next.js", "JWT", "MySQL", "Java", "C#", "C/C++", "Python", "Git","Firebase"
        ]
    },
    {
        language: "English",
        info: [
            {
                title: "Web Design",
                description: "Design is the first step, the beggining of a new era. Like Carl Sagan once said: Imagination will often carry us to worlds that never were. But without it we go"    
            },
            {
                title: "Problem Solving",
                description: "Problem solving is the best part for me, whereas is while I'm developing a website, during competitive programing or in real life, I think theres nothing more fun and estimulant than discover new ways for solving a puzzle."
            },
            {
                title: "Web Developer",
                description: "I am a full stack web developer, and I have some projects I've been working on using mainly React.js (MERN) and Vue.js."
            }
        ],
        tec: [
            "JavaScript", "TypeScript", "HTML", "CSS", "SASS", "Node.js", "Tailwind", "MongoDB", "React.js", "Vue.js", "Express.js", "Next.js", "JWT", "MySQL", "Java", "C#", "C/C++", "Python", "Git","Firebase"
        ]
    }
]

export const ContactInfo : {linkedIn: string, phoneNumber: string, email: string} =  {
    linkedIn: "Marco Uriel Vargas Torres",
    phoneNumber: "5579873603",
    email: "m.urielv.torres@gmail.com"
}


interface IProjectsInfo {
    language: string,
    projects: {
        title: string,
        description: string,
        link: string,
        github:string,
        img: string
    }[]
}

export const ProjectsInfo : IProjectsInfo[] = [
    {
        language: "Español",
        projects: [
            {
                title: "Interpaty",
                description: "Un administrador de ventas desarrollado con MERN stack y tailwind para un café internet-papelería.",
                link: "https://interpaty-app.web.app/",
                github: "https://github.com/urielVTorres/interpaty",
                img: "/Images/interpaty.jpg"
            },
            {
                title: "Creador de horarios - ESCOM",
                description: "Crea horarios de la carrera de ingeniería en sistemas computacionales de ESCOM automáticamente.",
                link: "https://escom-horarios.web.app/",
                github: "https://github.com/urielVTorres/schedule-maker",
                img: "/Images/schedule-maker.jpg"
            },
            {
                title: "Agencia de viajes",
                description: "Página de agencia de viajes desarrollada para un curso de JS, usando node, express, axios, pug",
                link: "https://escom-horarios.web.app/",
                github: "https://github.com/urielVTorres/agenciadeViajesNode",
                img: "/Images/ajencia-viajes.jpg"
            },
            {
                title: "Cotizador de Prestamos",
                description: "Página creada con VITE Vue.js, cotiza prestamos.",
                link: "https://jade-dolphin-6d60af.netlify.app/",
                github: "https://github.com/urielVTorres/cotizador-prestamos",
                img: "/Images/cotizador-prestamos.jpg"
            },
            {
                title: "Buscador de Imagenes",
                description: "Buscador de imagenes usando JS vanilla, CSS, HTML, FetchAPI",
                link: "https://shiny-tanuki-169100.netlify.app/",
                github: "#",
                img: "/Images/buscador-imagenes.jpg"
            },
            {
                title: "Administrador de pacientes de veterinaria",
                description: "Agenda pacientes de veterinaria, autorización, signin y login usando JS vanilla, CSS, HTML, FetchAPI",
                link: "https://glittering-gnome-ef56f6.netlify.app/",
                github: "#",
                img: "/Images/admon-veterinaria.jpg"
            }
        ]
    },
    {
        language: "English",
        projects: [
            {
                title: "Interpaty",
                description: "Un administrador de ventas desarrollado con MERN stack y tailwind para un café internet-papelería.",
                link: "https://interpaty-app.web.app/",
                github: "https://github.com/urielVTorres/interpaty",
                img: "public/Images/interpaty.jpg"
            },
            {
                title: "Creador de horarios - ESCOM",
                description: "Crea horarios de la carrera de ingeniería en sistemas computacionales de ESCOM automáticamente.",
                link: "https://escom-horarios.web.app/",
                github: "https://github.com/urielVTorres/schedule-maker",
                img: "/Images/schedule-maker.jpg"
            },
            {
                title: "Agencia de viajes",
                description: "Página de agencia de viajes desarrollada para un curso de JS, usando node, express, axios, pug",
                link: "https://escom-horarios.web.app/",
                github: "https://github.com/urielVTorres/agenciadeViajesNode",
                img: "/Images/ajencia-viajes.jpg"
            },
            {
                title: "Cotizador de Prestamos",
                description: "Página creada con VITE Vue.js, cotiza prestamos.",
                link: "https://jade-dolphin-6d60af.netlify.app/",
                github: "https://github.com/urielVTorres/cotizador-prestamos",
                img: "/Images/cotizador-prestamos.jpg"
            },
            {
                title: "Buscador de Imagenes",
                description: "Buscador de imagenes usando JS vanilla, CSS, HTML, FetchAPI",
                link: "https://shiny-tanuki-169100.netlify.app/",
                github: "#",
                img: "/Images/buscador-imagenes.jpg"
            },
            {
                title: "Administrador de pacientes de veterinaria",
                description: "Agenda pacientes de veterinaria, autorización, signin y login usando JS vanilla, CSS, HTML, FetchAPI",
                link: "https://glittering-gnome-ef56f6.netlify.app/",
                github: "#",
                img: "/Images/admon-veterinaria.jpg"
            }
        ]
    }
]