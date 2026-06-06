const reactElement = {
  type: 'a',
  props:{
    href: 'https://www.google.com',
    target: '_blank'
  },
  children: [
    {
      type: 'a',
      props: {
        href: 'https://www.google.com',
        target: '_blank'
      }
    }
  ]
}

const mainContainer = document.querySelector('#root');

