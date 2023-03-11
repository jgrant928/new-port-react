// import React, {useState} from 'react';

// import IMG1 from '../../images/BrewsnChews.png'
// import IMG2 from '../../images/professional portfolio.png'
// import IMG3 from '../../images/QuarterArcade.png'


// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: '',
//     github: '',
//     demo: ''
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: "Brews 'N Chews: A Brewery and Restaurant Locator",
//     github: 'https://github.com/mdh1080/Brews-and-Chews',
//     demo: 'https://mdh1080.github.io/Brews-and-Chews/'
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: '',
//     github: '',
//     demo: ''
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: '',
//     github: '',
//     demo: ''
//   },
//   {
//     id: 5,
//     image: IMG5,
//     title: '',
//     github: '',
//     demo: ''
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: '',
//     github: '',
//     demo: ''
//   }
// ]


 

// const Portfolio = () => {
//       return (
//     <section className='portfolio'>
//     <h5>My Recent Work</h5>
//     <h2>Portfolio</h2>

//     <div className="container portfolio__container">
//       {
//         data.map(({id, image, title, github, demo}) => {
//           return (
//             <article key={id} className='portfolio__item'>
//             <div className="portfolio__item-image">
//               <img src={image} alt={title} />
//             </div>
//             <h3>{title}</h3>
//             <div className="portfolio__item-cta">
//               <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
//               <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
//             </div>
//           </article>
//           )
//         })
//       }
//     </div>
//   </section>
// )
// }

// export default Portfolio