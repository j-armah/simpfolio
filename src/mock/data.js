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
  subtitle: ' a Full Stack Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Fullstack software engineer with a passion for technical problem solving. My background and experience in economics and management gives me a knack for finding solutions by analyzing problems and breaking them down into smaller pieces to logically find the best solutions. Along with my technical background my personal hobbies also bring a degree of creativity in finding solutions, allowing me to both think in and outside the box when discovering solutions. ',
  paragraphThree: 'Skills: React, Javascript, Ruby, Rails, Postgres, Python',
  paragraphTwo: 'I love problem solving, the bigger and harder the problem the better. The satisfaction from discovering an optimal solution to a problem is one of the best feelings.  ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lfg.png',
    title: 'LFG',
    info: 'LFG or Looking for Game is a React app that allows users to connect and find multiplayer games to play together',
    info2: 'React, Rails, Material-UI',
    url: 'https://lfg-beta.netlify.app/',
    repo: 'https://github.com/j-armah/react-lfg', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gamesrx.png',
    title: 'GamesRx',
    info: 'GamesRx is a React app that allows users to search and review games',
    info2: 'React, Rails',
    url: 'https://gamesrx.netlify.app/',
    repo: 'https://github.com/j-armah/react-videogame-reviewer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'flixfix.png',
    title: 'FlixFix',
    info: 'An IMDB Lite type app that allows users to explore and review movies',
    info2: 'JavaScript, Rails',
    url: 'https://flixfix.netlify.app/',
    repo: 'https://github.com/j-armah/movielist-js-frontend', // if no repo, the button will not show up
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
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
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
