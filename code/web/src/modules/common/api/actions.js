// Actions Types
import axios from 'axios/index'
import { routeApi } from '../../../setup/routes'

//this is resonsible for showing and hiding the subscribe/unsubscribe messages
//we made need to adjust the timing of this message or even when this is called

export const MESSAGE_SHOW = 'COMMON_MESSAGE_SHOW'
export const MESSAGE_HIDE = 'COMMON_MESSAGE_HIDE'

// Actions
export function messageShow(message) {
  return { type: MESSAGE_SHOW, message }
}

export function messageHide() {
  return { type: MESSAGE_HIDE }
}

export function upload(data) {
  return dispatch => {
    return axios.post(routeApi + '/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

