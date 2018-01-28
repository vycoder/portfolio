export const Profession = {
  dayDusk: 'Software Developer',
  night: 'Asleep',
  dawn: 'R&D Engineer',
  end: 'Dead x-X'
}

export const Home = {
  introduction: "I am a software developer based in Quezon City, Philippines. I have an appetite for learning and a passion for creating software applications that help make human lives a little bit easier.",
  manifesto: "I think that creating computer programs is a discipline of both Science and Art mungled together in perfect harmony. Building user-oriented software application is more than that though, It's a mixture of techninal excellence and two-way communication between the client and the engineer, and I always strive to deliver both.",
  devlabsDesc: "Devlabs is this little start-up thing that I created together with some college buddies. Our aim is to provide a pragmatic approach to learn software programming, we want to make computer science as mainstream as possible while also making use of those knowledge to provide software services. It's a win-win situation. Please support us!"
}

export const Skills = [
  {
    name: 'Python',
    color: 'green darken-2'
  },
  {
    name: 'Java',
    color: 'light-blue darken-4'
  },
  {
    name: 'Javascript',
    color: 'yellow darken-2'
  },
  {
    name: 'Typescript',
    color: 'indigo darken-4'
  },
  {
    name: 'Jquery',
    color: 'blue darken-1'
  },
  {
    name: 'AngularJS',
    color: 'red darken-1'
  },
  {
    name: 'Angular',
    color: 'deep-orange darken-4'
  },
  {
    name: 'Vue',
    color: 'light-green darken-2'
  },
  {
    name: 'Electron',
    color: 'light-blue darken-1'
  },
  {
    name: 'HTML',
    color: 'orange darken-4'
  },
  {
    name: 'CSS',
    color: 'blue darken-4'
  },
  {
    name: 'C',
    color: 'cyan darken-4'
  },
  {
    name: 'C#',
    color: 'teal darken-4'
  },
  {
    name: 'Bash',
    color: 'orange darken-2'
  },
  {
    name: 'Android',
    color: 'green darken-4'
  },
  {
    name: 'OOP',
    color: 'amber darken-4'
  },
  {
    name: 'TDD',
    color: 'orange darken-2'
  },
  {
    name: 'SOLID',
    color: 'brown darken-4'
  },
  {
    name: 'UI/UX',
    color: 'purple darken-2'
  },
  {
    name: 'Agile',
    color: 'pink darken-4'
  },
  {
    name: 'Windows',
    color: 'lime darken-2'
  },
  {
    name: 'Linux',
    color: 'lime darken-4'
  },
  {
    name: 'Electronics',
    color: 'green darken-3'
  },
  {
    name: 'Microcontroller',
    color: 'light-green darken-2'
  },
  {
    name: 'Arduino',
    color: 'green darken-1'
  },
  {
    name: 'RaspberryPi',
    color: 'pink darken-2'
  },
  {
    name: 'Embedded-C',
    color: 'red darken-3'
  },
  {
    name: 'Git/SVN',
    color: 'orange'
  },
  {
    name: 'AWS',
    color: 'yellow darken-4'
  },
  {
    name: 'Jenkins',
    color: 'blue darken-4'
  },
  {
    name: 'Adobe Flash',
    color: 'light-blue darken-1'
  }
]

export const Stats = {
  codingActivity: {
    link: "https://wakatime.com/share/@yev/bfb8f216-9d87-4e78-9dd4-9c98409f8dcc.svg",
    description: "I sure do love coding. Next to memes and annoying my cat, writing software is one of my hobbies. Well, not actually. At most it's writing pieces of code using whatever technology or language I fancy at the moment that may or may not turn out as an actual useful software. I code even on weekends, it's a lifestyle, really. Does the chart reflect that? If not, just pretend I didn't say anything."
  },
  codingLanguages: {
    link: "https://wakatime.com/share/@yev/c53f27c3-1807-4572-91d3-86b88e8f3000.svg",
    description: "If you like learning, software development is one of those stuff that you could pick up that can possibly satiate that hungry jello inside your skull's appetite. There's really just so much to do, new things to discover, new things to try, new things to build, tests the limits of your imagination and make something people use. Having an idea inside your head then successfully implementing it using your own fingertips, you now live on that point in time where it's possible. Exploit it."
  }
}

export const ContactLinks = {
  description: "If you have an awesome idea, or you need help with a project, think there's something I can help you with, or you just want to say 'hi', feel free to get in touch.",
  email: 'josephharveyangeles@gmail.com',
  twitter: 'https://twitter.com/yev',
  linkedIn: 'https://www.linkedin.com/in/josephharveyangeles',
  github: 'https://github.com/josephharveyangeles',
  wakatime: 'https://wakatime.com/@yev',
  go: (link) => {
    window.open(link,'_blank')
  },
  mailMe: () => {
    window.location = "mailto:" + this.email
  }
}