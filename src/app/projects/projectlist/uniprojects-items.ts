import { ProjectItem } from './project-item';

export const UNIPROJECTS: ProjectItem[] = [
    {
        name: 'Romeocito',
        status: 'Completed',
        description:
        "There were only two Braille printers in the Philippines being shared by the entire blind community and their costs ranges from 250,000.00 Pesos up to 1 Million pesos. In partnership with the Non-profit Organization, Resources of the Blind Inc., I, together with my undergrad thesis team (@mdgman, @sethjuriste, @rbtabor), built a low-cost braille printer with the goal of enabling households with blind individuals to have a very cheap alternative. Romeocito prints far slower than the expensive ones, but the idea of printing you're own braille book, reading materials or homework at the comforts of your home never really existed on the blind community before, we thought that it's very good tradeoff and considering the cost of building the entire working protoype only cost us around 15,000 pesos. In order to build Romeocito we had to redesign almost every aspect of it's industrial counterparts, most notably on how the way it actually marks Braille symbols on a piece of paper. We developed an algorithm that will enable us to repurpose an old printer housing to print Braille in the most efficient manner. Romeocito is plug-and-play and works like a regular printer, using it's accompanying Word Editor desktop application users can encode and print their own documents directly. Romeocito also has a bluetooth interface that enables users to print documents or perform test prints, using their own android phones as well, via the Romeocito android application. Romeocito was named after it's cheapest industrial conterpart: Romeo.",
        image: require("../../../../public/images/romeocito.png"),
        lang: ['Java', 'Electronics', 'Android', 'Micro-controller'],
        awards: ['2nd Best Design Project 2014', 'Ideaspace 2014 Qualifier']
    },
    {
        name: 'Anjuli',
        status: 'Completed',
        description:
        "Anjuli is catering website, as well as an accompanying CMS for an actual client as a requirement of the partial fulfillment System Analysis and Design course under web development and deployment. Under the said course, we are tasked to find and developed a web application for a client business by analysing and improving their current processes.",
        image: require("../../../../public/images/anjuli.png"),
        lang: ['HTML', 'Javascript', 'JQuery', 'CSS'],
    },
    {
        name: 'LineBot',
        status: 'Completed',
        description:
        "A Line sensing robot as part of partial fulfilment of the course Microprocessors and Microntrollers under the Computer Engineering Curriculla of my school. We used a line sensor, some motor controllers, microcontrollers, some DC motors, wires, zip ties, etc..",
        image: require("../../../../public/images/linebot.png"),
        lang: ['Electronics', 'Micro-controller'],
    },
    {
        name: 'Kirkos',
        status: 'Completed',
        description:
        "Another line-sensing Sumobot created for the Annual Sumobot Robotics Competition 2014 where I competed as a school representative. Given some weight constraints and time as well (I was notified that I was about to compete fairly late.) I designed a circular sumobot with improvised sensors that is programmed to out maneuver enemy robots. I figured, if you can't win by force (due to lack of high-performance motors), you should try outsmarting it. This is probably one of my finest work, being able to come up and design something that is novel yet utilizes it's form as function on limited resources, is something I consider nothing short but an achievement. Even though it didn't win, it faired better than expected and defeated its oponnents and was able to reach the semi-finals considering the circumstances.",
        image: require("../../../../public/images/kirkos.png"),
        lang: ['Electronics', 'Arduino'],
        awards: ['Sumobot Robotics Competition 2014 School Representative']
    },
    {
        name: 'Droiduino',
        status: 'Completed',
        description:
        "Droiduino is an android-controlled via bluetooth racebot built for the Annual Computer Engineering Robotics Competition. What sets Droiduino from the other competing racebots of its time was how I designed the accompanying android-controller application. It uses an intuitive trackball-like interface instead of a button-centric one to control the racebot movements. My application uses a custom encoding that relays all four direction parameters on a single byte, in this way the response type is not only fast, but also, droiduino can receive two direction parameters at once giving it a faster turning velocity and enables it to travel in a diagonal way very seamlessly. Unlike its button-type competitors which you have to mash two buttons to achieve the same results.",
        image: require("../../../../public/images/droiduino.png"),
        lang: ['Electronics', 'Arduino', 'Android'],
        awards: ['CpE Robotics Competition 2013 Champion']
    },
    {
        name: 'Sinivo',
        status: 'Completed',
        description:
        "An anagram of the Latin word 'Inviso' which means, to look at or to watch. Sinivo is client and a server desktop application that logs class attendance of students and faculty instructors using RFID technology. The server application is intended to be used by the department chair to assign and add course loads to faculty instructors while the client application is used by the faculty instructors to enable the students to tap their RFIDs on a specific time window for each class. This project was done in partial fulfillment of the course Software Engineering as part of the Bachelor of Science in Computer Engineering Curricula.",
        image: require("../../../../public/images/sinivo.png"),
        lang: ['Java', 'Electronics'],
    },
    {
        name: 'Somlif!q',
        status: 'Discontinued',
        description:
        "Somlif!q stands for, 'Something like Facebook, but not quite'. It's a gamified social networking site that influences students on different courses and programs to collaborate on any projects that they would like. Students earn points on skills (Programming, Electronics, Soldering, etc) they used on completing a collaborative project. These points will unlock certain titles such as IT ninja, Solder Bender, R0b0warrior, etc., that will serve as badges visible on a users profile.",
        image: require("../../../../public/images/somlifiq.png"),
        lang: ['HTML', 'Javascript', 'JQuery', 'CSS'],
    },
]