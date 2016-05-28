export const SELECT_TAG = 'SELECT_TAG'
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

export function selectTag(tag) {
  return {type: SELECT_TAG, tag}
}

export function toggleDrawer() {
  return {type: TOGGLE_DRAWER}
}
