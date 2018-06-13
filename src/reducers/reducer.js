const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_BUTTON':
      const category = action.payload.category
      const selectedIndex = state[category].findIndex(
        button => button.id === action.payload.id
      )
      const selectedItem = state[category][selectedIndex]

      return {
        ...state,
        [category]: [
          ...state[category].slice(0, selectedIndex),
          { ...selectedItem, isSelected: !selectedItem.isSelected },
          ...state[category].slice(selectedIndex + 1)
        ]
      }

    default:
      return state
  }
}

export default reducer
