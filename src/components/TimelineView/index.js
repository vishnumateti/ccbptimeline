// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

class TimelineView extends Component {
  renderCards = eachTimeline => {
    if (eachTimeline.categoryId === 'PROJECT') {
      return (
        <ProjectTimelineCard
          key={eachTimeline.id}
          projectDetails={eachTimeline}
        />
      )
    }
    return (
      <CourseTimelineCard
        key={eachTimeline.id}
        timeLineDetails={eachTimeline}
      />
    )
  }

  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="bg-container">
        <h1 className="ccbp-journey">
          MY JOURNEY OF <br />
          <span className="ccbp-heading">CCBP 4.0</span>
        </h1>
        <div className="chrono-container">
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(eachTimeline =>
              this.renderCards(eachTimeline),
            )}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
