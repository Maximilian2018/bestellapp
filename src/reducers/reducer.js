const reducer = (state, action) => {
  let category
  let selectedIndex
  let selectedItem
  let table
  let oldCount
  switch (action.type) {
    case 'TOGGLE_BUTTON':
      category = action.payload.category
      selectedIndex = state[category].findIndex(
        button => button.id === action.payload.id
      )
      selectedItem = state[category][selectedIndex]

      return {
        ...state,
        [category]: [
          ...state[category].slice(0, selectedIndex),
          { ...selectedItem, isSelected: !selectedItem.isSelected },
          ...state[category].slice(selectedIndex + 1)
        ]
      }

    case 'INCREASE_BUTTON':
      table = state.tables[state.selectedTable] || {}
      oldCount = table[action.payload.id] || 0

      return {
        ...state,
        tables: {
          ...state.tables,
          [state.selectedTable]: {
            ...table,
            [action.payload.id]: oldCount + 1
          }
        }
      }

    case 'DECREASE_BUTTON':
      table = state.tables[state.selectedTable] || {}
      oldCount = table[action.payload.id] || 0

      return {
        ...state,
        tables: {
          ...state.tables,
          [state.selectedTable]: {
            ...table,
            [action.payload.id]: oldCount === 0 ? 0 : oldCount - 1
          }
        }
      }

    case 'SELECT_TABLE':
      return { ...state, selectedTable: action.payload }

    default:
      return state
  }
}

export default reducer
