export const SET_MESSAGE = 'SET_MESSAGE'
export const HIDE_MESSAGE = 'HIDE_MESSAGE'

export function setMessage(message){
  return {type: SET_MESSAGE, message}
}

export function hideMessage(){
  return {type: HIDE_MESSAGE}
}
