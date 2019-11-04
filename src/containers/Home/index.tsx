import React from 'react'
interface IProps {
  children?: any
}
const Home = (props: IProps) => (
  <div>
    Home
    {props.children}
  </div>
)

export default Home
