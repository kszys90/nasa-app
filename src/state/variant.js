export const CHANGE = 'variant/CHANGE'

export const changeVariantAction = (variant) => ({
  type: CHANGE,
  payload: { variant }
})

const initialState = {
  variant: 'dark'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        variant: action.payload.variant
      }
    default:
      return state
  }
}

export default reducer
