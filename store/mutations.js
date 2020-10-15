export default {
  setUrlErrorStatus (state, { urlHasError, urlMsg }) {
    state.urlHasError = urlHasError
    state.urlErrorMessage = urlMsg
  },
  setSlugErrorStatus (state, { slugHasError, slugMsg }) {
    state.slugHasError = slugHasError
    state.slugErrorMessage = slugMsg
  },
  setGeneratedStatus (state, { generated }) {
    state.generated = generated
  },
  resetAll (state) {
    state.url = ''
    state.code = ''
    state.urlHasError = false
    state.urlErrorMessage = ''
    state.slugHasError = false
    state.slugErrorMessage = ''
    state.generated = false
  },
  setShowModalStatus (state, { status }) {
    state.showSaveModal = status
    console.log(state.showSaveModal)
  }
}
