import '../stylesheets/ui.scss'
import Pizza from 'react-icons/lib/md/local-pizza'
import Food from 'react-icons/lib/fa/heartbeat'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'


const percentToDecimal = (decimal) => {
		return ((decimal*100) + '%')
	}

const calcGoalProgress = ( total, goal) => {
		return percentToDecimal( (total/goal) )
	}

export const WorkOutCount = ({ total=70, highcarb=20, lowcarb=10, goal=100}) => (
	<div className="workout-count">
		<div className="total-days">
			<span>{total}</span>
			<Calendar />
			<span>days</span>
		</div>
		<div className="high-carb">
			<span>{highcarb}</span>
			<Pizza />
			<span>days</span>
		</div>
		<div className="low-carb">
			<span>{lowcarb}</span>
			<Food />
			<span>days</span>
		</div>
		<div>
			<span>{calcGoalProgress( total, goal)}</span>
		</div>
	</div>
)

WorkOutCount.propTypes = {
	total: PropTypes.number,
	highcarb: PropTypes.number,
	lowcarb: PropTypes.number,
	goal: PropTypes.number
}


