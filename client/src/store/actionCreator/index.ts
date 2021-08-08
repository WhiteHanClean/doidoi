import * as ItemActionCreators from './items'
import * as GalleryActionCreators from './gallery'
import * as UserActionCreators from './user'

const ACTION_CREATOR = {
    ...ItemActionCreators,
    ...GalleryActionCreators,
    ...UserActionCreators,
}

export default ACTION_CREATOR
