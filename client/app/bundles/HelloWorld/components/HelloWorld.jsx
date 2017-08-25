import PropTypes from 'prop-types';
import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    const myEvents = [
      {start:new Date('8/24/2017'), end: new Date('8/27/2017'), title: 'Test Event Red', eventColor: 'red'},
      {start:new Date('8/2/2017'), end: new Date('8/3/2017'), title: 'Test Event Blue', eventColor: 'blue'},
      {start:new Date('8/15/2017'), end: new Date('8/17/2017'), title: 'Test Event Green', eventColor: 'green'}
    ];
    return (
      <div>
        <h3>
          Hello, {this.state.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>
        <hr />
        <hr />
        <div className='container'>
          <div style={{height: 500}}>
            <BigCalendar  events = {myEvents}
                          defaultDate = {new Date()}
                          eventPropGetter = {this._setEventBackground} />
          </div>
        </div>
      </div>
    );
  }

  _setEventBackground(event) {
    let style = {backgroundColor: event.eventColor};
    return {style: style};
  }
}
