import { ProjectItem } from './project-item';

export const MISCPROJECTS: ProjectItem[] = [
     {
        name: 'Chronocross',
        status: 'In Progress',
        description:
        "Context-switching  is one of those annoying pet peeve I have from work, one of the notorius culprit is the daily logging of work. That is why I made Chronocross. It's a time-management desktop application that I wrote integrated with a pomodoro, and reports generation. Basically, it's a to-do app but specialized for my personal workflow.",
        image: require("../../../../public/images/chronocross.png"),
        lang: ['Angular2', 'Electron', 'Javascript', 'HTML'],
        repo: "https://github.com/josephharveyangeles/chronocross"
    },
    {
        name: 'swRtcheIoo',
        status: 'Completed',
        description:
        "Ever experienced that one cold night and you want to turn off the fan but you're too lazy to get up because the bed is so comfy? Yea, That's why I built swRctherIoo. The name is a pun, the letters 'I' and 'R' are switched from the word switcheroo, because it's an IR controlled switch box. So I could control any appliance I plug into this box using an IR remote. Too hot? switch the fan. Charge the phone? Going out? Need to turn off all the appliance in the room? No problem. This thing is a life-saver.",
        image: require("../../../../public/images/swrtcheioo.png"),
        lang: ['Electronics', 'Arduino'],
    },
    {
        name: 'TheBeaconing',
        status: 'Completed',
        description:
        "I was able to get my hands on some BLE iBeacons. This simple android application is an iBeacon detector that logs and determine nearby iBeacons.",
        image: require("../../../../public/images/thebeaconing.png"),
        lang: ['Android'],
    },
    {
        name: 'PrjRiceMill',
        status: 'Completed',
        description:
        "I had a friend who requested me to automate and add some features on a rice-milling machine. I took up the challenge and made this one. It's an electronic device that you'll connect on a Rice-Milling machine to monitor it's operation. You can turn off and monitor the machine using the android application I designed that goes along with it. It was a fun little weekend project.",
        image: require("../../../../public/images/ricemill.png"),
        lang: ['Electronics','Android', 'Micro-controller', 'Arduino'],
    },
    {
        name: 'PingPonger',
        status: 'Completed',
        description:
        "I had nothing to do one afternoon and I tried writing my own PingPong application using Java. I was just starting out my work as a Front-end UI Java Developer and this was a fun little exercise for my coding muscles.",
        image: require("../../../../public/images/pingponger.png"),
        lang: ['Java'],
    },
    {
        name: 'SudokuSolver',
        status: 'Completed',
        description:
        "Another fun little project for a nice afternoon. This time, I tried writing a program that can solve a standard 9x9 sudoko puzzle. It's a stack-state based algorithm that I developed that will solve all possible solutions on any given 9x9 sudoko problem.",
        image: require("../../../../public/images/sudoku.png"),
        lang: ['Java'],
    },
    {
        name: 'BtQuerier',
        status: 'Completed',
        description:
        "I'm always working on bluetooth when I was a student. This is just a simple bluetooth pinger application that I use to check connection status of bluetooth devices.",
        image: require("../../../../public/images/btquerier.png"),
        lang: ['Android'],
    },
     {
        name: 'GhostDrive',
        status: 'Completed',
        description:
        "Probably one of first useful projects that I made when I was just learning my ropes as a programmer. I was inspired by the 2007 Chuck Series 8-bit interfaces. It's a directory locking executable that will hide a directory that you can only unhide again by answering some riddles and by answering the correct random pattern-based passcode. It's one of those projects that made me confident in writing C programs.",
        image: require("../../../../public/images/ghostdrive.png"),
        lang: ['C'],
    },
    {
        name: 'Silica',
        status: 'Completed',
        description:
        "This a simple brain-trainer I made in C for those little breaks and down times.",
        image: require("../../../../public/images/silica.png"),
        lang: ['C'],
    },
    {
        name: 'Sigma Prompt: Asskit',
        status: 'Completed',
        description:
        "Assembly language toolkit. I wrote this litte tool to help me in my assembly class during college. Hextables, Hexcalculators, ASCII conversion, etc, all packed into one little application.",
        image: require("../../../../public/images/asskit.png"),
        lang: ['C'],
    },
    {
        name: 'Smartac',
        status: 'Completed',
        description:
        "This is the first project I made after I realized that computer science is what I like to do in life. It's a simple tictactoe game that I wrote after reading my first book in C. You'll play against my code, that ensures that almost any match would end in player's defeat or draw.",
        image: require("../../../../public/images/tictactoe.png"),
        lang: ['C'],
    },
    {
        name: 'LEDLamp',
        status: 'Completed',
        description:
        "If tictactoe was the my first simple software project. This one is my the first hardware hacking project. It's an LED lamp that I hooked up on the computer speakers that reacts and lights up along with the signals coming off the speakers.",
        image: require("../../../../public/images/ledlamp.png"),
        lang: ['Electronics'],
    },
]