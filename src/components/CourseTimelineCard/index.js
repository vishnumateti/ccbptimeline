// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {timeLineDetails} = props
  const {courseTitle, description, duration, tagsList} = timeLineDetails
  return (
    <div>
      <div className="title-duration-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="circle-duration-container">
          <AiFillClockCircle className="circle-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-container">
        {tagsList.map(eachTag => (
          <li className="list-container" key={eachTag.id}>
            <p className="tag-name">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
