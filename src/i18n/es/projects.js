import shopReactNative from '../../assets/img/projects/shopReactNative.jpg';
import cinemaITB from '../../assets/img/projects/cinemaITB.png';
import guessANumber from '../../assets/img/projects/guessANumber.png';
import showMeals from '../../assets/img/projects/showMeals.png';
import blogNextJS from '../../assets/img/projects/blogNextJS.webp';

const projectsInfo = [
  {
    id: 1,
    demo: 'https://adri-blog.vercel.app/',
    source: 'https://github.com/Adri-Antanon/ReactAndNextJS',
    stack: ['React', 'CSS Modules', 'NextJS'],
    image: blogNextJS,
    title: 'Blog',
    description:
      'Blog about web development with css modules, api routes, server side rendering, react-markdown and more. ',
  },
  {
    id: 2,
    demo: 'https://expo.io/@adriantanon/online-store',
    source: 'https://gitlab.com/AdrianAntanon/react-native-the-shop-app',
    stack: ['Expo', 'React Native', 'Redux'],
    image: shopReactNative,
    title: 'Simple Online Store',
    description:
      'Shop created using React Native, Expo, authentication implementation, different hooks, Redux Thunk and validation inputs',
  },
  {
    id: 3,
    demo: 'https://expo.io/@adriantanon/projects/guess-number',
    source: 'https://gitlab.com/AdrianAntanon/guess-a-number-app',
    stack: ['Expo', 'React Native'],
    image: guessANumber,
    title: 'Guess a number - game',
    description:
      'You enter a number between 1 and 99 and the game begins, the CPU must guess the number',
  },
  {
    id: 4,
    demo: 'https://expo.io/@adriantanon/projects/show-meals',
    source: 'https://gitlab.com/AdrianAntanon/react-native-the-meals-app',
    stack: ['Expo', 'React Native'],
    image: showMeals,
    title: 'Show your meals!',
    description:
      'Different food recipes are shown, how to prepare them, separated by categories and you can save them in favorites.',
  },
  {
    id: 5,
    demo: 'https://adrianantanon.gitlab.io/proyecto-static-web-uf2-m04/index.html',
    source: 'https://gitlab.com/AdrianAntanon/proyecto-static-web-uf2-m04',
    stack: ['HTML5', 'CSS', 'JavaScript'],
    image: cinemaITB,
    title: 'Cinema ITB',
    description:
      'Vanilla javascript website, a blog about cinema that I did shortly after learning programming.',
  },
];

const projects = {
  projectsInfo,
  title: 'Proyectos',
};

export default projects;
