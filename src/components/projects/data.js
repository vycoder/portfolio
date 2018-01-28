const WORKPROJECTS = [
{
  name: 'Nokia',
  status: 'Completed',
  description:
  "I started working with Nokia on September 2014, building and maintaining different projects that supports and/or creates different technologies on the Mobile Networks and Communications industry. I mainly build desktop and web applications using different techonologies and languages on an Agile Scrum software development methodology. Oh and yeah, Nokia's business doesn't only revolve around making phones, they mostly deal with the whole Mobile Communications technologies, Base Transceiver Stations, 5G, and stuff. Just thought I had to lay it here. I once thought the same too.",
  image: 'nokia.png',
  skills: [
    'Java',
    'Html',
    'Angular',
    'Typescript',
    'Javascript',
    'Jquery',
    'CSS'
  ],
},
{
  name: 'DevLabs',
  status: 'In Progress',
  description: "DevLaboratories is this little start-up project that I built together with my college mates, we're still in the incubation period but we're pretty much operational. Devlabs main goal was to make software development mainstream, we hope to train anyone willing the art and science of software programming, working on real-life projects for clients. Essentially, we're betting our careers and whatever little professional reputation we have to train aspiring developers and let them take real life dev work for real clients. We don't know if this will just eventually end up in flames but, learning, building stuff and teaching others has always been our passion, so might as well try do them all at once. Check us out on our official: <a href='devlaboratories.com' targe='_blank'>website</a>",
  image: 'devlabs.png',
  skills: [
    'Java',
    'Html',
    'Angular',
    'Typescript',
    'Javascript',
    'Jquery',
    'CSS',
    'Vue'
  ],
},
{
  name: 'OSysHub',
  status: 'Completed',
  description:
  "It started with a visit to our local church, Our Lady of the Most Holy Rosary Parish. I grew up in this church. That is why I was more than willing to accept their offer of creating a software system that they can use. Our Lady of the Most Holy Rosary Parish System Hub, or OSyshub for short, is a record-keeping native desktop application that is designed to handle payments, registration and renewal of various church-related processes from registration up to contract printing, for transactions like: wedding, columbary, and christening. It also has built in reminder notifications for overdue accounts.",
  image: 'osyshub.png',
  skills: ['Java'],
},
{
  name: 'Tessa',
  status: 'Completed',
  description:
  "There is this one recurring task at work that made me think: 'I am to lazy to do this, maybe I can do something about this.' And that's what I did, I automated it. It's a test case generation tool that I made for a specific task at work, that can also be used for any tautology statements. Tessa generates all possible test cases from the base case you will provide, all that is left is running them. It's a time saver. It was also chosen as a finalist for Nokia Manila TC Innovation 2016. I named it Tessa, short for Test Case but I replaced 'c' with an 's' because I want to annoy people with slight OCD, including myself.",
  image: 'tessa.png',
  skills: ['Java'],
  awards: ['Nokia Manila TC 2016 Innovation Finalist']
}]

