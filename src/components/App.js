import { Component } from 'react'
import { WorkOutList } from './WorkOutList'
import { WorkOutCount } from './WorkOutCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'


export class App extends Component{
	constructor(props) {
		super(props)
		this.state = {
			allWorkOutDays: [
			{
				workout: "Gym",
				date: "2018-01-02",
				highcarb: true,
				lowcarb: false
			}
		]
		}
		this.addDay = this.addDay.bind(this)
	}

	addDay(newDay) {
		this.setState({
			allWorkOutDays : [
				...this.state.allWorkOutDays,
				newDay
			]
		})
	}

	countDays(filter) {
		const { allWorkOutDays } = this.state
		return allWorkOutDays.filter((day) => (filter) ? day[filter] : day).length
	}

	render() {
		return (
			<div className="app">
			<Menu/>
			{
				(this.props.location.pathname === '/') ? 
					<WorkOutCount 	total={this.countDays()} 
									highcarb={this.countDays("highcarb")} 
									lowcarb={this.countDays("lowcarb")} /> :
					(this.props.location.pathname === '/add-day') ?
						<AddDayForm onNewDay={this.addDay}/> :
						<WorkOutList days={this.state.allWorkOutDays} 
								filter={this.props.params.filter}/>
			}	
			</div>
		)
	}
}