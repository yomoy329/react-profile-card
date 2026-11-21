import { useState } from 'react'
import './App.css'
import { ProfileCard } from './ProfileCard';

function App() {
    // useStateでインデックスを管理したい
  const [progress, setProgress] = useState(0); // 初期値は0

  return (
    <>
    <ProfileCard progress={progress} setProgress={setProgress}/>
    </>
  );
}

export default App