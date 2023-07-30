// Write your code here

import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = projectDetails

  return (
    <div>
      <img className="project-image" alt="project" src={imageUrl} />
      <div className="project-duration-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="calender-duration-container">
          <AiFillCalendar className="calender-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="visit" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
