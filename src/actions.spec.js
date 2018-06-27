import { toggleButton, selectTable } from './actions'

describe('actions', () => {
  describe('toggleButton', () => {
    it('creates a TOGGLE_BUTTON action', () => {
      expect(toggleButton('foo', 'bar')).toEqual({
        type: 'TOGGLE_BUTTON',
        payload: { id: 'foo', category: 'bar' }
      })
    })
  })

  describe('selectTable', () => {
    it('creates a SELECT_TABLE action', () => {
      expect(selectTable(3)).toEqual({
        type: 'SELECT_TABLE',
        payload: 3
      })
    })
  })
})
