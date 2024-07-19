import React from "react"
import Menu from "../Menu/Menu"
import { Table, Slider, Error } from "../../Pages"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import style from "./App.module.scss"

function App() {
  return (
  <Router>
    <div className={style.container}>
      <header className={style.header}>
      <Menu/>
        </header>
        <main className={style.main}>
      <Routes>
        <Route path="/" element={<Table/>}/>
        <Route path="/game" element={<Slider/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
        </main>
    </div>
  </Router>  )
}

export default App
