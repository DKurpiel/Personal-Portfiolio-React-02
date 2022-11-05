import React from 'react'
import { About } from '../pages/About'
import { Portfolio } from '../pages/Portfolio'
import { Services } from "../pages/Services"
import { Blog } from '../pages/Blog'
import { Hero } from "./Hero"
import { Contact } from '../pages/Contact'

export const Home = () => {
  return (
  <>
  <Hero />
  <About />
  <Services />
  <Portfolio />
  <Blog />
  <Contact />
  </>
  )
}
