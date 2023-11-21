import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import MenusComponent from './MenusComponent'


function App() {
  const [menus, setMenus] = useState(data);

  const filteredMenus = (category) => {
    const newMenus = data.filter((menu)=> menu.category === category);
    setMenus(newMenus);
  }

  const allMenus = ()=> {
    setMenus(data);
  }

  const categories = [...new Set(data.map(item => item.category))]
  

  return (
    <>
      <MenusComponent menus={menus} filteredMenus={filteredMenus} allMenus={allMenus} categories={categories} />
    </>
  )
}

export default App
