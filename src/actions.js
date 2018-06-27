export function toggleButton(id, category) {
  return {
    type: 'TOGGLE_BUTTON',
    payload: { id, category }
  }
}

export function increaseButton(id, category) {
  return {
    type: 'INCREASE_BUTTON',
    payload: { id, category }
  }
}

export function decreaseButton(id, category) {
  return {
    type: 'DECREASE_BUTTON',
    payload: { id, category }
  }
}

export function selectTable(num) {
  return {
    type: 'SELECT_TABLE',
    payload: num
  }
}

export function deleteTable(num) {
  return {
    type: 'DELETE_TABLE',
    payload: num
  }
}
