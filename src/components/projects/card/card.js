// Import Styles

import './card.css';

// Import Frameworks

import { useRef, useEffect } from 'react';

// Component Code

function Card({id,name,cor,link}) {

    const div1Ref = useRef(null);

    useEffect(() => {
        
        div1Ref.current.style.backgroundColor = cor;

      }, []);

    return (

        <a href={link} className="divProjectsClick" target="_blank" >
            <div key={id} id="ProjectsCarousel" ref={div1Ref} >

                <h3>{name}</h3>

            </div>
        </a>
    );
    }

export default Card;
