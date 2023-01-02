import React from 'react'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';

type Props = {}

const App = (props: Props) => {
  return (
    <main>
      <Profile />
    </main>
  )
}

export default App;