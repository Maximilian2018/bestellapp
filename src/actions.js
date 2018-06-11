export function toggleButton(id, category) {
  return {
    type: 'TOGGLE_BUTTON',
    payload: { id, category }
  }
}
