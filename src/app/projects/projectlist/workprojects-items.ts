import { ProjectItem } from './project-item';

export const WORKPROJECTS: ProjectItem[] = [
    {
        name: 'Nokia',
        status: 'In Progress',
        description:
        "I started working with Nokia on September 2014, building and maintaining different projects that supports and/or creates different technologies on the Mobile Networks and Communications industry. I mainly build desktop and web applications using different techonologies and languages on an Agile Scrum software development methodology. Oh and yeah, Nokia's business doesn't only revolve around making phones, they mostly deal with the whole Mobile Communications techonologies, Base Transceiver Stations, 5G, and stuff. Just thought I had to lay it here. I once thought the same too.",
        image: 'assets/images/nokia.png',
        lang: [
          'java',
          'html',
          'angular2',
          'typescript',
          'javascript',
          'jquery',
          'css'
        ],
    },
    {
        name: 'OSysHub',
        status: 'Completed',
        description:
        "It started with a visit to our local church, Our Lady of the Most Holy Rosary Parish. I grew up in this church. That is why I was more than willing to accept their offer of creating a software system that they can use. Our Lady of the Most Holy Rosary Parish System Hub, or OSyshub for short, is a record-keeping native desktop application that is designed to handle payments, registration and renewal of various church-related processes from registration up to contract printing, for transactions like: wedding, columbary, and christening. It also has built in reminder notifications for overdue accounts.",
        image: 'assets/images/osyshub.png',
        lang: ['Java'],
    },
    {
        name: 'Tessa',
        status: 'Completed',
        description:
        "There is this one recurring task at work that made me think: 'I am to lazy to do this, maybe I can do something about this.' And that's what I did, I automated it. It's a test case generation tool that I made for a specific task at work, that can also be used for any tautology statements. Tessa generates all possible test cases from the base case you will provide, all that is left is running them. It's a time saver. It was also chosen as a finalist for Nokia Manila TC Innovation 2016. I named it Tessa, short for Test Case but I replaced 'c' with an 's' because I want to annoy people with slight OCD, including myself.",
        image: 'assets/images/tessa.png',
        lang: ['Java'],
        awards: ['Nokia Manila TC 2016 Innovation Finalist']
    },
]
