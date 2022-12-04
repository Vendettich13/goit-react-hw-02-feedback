import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "components/Notification/Notification"
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = (e) => {
    const currentBtn = e.currentTarget.name;
    this.setState((prevState) => {
      return { [currentBtn]: prevState[currentBtn] + 1 }
    })
  }
  total = () => {
    const { good, bad, neutral } = this.state
    return good + bad + neutral
  }
  positivePercentage = () => {
    const {good} = this.state
    return good / this.total() * 100;
  }

  render() {
    return <section>
    <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'bad', 'neutral']} onLeaveFeedback={this.onLeaveFeedback}/>
    </Section>
      <Section title="Statistics">
        {this.total() === 0 ? <Notification/> : <Statistics good={this.state.good} neutral={this.state.neutral } bad={this.state.bad } total={this.total} positivePercentage={this.positivePercentage}/>}
         
      </Section>
      </section>
    }
};
 