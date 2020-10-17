import { IMe, TYPESETME } from 'src/store/actions/me'

export default function (state = {}, action: { type: string; data: IMe }) {
  switch (action.type) {
    case TYPESETME: {
      return Object.assign({}, state, action.data)
    }
    default:
      return state
  }
}
