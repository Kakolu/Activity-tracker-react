import { PropTypes, Component } from 'react'

const WorkoutTypes = [
	"Gym",
	"Yoga",
	"Spin Cycling",
	"Swimming", 
	"Weights", 
	"Jogging",
	"Aerobics",
	"Hiking", 
	"HIIT",
	"Ping Pong",
	"Tennis"
]

class Autocomplete extends Component {
	get value() {
		return this.refs.inputWorkout.value
	}
	set value(inputValue) {
		this.refs.inputWorkout.value = inputValue
	}
	render() {
		return (
			<div>
				<input ref="inputWorkout" type="text" list="list-workout" />
				<datalist id="list-workout">
					{this.props.options.map(
						(opt, i) => <option key={i}> {opt} </option>
					)}
				</datalist>
			</div>
		)
	}
}

export const AddDayForm = ({ workout, date, highcarb, lowcarb, onNewDay }) => {

	let _workout, _date, _highcarb, _lowcarb

	const submit = (e) => {
		e.preventDefault()
		onNewDay({
			workout: _workout.value,
			date: _date.value,
			highcarb: _highcarb.checked,
			lowcarb: _lowcarb.checked
		})
		_workout.value = ''
		_date.value = ''
		_highcarb.value = false
		_lowcarb.value =  false
	}

	return (

		<form onSubmit={submit} className="add-day" >
			<label htmlFor="workout">Workout Type: </label>
			<Autocomplete options={WorkoutTypes}
					ref={input => _workout = input}/>

			<label htmlFor="date">Date: </label>
			<input id="date" type="date" required defaultValue={date}
					ref={input => _date = input} />

			<div>
				<input id="highcarb" type="checkbox" defaultChecked={highcarb} ref={input => _highcarb = input}/>
				<label htmlFor="highcarb">High Carb Day: </label>
			</div>

			<div>
				<input id="lowcarb" type="checkbox" defaultChecked={lowcarb} ref={input => _lowcarb = input}/>
				<label htmlFor="lowcarb">Low Carb Day: </label>
			</div>
			<button>Add Workout</button>
		</form>
	)
 }

AddDayForm.defaultProps = {
	workout: "yoga",
	date: new Date().toJSON().slice(0,10),
	highcarb: false,
	lowcarb: true
}

AddDayForm.propTypes = {
	workout: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	highcarb: PropTypes.bool.isRequired,
	lowcarb: PropTypes.bool.isRequired
}