import Apple from '../image/apple.png';
import Coca from '../image/coca.png';
import Game from '../image/game.png';
import Zou from '../image/zou.png';
import Student from '../image/students.png';
import Inventory from '../image/inventory.png';
import Mamamsilk from '../image/mamasmilk.jpg'

const PorfolioItems = [
  {
    id: 1,
    name: 'apple products',
    category: ['All', 'React'],
    description: 'a personal react project to demonstrate shopping web page',
    image: Apple,
    link: 'https://apple-product-vietlehoang2000.netlify.app/components/authentication/Authenticate',
  },
  {
    id: 6,
    name: 'a wordpress website ',
    category: ['All','UI', 'Wordpress'],
    description: 'a school project to remake the website for real client',
    image: Mamamsilk,
    link: 'https://test-mammasmilk.pantheonsite.io/',
  },
  {
    id: 2,
    name: 'Cocacola redesign',
    category: ['All', 'Vanilla', 'JQuerry', 'UI'],
    description: 'a vannila web page inspired by Cocacola',
    image: Coca,
    link: 'https://vietlehoang2000.github.io/cocacola/index.html',
  },
  {
    id: 3,
    name: 'react games',
    category: ['All', 'React'],
    description: 'a fews fun games made by react on codesandbox',
    image: Game,
    link: 'https://codesandbox.io/s/woizt',
  },
  {
    id: 4,
    name: 'Zou landing page',
    category: ['All', 'JQuerry', 'UI'],
    description: 'a personal landing page for learning UI purpose',
    image: Zou,
    link: 'https://vietlehoang2000.github.io/Web_nang_cao/BTB7/zou_landing_page.html',
  },
  {
    id: 5,
    name: 'mitp project',
    category: ['All', 'Vanilla', 'JQuerry'],
    description: 'a school group project to develope for a study case of medicines stock management',
    image: Inventory,
    link: 'https://mitp-project.herokuapp.com/index.html',
  },
  // {
  //   id: 6,
  //   name: 'student accounts system',
  //   category: ['All', 'JQuerry'],
  //   description: 'a Jquerry project to study rest api calling request',
  //   image: Student,
  //   link: 'https://quan-ly-sinh-vien-techmaster.herokuapp.com/index.html',
  // },
];

export default PorfolioItems;
