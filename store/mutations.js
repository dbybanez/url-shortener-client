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
  setData (state, { newUrl, newLink, newCode, newSlug }) {
    state.url = newUrl
    state.code = newCode
    state.link = newLink
    state.slug = newSlug
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
    state.isModalOpen = status
    console.log(state.isModalOpen)
  }
}
