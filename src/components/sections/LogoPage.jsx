// import React from 'react'
// import LogoLoop from './LogoLoop'
// import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';



// const techLogos = [
//     { node: <SiReact />, title: "React", href: "https://react.dev" },
//     { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//     { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//     { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
// ];

// function LogoPage() {
//     return (
//         <section id="logo-page" className="py-20 relative overflow-hidden">
//             <LogoLoop
//                 logos={techLogos}
//                 speed={30}
//                 direction="left"
//                 logoHeight={48}
//                 gap={40}
//                 hoverSpeed={0}
//                 scaleOnHover
//                 fadeOut
//                 fadeOutColor="#ffffff"
//                 ariaLabel="Technology partners"
//             />
//             <LogoLoop
//                 logos={techLogos}
//                 speed={30}
//                 direction="right"
//                 logoHeight={48}
//                 gap={40}
//                 hoverSpeed={0}
//                 scaleOnHover
//                 fadeOut
//                 fadeOutColor="#ffffff"
//                 ariaLabel="Technology partners"
//             />
//             <LogoLoop
//                 logos={techLogos}
//                 speed={30}
//                 direction="left"
//                 logoHeight={48}
//                 gap={40}
//                 hoverSpeed={0}
//                 scaleOnHover
//                 fadeOut
//                 fadeOutColor="#ffffff"
//                 ariaLabel="Technology partners"
//             />
//         </section>
//     )
// }

// export default LogoPage





import React from 'react'
import LogoLoop from '../ui/LogoUi/LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

function LogoPage() {
    return (
        <section 
            id="logo-page" 
            className="py-20 overflow-hidden bg-white rounded-b-[50px]  pb-32 relative z-10"
        >
            <LogoLoop 
                logos={techLogos}
                speed={30}
                direction="left"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />
            <LogoLoop
                logos={techLogos}
                speed={30}
                direction="right"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />
            <LogoLoop
                logos={techLogos}
                speed={30}
                direction="left"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />
        </section>
    )
}

export default LogoPage