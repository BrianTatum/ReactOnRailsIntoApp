import PropTypes from 'prop-types';
import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

export default class MyCal extends React.Component {
	constructor(props) {
		super(props);
		let calEvent = this.props.events.length > 0 ? this.props.events : [];
		this.state = {
			calEvents: calEvent
		};
	} 

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12" style={{height: 500}}>
						<h1>Retreat Calendar</h1>
						<BigCalendar 	events = {this.state.calEvents}
                          				defaultDate = {new Date()}
                          				eventPropGetter = {this._setEventBackground} />
					</div>
				</div>
			</div>
		)
	}

	_setEventBackground(event) {
	    let style = {backgroundColor: event.eventColor};
	    return {style: style};
	}
}