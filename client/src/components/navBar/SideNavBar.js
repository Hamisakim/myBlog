/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { Router, Route } from 'react-router-dom'

const SideNavBar = () => {
  return (
    <Router>
      <Route render={({ location, history }) => (
        <React.Fragment>
          <SideNav
            onSelect={(selected) => {
              const to = '/' + selected
              if (location.pathname !== to) {
                history.push(to)
              }
            }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                <NavIcon>
                  <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                  Home
                </NavText>
              </NavItem>
              <NavItem eventKey="devices">
                <NavIcon>
                  <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                  Devices
                </NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
          <main>
            <Route path="/" exact component={props => <RootComponent />} />
            <Route path="/home" component={props => <Home />} />
            <Route path="/devices" component={props => <Devices />} />
          </main>
        </React.Fragment>
      )}
      />
    </Router>
  )
}

export default SideNavBar
