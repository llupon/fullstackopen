import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if (props.totalFeedback === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value ={props.good} />
        <StatisticLine text="neutral" value ={props.neutral} />
        <StatisticLine text="bad" value ={props.bad} />
        <StatisticLine text="total" value ={props.totalFeedback} />
        <StatisticLine text="average" value ={props.averageScore} />
        <StatisticLine text="positive" value ={props.positiveFeedback} />
      </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalFeedback = good + neutral + bad;
  const averageScore = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;
  const positiveFeedback = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  return (
    <div>
      <h2>give feedback</h2>     
      <Button onClick={() => setGood(good + 1)} text="good"></Button>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"></Button>
      <Button onClick={() => setBad(bad + 1)} text="bad"></Button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} totalFeedback={totalFeedback} averageScore={averageScore} positiveFeedback={positiveFeedback} />
    </div>
  )
}

export default App