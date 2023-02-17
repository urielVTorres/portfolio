
export const topBarInfo : {language: string, buttons: string[]}[] = [
    {
        language: "Español",
        buttons: ["Sobre Mí", "Habilidades", "Proyectos", "Contacto", "CV"]
    },
    {
        language: "English",
        buttons:["About Me", "Skills", "Projects", "Contact Me", "CV"]
    }

]

export const AboutMeInfo : {language: string, greeting: string, about: string}[] = [
    {
        language: "Español",
        greeting: "Hola, me llamo Uriel Vargas. Un plcer conocerte.",
        about: "Soy un ingeniero en sistemas computacionales con la capacidd y la ambición para cambiar el mundo."
    },
    {
        language: "English",
        greeting: "Hey! My name is Uriel Vargas. Nice to meet you!",
        about: "I'm a computer systems engineer (in process) with the ambition and ability to change the world."
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
                description: "El diseño es el primer paso para crear cualquier página web, y es donde puedo dar rienda suelta a la imaginación."    
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
            "JavaScript", "TypeScript", "HTML", "CSS", "SASS", "Node.js", "Tailwind", "MongoDB", "React.js", "Vue.js", "Express.js", "Next.js", "JWT", "MySQL", "Java", "C#", "C++", "C", "Python", "Git", "Github","Firebase"
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
            "JavaScript", "TypeScript", "HTML", "CSS", "SASS", "Node.js", "Tailwind", "MongoDB", "React.js", "Vue.js", "Express.js", "Next.js", "JWT", "MySQL", "Java", "C#", "C++", "C", "Python", "Git", "Github","Firebase"
        ]
    }
]