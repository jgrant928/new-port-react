import React, {useState} from 'react';
import Project from '../Project';

const PhotoList = ({currentCategory}) => {

  const [photos] = useState([
    {
      name: 'projects',
      description: 'Brews n Chews',
      link: "",
      github:"https://github.com/",
      id: 0
    },
    { name: 'projects', description: 'Quarter Arcade,',
      link: "",
      github: "",
       id: 1},
    { name: 'projects', description: 'Weather Dashboard, Web API', 
      link:"",
      github: "",
      id: 2 },
    { name: 'projects', 
      description: '', 
      link:"",
      github: "",
      id: 3 },
    {
      name: 'projects',
      description: '',
      link:"",
      github: "",
      id: 4
    },
    { name: 'projects', description: '',
      link:"",
      github: "",
      id: 5 }
    ])
return (
    <div>
        {currentPhotos.map((image) => (
          <Project name={image.name}
            description={image.description}
            link={image.link}
            github={image.github}
            id={image.id}/>
        ))}
    </div>
    )
}



export default PhotoList;
