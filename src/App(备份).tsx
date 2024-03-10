import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'
import { changeMessage } from './store/modules/counter'
import Demo02 from './views/demo/demo02'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

function App() {
  const { count, message, direction } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
      direction: state.counter.direction
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()
  function handlechangeMessage() {
    dispatch(changeMessage('哈哈哈'))
  }

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      <h2>当前计数: {count}</h2>
      <h2>当前消息: {message}</h2>
      <h2>asd:{direction}</h2>
      <button onClick={handlechangeMessage}></button>
      <Demo02 name="why" />
    </div>
  )
}

export default App
