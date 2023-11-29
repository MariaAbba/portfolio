// import {Navlink} from 'react-router-dom'
import './style.css'



const Project = ({title, img, index }) => {
  return (
    // <Navlink to={`/project/${index}`}>
      <li className="project">
        {/* <a href="./project-page.html"> */}
          <img src={img} alt={title} className="project__img" />
          <h3 className="project__title">{title}</h3>
        {/* </a> */}
      </li>
    // </Navlink>
  )
}
 
export default Project;