import React from 'react'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import initialState from './reducers/initialState'
import { toggleButton, increaseButton, decreaseButton } from './actions'
import ToggleButton from './components/ToggleButton'
import DishPage from './components/DishPage'
import CollapseButton from './components/CollapseButton'
import styled from 'react-emotion'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import drinks from './components/drinksList'
import bestSeller from './components/bestSeller'
import Dessert from './components/Dessert'
import BestellButton from './components/BestellButton'
import CounterButton from './components/CounterButton'
import PropTypes from 'prop-types'

const Grid = styled('div')`
  display: grid;
  grid-gap: 10px;
`

const store = createStore(reducer, initialState)

export default class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const state = store.getState()
    return (
      <Router>
        <Grid>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <CollapseButton tableNumbers={state.tableNumbers} />{' '}
                <div>
                  <Link to="/bestSeller">Meist bestellt</Link>
                </div>
                <div>
                  <Link to="/starters">Vorspeisen</Link>
                </div>
                <div>
                  <Link to="/main-courses">Hauptspeisen</Link>
                </div>
                <div>
                  <Link to="/drinks">Getränke</Link>
                </div>
                <div>
                  <Link to="/dessert">Nachtisch</Link>
                </div>
                <div>
                  <Link to="/BestellButton">Bestellung abschicken</Link>
                </div>
              </div>
            )}
          />
          <Route
            path="/bestSeller"
            render={() => (
              <DishPage
                onIncrease={id =>
                  store.dispatch(increaseButton(id, 'bestSeller'))
                }
                onDecrease={id =>
                  store.dispatch(decreaseButton(id, 'bestSeller'))
                }
                title="Meist bestellt"
                buttons={state.bestSeller}
              />
            )}
          />

          <Route
            path="/starters"
            render={() => (
              <DishPage
                onIncrease={id =>
                  store.dispatch(increaseButton(id, 'starters'))
                }
                onDecrease={id =>
                  store.dispatch(decreaseButton(id, 'starters'))
                }
                title="Vorspeisen"
                buttons={state.starters}
              />
            )}
          />

          <Route
            path="/main-courses"
            render={() => (
              <DishPage
                onIncrease={id =>
                  store.dispatch(increaseButton(id, 'mainCourses'))
                }
                onDecrease={id =>
                  store.dispatch(decreaseButton(id, 'mainCourses'))
                }
                title="Hauptspeisen"
                buttons={state.mainCourses}
              />
            )}
          />

          <Route
            path="/drinks"
            render={() => (
              <DishPage
                onIncrease={id => store.dispatch(increaseButton(id, 'drinks'))}
                onDecrease={id => store.dispatch(decreaseButton(id, 'drinks'))}
                title="drinks"
                buttons={state.drinks}
              />
            )}
          />
          <Route
            path="/dessert"
            render={() => (
              <DishPage
                onIncrease={id => store.dispatch(increaseButton(id, 'dessert'))}
                onDecrease={id => store.dispatch(decreaseButton(id, 'dessert'))}
                title="Nachtisch"
                buttons={state.dessert}
              />
            )}
          />

          <Route
            path="/BestellButton"
            render={() => (
              <DishPage
                onToggle={id =>
                  store.dispatch(toggleButton(id, 'BestellButton'))
                }
                title="Bestellung abschicken"
                buttons={state.BestellButton}
              />
            )}
          />
        </Grid>
      </Router>
    )
  }
}
