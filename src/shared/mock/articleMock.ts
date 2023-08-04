export const article = {
  id: '1',
  title: 'Title TitleTi Title tleTitleTitleTitleTitle TitleTitleTitle Title',
  subtitle: 'subtitle',
  img: 'http://russkievesti.ru/assets/images/resources/20622/perito-moreno-samyij-fotogenichnyij-lednik-v-mire-1.jpg',
  views: 100,
  createdAt: '25.08.2023',
  user: {
    id: '2',
    username: 'user',
    avatar:
      'https://avatars.mds.yandex.net/i?id=ad1ff928d01f1ba943e9859e4ea28fbeb140d867-9106331-images-thumbs&n=13',
  },
  type: ['test', 'test', 'test', 'test', 'test'],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'title block',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,',
        'dolorem vel laborum porro blanditiis magnam nobis eaque. Perspiciatis,',
        ' explicabo maiores voluptatibus tenetur vel placeat saepe consectetur',
        'ut natus et animi!',
      ],
    },
    {
      id: '23',
      type: 'CODE',
      code: '<!DOCTYPE html>\n<html>\n<body>\n<p id="hello"></p>\n<script>\ndocument.getElementById("hello").innerHTML = "Hello, world!";\n</script>\n</body>\n</html>',
    },
    {
      id: '12',
      type: 'IMAGE',
      src: 'http://russkievesti.ru/assets/images/resources/20622/perito-moreno-samyij-fotogenichnyij-lednik-v-mire-1.jpg',
      title: 'title img',
    },
    {
      id: '3',
      type: 'TEXT',
      title: 'title block',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,',
        'dolorem vel laborum porro blanditiis magnam nobis eaque. Perspiciatis,',
        ' explicabo maiores voluptatibus tenetur vel placeat saepe consectetur',
        'ut natus et animi!',
      ],
    },
  ],
};
