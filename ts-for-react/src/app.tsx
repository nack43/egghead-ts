import * as React from 'react'
import * as ReactDOM from 'react-dom'

// type AppProps = { message: string }

// // define properties' types with React.SFC (Stateless Functional Component)
// const App: React.SFC<AppProps> = ({ message }) => <div>{ message }</div>

// ReactDOM.render(
//   <App message="Hello world again" />,
//   document.getElementById('root')
// )


// statefull component to use local state
type AppProps = {
  message: string,
}
type AppState = {
  count: number
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div onClick={this.increment}>{this.props.message} {this.state.count}</div>
    );
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}

ReactDOM.render(
  <App message="hello world from japan"/>,
  document.getElementById('root')

)
