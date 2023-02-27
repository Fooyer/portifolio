// Import Styles

import './projects.css';

// Import Frameworks

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Component Code

const items = [
    { id: 1, name: 'Item 1'},
    { id: 2, name: 'Item 2'},
    { id: 3, name: 'Item 3'},
    { id: 4, name: 'Item 4'},
    { id: 5, name: 'Item 5'},
    { id: 6, name: 'Item 6'},
    { id: 7, name: 'Item 7'},
    { id: 8, name: 'Item 8'},
  ];
  
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

function Projects() {

  return (
    <div className="Projects">

      <Carousel responsive={responsive}>

      {items.map(item => (
        
        <div key={item.id}>

            <h3>{item.name}</h3>

        </div>
        
      ))}

    </Carousel>
      
    </div>
  );
}

export default Projects;
