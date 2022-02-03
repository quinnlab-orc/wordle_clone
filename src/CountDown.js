import moment from "moment";
import React from "react";

export class WordSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      date: "",
    };
  }

  // 1643961600000 12am CT feb 4
  // 86400000 ms in 24 hours

  componentDidMount() {
    this.setState({ endTime: 1643961600000 });
    setInterval(() => {
      const endTime = this.state.endTime;
      const diffTime = moment.utc(endTime) - moment.utc();
      const duration = moment.duration(diffTime - 1000);

      this.setState({
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
        date: moment.utc().toDate(),
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.days > 0 && (
          <>
            <span>
              {this.state.days.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
            <div>:</div>
          </>
        )}
        <span>
          {this.state.hours.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </span>
        <div>:</div>
        <span>
          {this.state.minutes.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </span>
        <div>:</div>
        <span>
          {this.state.seconds.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </span>
      </div>
    );
  }
}
