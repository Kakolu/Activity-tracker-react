import Pizza from 'react-icons/lib/md/local-pizza'
import Food from 'react-icons/lib/fa/heartbeat'
import Calendar from 'react-icons/lib/fa/calendar'
import { WorkOutRow } from './WorkOutRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const WorkOutList = ({days, filter}) => {

const filteredDays = (!filter || !filter.match(/highcarb|lowcarb/)) ?
						days: 
						days.filter(day => day[filter])
return (
	<div className="work-out-list">
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Workout</th>
				<th>Highcarb Day</th>
				<th>Lowcarb Day</th>
			</tr>
			<tr>
				<td colSpan={4}>
					<Link to="list-days">
						Add days
					</Link>
					<Link to="list-days/highcarb">
						High Carb Day
					</Link>
					<Link to="list-days/lowcarb">
						Low Carb Day
					</Link>
				</td>
			</tr>
		</thead>
		<tbody>
			{filteredDays.map((day, i) =>
				<WorkOutRow key={i}
							{...day} />
				)}
		</tbody>
	</table>
	</div>
)}

WorkOutList.propTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)){
			return new Error("WorkOutList should be an Array")
		} else if(!props.days.length) {
			return new Error("WorkOutList must have values")
		} else {
			return null
		}
	}
}