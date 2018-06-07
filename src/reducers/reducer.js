const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_BUTTON':
      const selectedIndex = state.buttons.findIndex(
        button => button.id === action.payload
      )
      const selectedItem = state.buttons[selectedIndex]

      return {
        ...state,
        buttons: [
          ...state.buttons.slice(0, selectedIndex),
          { ...selectedItem, isSelected: !selectedItem.isSelected },
          ...state.buttons.slice(selectedIndex + 1)
        ]
      }

    default:
      return state
  }
}

export default reducer
