import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const categories = [
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/x3X2k6S/robbie-noble-ru-Nm-Al-LLnpo-unsplash.jpg',
    id: 2,
    linkUrl: 'shop/jackets',
    route: 'shop/jackets'
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/B33fdLh/helen-ast-n-Smk-Z4-Af-L2-M-unsplash.jpg',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens',
    route: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/56x73P0/albert-dera-ILip77-Sbm-OE-unsplash.jpg',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens',
    route: 'shop/mens'
  }
];

const Directory = () => {

  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
