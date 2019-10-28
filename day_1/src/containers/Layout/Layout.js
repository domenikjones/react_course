import React from 'react'
import './Layout.scss'
import Headline from '../../components/Headline/Headline'
import List from '../List/List'
import Form from '../../components/Form/Form'

const Layout = () => {
  return (
    <div className="container">
      <div className="navigation">NAVIGATION</div>
      <div className="body">
        <Headline text="Wolfgang's Course"></Headline>
        <Headline text="Stela's Course"></Headline>
        <List>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </List>
        <Form></Form>
      </div>
    </div>
  )
}

export default Layout
