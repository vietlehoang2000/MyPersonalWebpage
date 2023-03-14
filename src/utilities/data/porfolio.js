import Apple from '../image/apple.png';
import Iot from '../image/Iot.png';
import Coca from '../image/coca.png';
import Game from '../image/game.png';
import Zou from '../image/zou.png';
import Student from '../image/students.png';
import Inventory from '../image/inventory.png';
import Mamamsilk from '../image/mamasmilk.jpg'
import { DND, DND2, Apple1, Apple2, Apple3, Coca1, Coca2, Coca3, Mammas1, Mammas2, Mammas3, Mammas4, PeopleHealth1, PeopleHealth2, PeopleHealth3, PeopleHealth4, DashboardAerport, DashboardAerport2, Parkfree } from '../image'
const PorfolioItems = [
  {
    id: 'Melbourne Free Parking',
    name: 'Melbourne Free Parking',
    category: ['All', 'React'],
    brief: 'Melbourne CBD Free Parking is a serverless project helping Melburnians to find the closest free parking bay in Melbourne CBD',
    desc: {
      'Main objective': 'Melbourne CBD Free Parking is a serverless project helping Melburnians to find the closest free parking bay in the municipal of Melbourne CBD with the real-time data update every 2 minutes. You can also find the corresponding sign plates restrictions in each parking zone to find your needs. Hopefully, the app will be helpful for you and your friends.',
      'Technologies used': 'Typescript, Vite, ReactJS, Redux, Redux-logic, tailwind-css, Headless-ui, Axios',
      'Valuable outcome': '-Building customizable components with tailwind-css.\n-establishing a strong atomic design foundation and strategies for organizing and building design components.\n-Manipulate real-time API provided by VIC GOV.\n-Handle merging different REST API.\n-Experience responsive design across devices.\n-Design interface design on Figma.'
    },
    utilities: [Parkfree],
    image: Parkfree,
    link: 'https://parkfree.netlify.app/',
  },
  {
    id: 'DND Diary',
    name: 'Internal Diary App',
    category: ['All', 'Next'],
    brief: 'A diary app to share weekly knowledge between team members',
    desc: {
      'Main objective': 'Familiarize with new tech stack and develop a full stack web application.',
      'Technologies used': '-Front-end: Typescript, NextJs, Apollo-Client, Mantine\n-Back-end: GraphQl, NestJs, JWT, TypeOrm',
      'Valuable outcome': '-Experience with NextJs and NestJs tech stack.\n-Build and deploy a GraphQl server.\n-.\n-Handle merging different REST API.\n-Enhance problem-solving skills and ability to troubleshoot and debug code.'
    },
    utilities: [DND, DND2],
    image: DND,
  },
  {
    id: 'iot-connectivity-management',
    name: 'IoT Connectivity Management',
    category: ['All', 'React'],
    brief: 'A single-pane, top-down view of all your connected IoT devices',
    desc: {
      'Main objective': 'A single-pane, top-down view of all your connected IoT devices throughout their lifecycle, identify problems, and take actions automatically―vastly reducing the amount of time and resources needed to manage your device deployment.',
      'Team Size': '15',
      'Technologies used': '-Front-end: ReactJS, React-Router, Redux, Redux-logic, SASS\n-Back-end: NodeJS, ExpressJS, ExpressJWT',
      'Valuable outcome': '-Working with React.js, styled components.\n-Experienced with JavaScript (ES6) and Node.js.\n-Strengthen experience in HTML & CSS and across cross-browser/ device\n-Working on a project in development and deployment.\n-Using JIRA, Agile methodologies for management.\n-Experience with Git (Bitbucket, GitLab)\n-Experience in Figma for interface design'
    },
    utilities: [Iot, DashboardAerport, DashboardAerport2],
    image: Iot,
  },
  {
    id: 'apple-products',
    name: 'apple products',
    category: ['All', 'React'],
    brief: 'An online shopping site provides apple\'s products imitate experience of real users.',
    desc: {
      'Main objective': 'An online shopping site provides apple\'s products implement CRUD and JWT authentication.',
      'Key features': 'User authentication, log in, register,  price filter, searching key, pagination.',
      'Technologies used': 'RestApi, JWT authentication, Reactjs, NodeJs, JSON server, Redux, Redux-thunk, react-router, bootstrap, animate.',
      'Valuable outcome': 'Learning HTTP methods by REST API, protecting resources using JWT bearer token, implementing login and register user in the application.'
    },
    utilities: [Apple, Apple1, Apple2, Apple3],
    image: Apple,
    link: 'https://apple-product-vietlehoang2000.netlify.app/components/authentication/Authenticate',
  },
  {
    id: 'mammas-milk-project',
    name: 'Mammas milk project',
    category: ['All', 'UI', 'Wordpress'],
    brief: 'a WordPress website developed for  a sole proprietorship business in Mackay, Queensland.',
    desc: {
      'Main objective': 'Providing a WordPress website for  a sole proprietorship business in Mackay, Queensland.',
      'Key features': 'New brand guildline, rebuilding the old sites with Wordpress, implement new feature enhancing the business operation (online appointment, build in forms, mailing system, blogging etc).',
      'Technologies used': 'WordPress, Elementor pro, appropriate plugins (bookly, WP mail, WP form, WP vivid backup, etc)',
      'Valuable outcome': 'Gain experience working with  real world business, learn to develop, build and deploy a CMS site, research and test various plugins and templates.'
    },
    utilities: [Mammas1, Mammas2, Mammas3, Mammas4],
    image: Mamamsilk,
    link: 'https://test-mammasmilk.pantheonsite.io/',
  },
  {
    id: 'people-health-project',
    name: 'People health project',
    category: ['All', 'Vanilla', 'JQuerry'],
    brief: 'A dashboard site implemented Firebase database developed for a study case of medicines stock management',
    desc: {
      'Main objective': 'A dashboard site implemented Firebase database (Non-Sql) with CRUD abilities, the app is build to manage stock and sales for a small pharmacy store. Working in a group of 4 co-oporate both back-end and front-end',
      'Team size': 4,
      'Key features': 'authenticate users, show stocks, search by name, create, read, update, delete stocks on real time database.',
      'Technologies used': 'VannilaJs, Bootstrap, Express, Firebase, Firebase authentication.',
      'Valuable outcome': 'Corporate with back-end developer, implement real-time database by firebase, practice CRUD with REST api.'
    },
    utilities: [PeopleHealth1, PeopleHealth2, PeopleHealth3, PeopleHealth4],
    image: Inventory,
    link: 'https://mitp-project.herokuapp.com/index.html',
  },
  {
    id: 'cocacola-redesign',
    name: 'Cocacola redesign',
    category: ['All', 'Vanilla', 'JQuerry', 'UI'],
    brief: 'a vannilajs web page inspired by Cocacola',
    desc: {
      'Main objective': 'Redesign vietnam cocacola backward website, consolidate HTML & CSS knowledge, learn to use figma for mockup and prototype.',
      'Key features': 'provide a modern look and better user interface.',
      'Technologies used': 'Html5, Css, Javascript, Jquery, Figma.',
      'Valuable outcome': 'Plan idea for the design, create prototype and mockup on figma. Using vannilajs to develop the sites. Improve the understanding of web development.'
    },
    utilities: [Coca1, Coca2, Coca3],
    image: Coca,
    link: 'https://vietlehoang2000.github.io/cocacola/index.html',
  },
  {
    id: 'react-games',
    name: 'react games',
    category: ['All', 'React'],
    brief: 'a fews fun games made by react on codesandbox',
    image: Game,
    link: 'https://codesandbox.io/s/woizt',
  },
  {
    id: 'zou-landing-page',
    name: 'Zou landing page',
    category: ['All', 'JQuerry', 'UI'],
    brief: 'a personal landing page for learning UI purpose',
    image: Zou,
    link: 'https://vietlehoang2000.github.io/Web_nang_cao/BTB7/zou_landing_page.html',
  },
  {
    id: 'student-accounts-system',
    name: 'student accounts system',
    category: ['All', 'JQuerry'],
    brief: 'a Jquerry project developed for the case study of managing students detail for a small institute',
    image: Student,
    link: 'https://quan-ly-sinh-vien-techmaster.herokuapp.com/index.html',
  },
];

export default PorfolioItems;
