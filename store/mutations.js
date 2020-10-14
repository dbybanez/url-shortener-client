export default {
  setUrlErrorStatus (state, { urlHasError, urlMsg }) {
    state.urlHasError = urlHasError
    state.urlErrorMessage = urlMsg
  },
  setSlugErrorStatus (state, { slugHasError, slugMsg }) {
    state.slugHasError = slugHasError
    state.slugErrorMessage = slugMsg
  }
}
