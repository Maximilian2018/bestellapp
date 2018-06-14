const reducer = (state, action) => {
  let category
  let selectedIndex
  let selectedItem
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
      category = action.payload.category
      selectedIndex = state[category].findIndex(
        button => button.id === action.payload.id
      )
      selectedItem = state[category][selectedIndex]

      return {
        ...state,
        [category]: [
          ...state[category].slice(0, selectedIndex),
          { ...selectedItem, count: selectedItem.count + 1 },
          ...state[category].slice(selectedIndex + 1)
        ]
      }

    case 'SELECT_TABLE':
      return { ...state, selectedTable: action.payload }

    case 'DECREASE_BUTTON':
      category = action.payload.category
      selectedIndex = state[category].findIndex(
        button => button.id === action.payload.id
      )
      selectedItem = state[category][selectedIndex]

      return {
        ...state,
        [category]: [
          ...state[category].slice(0, selectedIndex),
          { ...selectedItem, count: selectedItem.count - 1 },
          ...state[category].slice(selectedIndex + 1)
        ]
      }

    default:
      return state
  }
}

export default reducer