const MISCPROJECTS = [
{
  name: 'Recigle',
  status: 'Completed',
  description:
  "Think google for recipes? That's it. Have you ever experience those times when you're home, alone, and it's raining, but you're hungry or you really just wanted to cook something but you don't want to trouble yourself of going outside? Wouldn't it be nice if you have an app where you could input all ingredients you have and it would spit out recipes that you could cook out of it? That's recigle. I also needed a project to experiment Angular on as well.",
  image: '/recigle.png',
  skills: ['Angular', 'Javascript', 'Typescript', 'HTML', 'CSS'],
  reponame: 'recigle'
},
{
   name: 'nReciquery',
   status: 'Completed',
   description:
   "nReciquery is the REST service being consumed by Recigle. I've built this using python django + djangorestframework. Like all my miscellaneous projects, I needed some project to experiment building python applications on, and this was the good start I could think. The filters are all handed on nReciquery. Since it's a REST service, I could build android apps and something like an embedded software on refrigerators that will all consume nReciquery. It's a good project to experiment REST services.",
   image: '/nreciquery.png',
   skills: ['Python'],
   reponame: 'nreciquery'
},
{
   name: 'Chronocross',
   status: 'In Progress',
   description:
   "Context-switching  is one of those annoying pet peeve I have from work, one of the notorius culprit is the daily logging of work. That is why I made Chronocross. It's a time-management desktop application that I wrote integrated with a pomodoro, and reports generation. Basically, it's a to-do app but specialized for my personal workflow.",
   image: '/chronocross.png',
   skills: ['Angular', 'Electron', 'Javascript', 'Typescript', 'HTML', 'CSS'],
   reponame: 'chronocross'
},
{
  name: 'PrjRiceMill',
  status: 'Completed',
  description:
  "I had a friend who requested me to automate and add some features on a rice-milling machine. I took up the challenge and made this one. It's an electronic device that you'll connect on a Rice-Milling machine to monitor it's operation. You can turn off and monitor the machine using the android application I designed that goes along with it. It was a fun little weekend project.",
  image: '/ricemill.png',
  skills: ['Android', 'Electronics', 'Microcontroller', 'Arduino'],
},
{
   name: 'swRtcheIoo',
   status: 'Completed',
   description:
   "Ever experienced that one cold night and you want to turn off the fan but you're too lazy to get up because the bed is so comfy? Yea, That's why I built swRctherIoo. The name is a pun, the letters 'I' and 'R' are switched from the word switcheroo, because it's an IR controlled switch box. So I could control any appliance I plug into this box using an IR remote. Too hot? switch the fan. Charge the phone? Going out? Need to turn off all the appliance in the room? No problem. This thing is a life-saver.",
   image: '/swrtcheioo.png',
   skills: ['Electronics', 'Arduino'],
   reponame: 'swRtcherIoo'
},
{
   name: 'GhostDrive',
   status: 'Completed',
   description:
   "Probably one of first useful projects that I made when I was just learning my ropes as a programmer. I was inspired by the NBC's 2007 Chuck Series 8-bit interfaces. It's a directory locking executable that will hide a directory that you can only unhide again by answering some riddles and by typing the correct random pattern-based passcode. It also takes note of the user and time of access and logs it on a log file. It's one of those projects that made me confident in writing C programs.",
   image: '/ghostdrive.png',
   skills: ['C'],
},
{
  name: 'BtQuerier',
  status: 'Completed',
  description:
  "I'm always working on bluetooth when I was a student. This is just a simple bluetooth pinger application that I use to check connection status of bluetooth devices.",
  image: '/btquerier.png',
  skills: ['Android'],
},
{
   name: 'TheBeaconing',
   status: 'Completed',
   description:
   'I was able to get my hands on some BLE (Bluetooth Low-Energy) iBeacons. This simple android application is an iBeacon detector that logs and determine nearby iBeacons.',
   image: '/thebeaconing.png',
   skills: ['Android'],
},
{
   name: 'PingPonger',
   status: 'Completed',
   description:
   "I had nothing to do one afternoon and I tried writing my own PingPong application using Java. I was just starting out my work as a Front-end UI Java Developer and this was a fun little exercise for my coding muscles.",
   image: '/pingponger.png',
   skills: ['Java'],
   reponame: 'PingPonger'
},
{
   name: 'SudokuSolver',
   status: 'Completed',
   description:
   "Another fun little project for a nice afternoon. This time, I tried writing a program that can solve a standard 9x9 sudoko puzzle. It's a stack-state based algorithm that I developed that will solve all possible solutions on any given 9x9 sudoko problem.",
   image: '/sudoku.png',
   skills: ['Java'],
   reponame: 'SudokuSolver'
},
{
   name: 'Kill The Beast',
   status: 'Completed',
   description:
   "A simple text-based card quessing game I wrote when I was trying to learn bash scripting as part of a Machine Problem. I figured it's a good way to glue all those simple bash scripting things I learned altogether.",
   image: '/killthebeast.png',
   skills: ['bash'],
   reponame: 'killthebeast'
},
{
   name: 'vNote',
   status: 'Completed',
   description:
   "I wrote my own version of Notepad but with a twist -- an autoback-up and an autorecover functionality. This also serves as practice for working on Java's Swing UI API. Complete with Menubars File and Edit functionalities.",
   image: '/vnote.png',
   skills: ['Java'],
   reponame: 'vnote'
},
{
   name: 'Silica',
   status: 'Completed',
   description:
   "This a simple brain-trainer I made in C for those little breaks and down times. It's a quizzer for basic arithmetic operations. It also has base-two exponents because I was studying computer networks that time as well, I wanted to train myself to subnet faster.",
   image: '/silica.png',
   skills: ['C'],
   reponame: 'Silica'
},
{
  name: 'Smartac',
  status: 'Completed',
  description:
  "This is the first project I made after I realized that computer science is what I like to do in life. It's a simple tictactoe game that I wrote after reading my first book in C. You'll play against my code, that ensures that almost any match would end in player's defeat or draw.",
  image: '/tictactoe.png',
  skills: ['C'],
  reponame: 'smartac'
},
{
   name: 'Sigma Prompt: Asskit',
   status: 'Completed',
   description:
   "Assembly skillsuage toolkit. I wrote this litte tool to help me in my assembly class during college. Hextables, Hexcalculators, ASCII conversion, etc, all packed into one little application.",
   image: '/asskit.png',
   skills: ['C'],
   reponame: 'sigmaprompt'
},
{
   name: 'LEDLamp',
   status: 'Completed',
   description:
   "If tictactoe was the my first simple software project. This one is my the first hardware hacking project. It's an LED lamp that I hooked up on the computer speakers that reacts and lights up along with the signals coming off the speakers.",
   image: '/ledlamp.png',
   skills: ['Electronics'],
},
]

