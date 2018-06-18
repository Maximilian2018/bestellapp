import React from 'react'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import initialState from './reducers/initialState'
import {
  toggleButton,
  increaseButton,
  decreaseButton,
  selectTable
} from './actions'
import ToggleButton from './components/ToggleButton'
import DishPage from './components/DishPage'
import CollapseButton from './components/CollapseButton'
import styled from 'react-emotion'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import alcohol from './components/alcohol'
import bestSeller from './components/bestSeller'
import Dessert from './components/Dessert'
import BestellButton from './components/BestellButton'
import CounterButton from './components/CounterButton'
import PropTypes from 'prop-types'
import Softdrinks from './components/Softdrinks'
import ExtraWuensche from './components/ExtraWuensche'

const Grid = styled('div')`
  display: grid;
  grid-gap: 10px;
`

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }
  inputBestellButton = event => {
    this.setState({ userInput: event.target.value })
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
                <CollapseButton
                  tableNumbers={state.tableNumbers}
                  onChangeTable={id => store.dispatch(selectTable(id))}
                  selectedTable={state.selectedTable}
                />{' '}
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
                  <Link to="/dessert">Nachtisch</Link>
                </div>
                <div>
                  <Link to="/softdrinks">softdrinks</Link>
                </div>
                <div>
                  <Link to="/alcohol">Alkohol</Link>
                </div>
                <div>
                  <Link style={{ background: 'green' }} to="/bestellen">
                    Bestellung abschicken
                  </Link>
                </div>
                <div>
                  <Link to="/extrawuensche">ExtraWünsche</Link>
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
            path="/dessert"
            render={() => (
              <DishPage
                onIncrease={id => store.dispatch(increaseButton(id, 'dessert'))}
                onDecrease={id => store.dispatch(decreaseButton(id, 'dessert'))}
                title="Nachspeisen"
                buttons={state.dessert}
              />
            )}
          />
          <Route
            path="/softdrinks"
            render={() => (
              <DishPage
                onIncrease={id =>
                  store.dispatch(increaseButton(id, 'softdrinks'))
                }
                onDecrease={id =>
                  store.dispatch(decreaseButton(id, 'softdrinks'))
                }
                title="Softgetränke"
                buttons={state.softdrinks}
              />
            )}
          />

          <Route
            path="/alcohol"
            render={() => (
              <DishPage
                onIncrease={id => store.dispatch(increaseButton(id, 'alcohol'))}
                onDecrease={id => store.dispatch(decreaseButton(id, 'alcohol'))}
                title="Alkohol"
                buttons={state.alcohol}
              />
            )}
          />

          <Route
            path="/bestellen"
            render={() => (
              <div>
                <BestellButton
                  input={this.inputBestellButton}
                  title={'Bestellung abschicken'}
                />
              </div>
            )}
          />
          <Route
            path="/extrawuensche"
            render={() => (
              <div>
                <ExtraWuensche
                  title={'extrawuensche'}
                  buttons={state.extrawuensche}
                />
              </div>
            )}
          />
        </Grid>
      </Router>
    )
  }
}
