import todos, { initialState } from './index'
import { ADD_TODO, TOGGLE_TODO } from './actions'

describe('Todo', () => {
  test('should todos be a function', () => {
    expect(todos()).toBeTruthy()
  })

  test('should add a Todo Item', () => {
    const before = []
    const action = { type: ADD_TODO, payload: { id: 0, text: 'Hey!' } }
    const after = [{ id: 0, text: 'Hey!', completed: false }]
    expect(todos(before, action)).toEqual(after)
  })

  test('should add a new Todo Item', () => {
    const before = [{ id: 0, text: 'Hey!', completed: false }]
    const action = { type: ADD_TODO, payload: { id: 1, text: 'Ho!' } }
    const after = [
      { id: 0, text: 'Hey!', completed: false },
      { id: 1, text: 'Ho!', completed: false }
    ]
    expect(todos(before, action)).toEqual(after)
  })

  test('should Toggle first Todo', () => {
    const before = [
      { id: 0, text: 'Hey!', completed: false },
      { id: 1, text: 'Ho!', completed: false }
    ]
    const action = { type: TOGGLE_TODO, payload: { id: 0 } }
    const after = [
      { id: 0, text: 'Hey!', completed: true },
      { id: 1, text: 'Ho!', completed: false }
    ]
    expect(todos(before, action)).toEqual(after)
  })

  test('should Toggle second Todo', () => {
    const before = [
      { id: 0, text: 'Hey!', completed: false },
      { id: 1, text: 'Ho!', completed: false }
    ]
    const action = { type: TOGGLE_TODO, payload: { id: 1 } }
    const after = [
      { id: 0, text: 'Hey!', completed: false },
      { id: 1, text: 'Ho!', completed: true }
    ]
    expect(todos(before, action)).toEqual(after)
  })

  test('should Toggle second Todo', () => {
    const before = [
      { id: 0, text: 'Hey!', completed: true },
      { id: 1, text: 'Ho!', completed: false }
    ]
    const action = { type: TOGGLE_TODO, payload: { id: 0 } }
    const after = [
      { id: 0, text: 'Hey!', completed: false },
      { id: 1, text: 'Ho!', completed: false }
    ]
    expect(todos(before, action)).toEqual(after)
  })

  test('should return initialState when state before is undefined', () => {
    const before = undefined
    const action = { type: 'ANY' }
    const after = initialState
    expect(todos(before, action)).toEqual(after)
  })
})