// Import Styles

import './projects.css';

// Import Frameworks

import { useRef, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Component Imports

import Card from './card/card';

// Component Code

const items = [
    { id: 1, name: 'Fight Drop', cor: 'red', link:"https://www.fight-drop.online/"},
    { id: 2, name: 'Mustica Blog', cor: '#173fc4', link:"/"},
    { id: 3, name: 'CRUD System', cor: '#49a0bd', link:"http://webclientsystem.great-site.net/"},
    { id: 4, name: 'HUB Functions', cor: 'gray', link:"https://hubfunctions.vercel.app/"},
  ];
  
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  const titleRef = useRef(null);

  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = titleRef.current.getBoundingClientRect();
      if (top < window.innerHeight) {
        setShowTitle(true);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div className="projectsAllComponent" >
    
    <div className={showTitle ? 'title title-show' : 'title'}>
      <h1 ref={titleRef}>
        Projetos
      </h1>
    </div>
      
      <div className="Projects">

        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2500} transitionDuration={500} infinite={true} pauseOnHover={true} partialVisible={true} className="custom-carousel">

          {items.map(item => (
            
            <Card id={item.id} name={item.name} cor={item.cor} link={item.link} />
            
          ))}

        </Carousel>
        
      </div>

    </div>
  );
}

export default Projects;
