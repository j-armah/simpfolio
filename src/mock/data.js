import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jeremy', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jeremy',
  subtitle: 'Full Stack Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Fullstack software engineer with a passion for technical problem solving. My backgorund and experience in economics and management gives me a knack for finding solutions by analyzing problems and breaking them down into smaller pieces to logically find the best solutions. Along with my technical background my personal hobbies also bring a degree of creativity in finding solutions, allowing me to both think in and outside the box when discovering solutions. ',
  paragraphThree: 'Skills: React, Javascript, Ruby, Rails, Postgres, Python',
  paragraphTwo: 'I love problem solving, the bigger and harder the problem the better. The satisfaction from discovering an optimal solution to a problem is one of the best feelings.  ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jarmah241@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jeremy-armah/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/j-armah/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
