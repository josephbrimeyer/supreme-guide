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
    'I am a Full Stack Web Developer with a background in operations managment, history, and art.  I apply critical thinking skills, a tireless work ethic, and strong leadership qualities to all of my work.',
  paragraphTwo:
    'I have a passion for lifelong learning and the satisfaction that comes from solving complex problems.  I am currently working for a startup with a team of developers and designers creating web applications.',
  paragraphThree:
    'When I am not coding, I can be found on a Pacific Northwest trail, fishing, or coaching basketball.',
  resume: 'https://drive.google.com/file/d/1MmXdnUucysUwQL0xnVON5llGqOImC93G/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'parti-app.PNG',
    title: 'Parti-Greetings',
    info:
      'Parti provides a new way to digitally celebrate events by creating digital greeting cards.',
    info2:
      'Built with ReactJS, HTML, CSS, JavaScript, Bootstrap, Express, Node.js, API, Passport, Facebook OAuth, Google OAuth, Cloudinary, Draft.js, EmailJS, Heroku, and GitHub.',
    url: 'https://floating-ocean-70452.herokuapp.com/',
    repo: 'https://github.com/MVP-Marketplace/Parti-App',
  },
  {
    id: nanoid(),
    img: 'find-next-gig.png',
    title: 'Find-Next-Gig',
    info: 'A site for locating upcoming concerts by band or artist',
    info2: 'Built with HTML, CSS, JavaScript, jQuery, API, Material UI, and GitHub.',
    url: 'https://merkraith.github.io/Band-Tour-Manager/',
    repo: 'https://github.com/Merkraith/Band-Tour-Manager',
  },
  {
    id: nanoid(),
    img: 'CineMentality.png',
    title: 'CineMentality',
    info: 'A site to search for movies that may contain sensitive content.',
    info2: 'Built with HTML, CSS, JavaScript, MySQL, Passport, and Handlebars.',
    url: 'https://young-reef-08407.herokuapp.com/',
    repo: 'https://github.com/josephbrimeyer/CineMentality', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fitness-tracker.PNG',
    title: 'Fitness-Tracker',
    info:
      'Fitness-Tracker is an application that allows the user to enter and track workout details.',
    info2: 'Built with HTML, CSS, JavaScript, Express, Node, MongoDB, and MongoDB Atlas.',
    url: 'https://morning-lowlands-25850.herokuapp.com/',
    repo: 'https://github.com/josephbrimeyer/fitness-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'burger-time.PNG',
    title: 'Burger-Time',
    info: 'An MVC application that allows users to create, consume, crave, and delete burgers.',
    info2: 'Built with MySQL, Node, Express, Handlebars, JavaScript, Bootstrap, HTML, and CSS.',
    url: 'https://sheltered-bayou-56466.herokuapp.com/',
    repo: 'https://github.com/josephbrimeyer/burger-time',
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
      'Weather-Dashboard is an application that that allows the user to search for weather conditions by city or zip code.',
    info2: 'Built with HTML, CSS, JavaScript, jQuery, and Open Weather API.',
    url: 'https://josephbrimeyer.github.io/weather-dashboard/',
    repo: 'https://github.com/josephbrimeyer/weather-dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'password-generator.png',
    title: 'Password-Generator',
    info: 'This application will generate a random password based on user-selected criteria.',
    info2: 'Built with JavaScript, HTML, and CSS.',
    url: 'https://josephbrimeyer.github.io/password-generator/',
    repo: 'https://github.com/josephbrimeyer/password-generator',
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