const UNIPROJECTS = [
  {
    name: 'Romeocito',
    status: 'Completed',
    description:
    "There were only two Braille printers in the Philippines being shared by the entire blind community and their costs ranges from 250,000.00 Pesos up to 1 Million pesos. In partnership with the Non-profit Organization, Resources of the Blind Inc., I, together with my undergrad thesis team (@mdgman, @sethjuriste, @rbtabor), built a low-cost braille printer with the goal of enabling households with blind individuals to have a very cheap alternative. Romeocito prints far slower than the expensive ones, but the idea of printing you're own braille book, reading materials or homework at the comforts of your home never really existed on the blind community before, we thought that it's very good tradeoff and considering the cost of building the entire working protoype only cost us around 15,000 pesos. In order to build Romeocito we had to redesign almost every aspect of its industrial counterparts, most notably on how the way it actually marks Braille symbols on a piece of paper. We developed an algorithm that will enable us to re-purpose an old printer housing to print Braille in the most efficient manner. Romeocito is plug-and-play and works like a regular printer, using its accompanying Word Editor desktop application, users can encode and print their own documents directly. Romeocito also has a bluetooth interface that enables users to print documents or perform test prints, using their own android phones as well, via the Romeocito android application. Romeocito was named after it's cheapest industrial conterpart: Romeo.",
    image: 'romeocito.png',
    skills: ['Java', 'Android', 'Electronics', 'Microcontroller'],
    awards: ['2nd Best Design Project 2014', 'Ideaspace 2014 Qualifier', '1st Runner-Up ICpEP Engbensyon Project Design Exhibit 2014', '2nd Runner-Up TIP Science Fair Project 2014']
  },
  {
  name: 'Anjuli',
  status: 'Completed',
  description:
  "Anjuli is a catering website, with an accompanying CMS for an actual client as a requirement for the partial fulfillment of System Analysis and Design course under web development and deployment. Under the said course, we are tasked to find and develop a web application for a client business by analysing and improving their current processes.",
  image: 'anjuli.png',
  skills: ['HTML', 'Javascript', 'JQuery', 'CSS'],
},
{
  name: 'LineBot',
  status: 'Completed',
  description:
  "This is a line-sensing robot built for the partial fulfilment of the course Microprocessors and Microntrollers under the Computer Engineering Curriculla of my school. We used a line sensor, some motor controllers, microcontrollers, some DC motors, wires, zip ties, etc..",
  image: 'linebot.png',
  skills: ['Electronics', 'Microcontroller', 'Embedded-C'],
},
{
  name: 'Kirkos',
  status: 'Completed',
  description:
  "Another line-sensing Sumobot created for the Annual Sumobot Robotics Competition 2014 where I competed as a school representative. Given some weight constraints and time as well (I was notified that I was about to compete fairly late.) I designed a circular sumobot with improvised sensors that is programmed to out maneuver enemy robots. I figured, if you can't win by force (due to lack of high-performance motors), you should try outsmarting it. This is probably one of my finest work, being able to come up and design something that is novel yet utilizes its form as function on limited resources, is something I consider nothing short but an achievement. Even though it didn't win, it faired better than expected and defeated its oponnents and was able to reach the semi-finals considering the circumstances.",
  image: 'kirkos.png',
  skills: ['Electronics', 'Arduino'],
  awards: ['Sumobot Robotics Competition 2014 School Representative']
},
{
  name: 'Droiduino',
  status: 'Completed',
  description:
  "Droiduino is an android-controlled via bluetooth racebot built for the Annual Computer Engineering Robotics Competition. What sets Droiduino from other competing racebots of its time was how I designed the accompanying android controller application. It uses an intuitive trackball-like interface instead of a button-centric one to control the racebot movements. My application uses a custom encoding that relays all four direction parameters on a single byte, in this way the response type is not only fast, but also, droiduino can receive two direction parameters at once giving it a faster turning velocity and enables it to travel in a diagonal way very seamlessly. Unlike its button-type competitors which you have to mash two buttons to achieve the same results.",
  image: 'droiduino.png',
  skills: ['Android', 'Electronics', 'Arduino'],
  awards: ['CpE Robotics Competition 2013 Champion']
},
{
  name: 'Sinivo',
  status: 'Completed',
  description:
  "An anagram of the Latin word 'Inviso' which means, to look at or to watch. Sinivo is client and a server desktop application that logs class attendance of students and faculty instructors using RFID technology. The server application is intended to be used by the department chair to assign and add course loads to faculty instructors while the client application is used by the faculty instructors to enable the students to tap their RFIDs on a specific time window for each class. This project was done in partial fulfillment of the course Software Engineering as part of the Bachelor of Science in Computer Engineering Curricula.",
  image: 'sinivo.png',
  skills: ['Java', 'Electronics'],
},
{
  name: 'Somlif!q',
  status: 'Discontinued',
  description:
  "Somlif!q stands for, 'Something like Facebook, but not quite'. It's a gamified social networking site that influences students on different courses and programs to collaborate on any project that they would like. Students earn points on skills (Programming, Electronics, Soldering, etc) they used on completing a collaborative project. These points will unlock certain titles such as IT ninja, Solder Bender, R0b0warrior, etc., that will serve as badges visible on a users profile.",
  image: 'somlifiq.png',
  skills: ['HTML', 'Javascript', 'JQuery', 'CSS'],
},
]

export const ProjectsData = {
  work: WORKPROJECTS,
  misc: MISCPROJECTS,
  uni: UNIPROJECTS
}