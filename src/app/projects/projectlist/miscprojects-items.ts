import { ProjectItem } from './project-item';

export const MISCPROJECTS: ProjectItem[] = [
     {
        name: 'Chronocross',
        status: 'In Progress',
        description:
        "Context-switching  is one of those annoying pet peeve I have from work, one of the notorius culprit is the daily logging of work. That is why I made Chronocross. It's a time-management desktop application that I wrote integrated with a pomodoro, and reports generation. Basically, it's a to-do app but specialized for my personal workflow.",
        image: 'assets/images/chronocross.png',
        lang: ['Angular2', 'Electron', 'Javascript', 'Typescript', 'HTML', 'CSS'],
        repo: 'https://github.com/josephharveyangeles/chronocross'
    },
    {
        name: 'swRtcheIoo',
        status: 'Completed',
        description:
        "Ever experienced that one cold night and you want to turn off the fan but you're too lazy to get up because the bed is so comfy? Yea, That's why I built swRctherIoo. The name is a pun, the letters 'I' and 'R' are switched from the word switcheroo, because it's an IR controlled switch box. So I could control any appliance I plug into this box using an IR remote. Too hot? switch the fan. Charge the phone? Going out? Need to turn off all the appliance in the room? No problem. This thing is a life-saver.",
        image: 'assets/images/swrtcheioo.png',
        lang: ['Electronics', 'Arduino'],
        repo: 'https://github.com/josephharveyangeles/swRtcherIoo'
    },
    {
        name: 'TheBeaconing',
        status: 'Completed',
        description:
        'I was able to get my hands on some BLE (Bluetooth Low-Energy) iBeacons. This simple android application is an iBeacon detector that logs and determine nearby iBeacons.',
        image: 'assets/images/thebeaconing.png',
        lang: ['Android'],
    },
    {
        name: 'PrjRiceMill',
        status: 'Completed',
        description:
        "I had a friend who requested me to automate and add some features on a rice-milling machine. I took up the challenge and made this one. It's an electronic device that you'll connect on a Rice-Milling machine to monitor it's operation. You can turn off and monitor the machine using the android application I designed that goes along with it. It was a fun little weekend project.",
        image: 'assets/images/ricemill.png',
        lang: ['Electronics','Android', 'Micro-controller', 'Arduino'],
    },
    {
        name: 'PingPonger',
        status: 'Completed',
        description:
        "I had nothing to do one afternoon and I tried writing my own PingPong application using Java. I was just starting out my work as a Front-end UI Java Developer and this was a fun little exercise for my coding muscles.",
        image: 'assets/images/pingponger.png',
        lang: ['Java'],
        repo: 'https://github.com/josephharveyangeles/PingPonger'
    },
    {
        name: 'SudokuSolver',
        status: 'Completed',
        description:
        "Another fun little project for a nice afternoon. This time, I tried writing a program that can solve a standard 9x9 sudoko puzzle. It's a stack-state based algorithm that I developed that will solve all possible solutions on any given 9x9 sudoko problem.",
        image: 'assets/images/sudoku.png',
        lang: ['Java'],
        repo: 'https://github.com/josephharveyangeles/SudokuSolver'
    },
    {
        name: 'BtQuerier',
        status: 'Completed',
        description:
        "I'm always working on bluetooth when I was a student. This is just a simple bluetooth pinger application that I use to check connection status of bluetooth devices.",
        image: 'assets/images/btquerier.png',
        lang: ['Android'],
    },
     {
        name: 'GhostDrive',
        status: 'Completed',
        description:
        "Probably one of first useful projects that I made when I was just learning my ropes as a programmer. I was inspired by the 2007 Chuck Series 8-bit interfaces. It's a directory locking executable that will hides a directory that you can only unhide again by answering some riddles and by answering the correct random pattern-based passcode. It's one of those projects that made me confident in writing C programs.",
        image: 'assets/images/ghostdrive.png',
        lang: ['C'],
    },
    {
        name: 'Kill The Beast',
        status: 'Completed',
        description:
        "A simple text-based card quessing game I wrote when I was trying to learn bash scripting as part of a Machine Problem. I figured it's a good way to glue all those simple bash scripting things I learned altogether.",
        image: 'assets/images/killthebeast.png',
        lang: ['bash'],
        repo: 'https://github.com/josephharveyangeles/killthebeast'
    },
    {
        name: 'vNote',
        status: 'Completed',
        description:
        "I wrote my own version of Notepad but with a twist -- an autoback-up and an autorecover functionality. This also serves as practice for working on Java's Swing UI API. Complete with Menubars File and Edit functionalities.",
        image: 'assets/images/vnote.png',
        lang: ['Java'],
        repo: 'https://github.com/josephharveyangeles/vnote'
    },
    {
        name: 'Silica',
        status: 'Completed',
        description:
        "This a simple brain-trainer I made in C for those little breaks and down times. It's a quizzer for basic arithmetic operations. It also has base-two exponents because I was studying computer networks that time as well, I wanted to train myself to subnet faster.",
        image: 'assets/images/silica.png',
        lang: ['C'],
        repo: 'https://github.com/josephharveyangeles/Silica'
    },
    {
        name: 'Sigma Prompt: Asskit',
        status: 'Completed',
        description:
        "Assembly language toolkit. I wrote this litte tool to help me in my assembly class during college. Hextables, Hexcalculators, ASCII conversion, etc, all packed into one little application.",
        image: 'assets/images/asskit.png',
        lang: ['C'],
        repo: 'https://github.com/josephharveyangeles/sigmaprompt'
    },
    {
        name: 'Smartac',
        status: 'Completed',
        description:
        "This is the first project I made after I realized that computer science is what I like to do in life. It's a simple tictactoe game that I wrote after reading my first book in C. You'll play against my code, that ensures that almost any match would end in player's defeat or draw.",
        image: 'assets/images/tictactoe.png',
        lang: ['C'],
        repo: 'https://github.com/josephharveyangeles/smartac'
    },
    {
        name: 'LEDLamp',
        status: 'Completed',
        description:
        "If tictactoe was the my first simple software project. This one is my the first hardware hacking project. It's an LED lamp that I hooked up on the computer speakers that reacts and lights up along with the signals coming off the speakers.",
        image: 'assets/images/ledlamp.png',
        lang: ['Electronics'],
    },
]
