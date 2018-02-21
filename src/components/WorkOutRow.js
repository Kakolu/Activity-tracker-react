import Pizza from 'react-icons/lib/md/local-pizza'
import Food from 'react-icons/lib/fa/heartbeat'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

export const WorkOutRow = ({workout, date, highcarb, lowcarb}) => (
	<tr>
		<td>
			{date}
		</td>
		<td>
			{workout}
		</td>
		<td>
			{(highcarb) ? <Pizza /> : null}			
		</td>
		<td>
			{(lowcarb) ? <Food /> : null}
		</td>
	</tr>

)

WorkOutRow.propTypes = {
	workout: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	highcarb: PropTypes.bool,
	lowcarb: PropTypes.bool
}