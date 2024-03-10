import React, { PureComponent } from 'react'

/**
 * state:
 * props:
 */

interface IProps {
  name: string
  age?: number
}

interface IState {
  message: string
  counter: number
}

class Demo02 extends PureComponent<IProps, IState> {
  name = 'asd'
  state = {
    message: 'Hello World',
    counter: 99
  }

  getSnapshotBeforeUpdate() {
    return { name: 'kobe', age: 30 }
  }

  // constructor(props: IProps) {
  //   super(props)

  //   this.state = {
  //     message: 'hello world',
  //     counter: 100
  //   }
  // }

  render(): React.ReactNode {
    return (
      <div>
        name: {this.props.name}
        age: {this.props.age}
        message: {this.state.message}
        counter: {this.state.counter}
      </div>
    )
  }
}

export default Demo02
