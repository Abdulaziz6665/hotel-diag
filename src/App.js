import MainMenu from './Components/Main-menu/Main-menu'
import Dashboard from './Components/Dashboard/Dashboard'
import Other from './Components/Other/Other'
import { Route, Switch } from 'react-router-dom'
import './App.css'
// import { useState } from 'react'

function App () {


  return (
    <>
      <div className="container">
        <div className="block-main">
          <div>
            <Switch>
              <Route path='*' component={MainMenu} />
            </Switch>
          </div>
          <div className='block-submain'>
            <Switch>
              <Route path='/boshqa' component={Other} />
              <Route path='/dashboard' component={Dashboard}/>
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}

export default App