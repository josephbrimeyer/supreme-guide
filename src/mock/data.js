import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Joe Brimeyer',
  subtitle: "I'm a Full Stack Web Developer.",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.JPG',
  paragraphOne:
    'I am a Full Stack Web Developer with a background in operations managment, history, and art.  I apply critical thinking, a tireless work ethic, and strong leadership qualities to my work.',
  paragraphTwo:
    'I have a passion for lifelong learning and the satisfaction that comes from solving complex problems.',
  paragraphThree:
    'When I am not coding, I can be found on a Pacific Northwest trail, fishing, or playing basketball.',
  resume: 'https://drive.google.com/file/d/1MmXdnUucysUwQL0xnVON5llGqOImC93G/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'CineMentality.png',
    title: 'CineMentality',
    info: 'A site to search for triggers in movies for those with mental health issues.',
    info2: 'Built with HTML, CSS, JavaScript, and Handlebars.',
    url: 'https://young-reef-08407.herokuapp.com/',
    repo: 'https://github.com/josephbrimeyer/CineMentality', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'note-taker2.png',
    title: 'Note-Taker',
    info: 'An app that allows users to take notes on their device with data persistence.',
    info2: 'Built with HTML, CSS, JavaScript, Express, and Node.',
    url: 'https://aqueous-inlet-00393.herokuapp.com/',
    repo: 'https://github.com/josephbrimeyer/note-taker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather-dashboard.png',
    title: 'Weather-Dashboard',
    info:
      'Weather-Dashboard is a weather application that that allows the user to search for the weather conditions of any city in the world.',
    info2: 'Built with HTML, CSS, JavaScript, jQuery, and Open Weather API.',
    url: 'https://josephbrimeyer.github.io/weather-dashboard/',
    repo: 'https://github.com/josephbrimeyer/weather-dashboard', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jbrimeyer@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/JosephBrimeyer',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/joe-brimeyer/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/josephbrimeyer',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
