import * as Yup from 'yup'
// import axios from 'axios'

export default {
  validate ({ state, dispatch }, val) {
    const url = val.url
    const slug = val.slug
    dispatch('validateURL', url)
    dispatch('validateSlug', slug)
    if (!state.urlHasError && !state.slugHasError) {
      // console.log('No errors!')
      dispatch('generateURL', { url, slug })
    } else {
      // console.log('There are errors')
      console.log('URL: ' + state.urlHasError)
      console.log('Slug: ' + state.slugHasError)
    }
  },
  validateURL ({ commit }, inputURL) {
    const url = inputURL
    let urlHasError = null
    let urlMsg = ''
    const schema = Yup.object().shape({
      url: Yup.string().trim().url('Oops, please provide a valid URL. 🥺').required('Are we forgetting something? Please provide a URL. 🤨')
    })
    try {
      schema.validateSync({
        url
      })
      urlHasError = false
      urlMsg = ''
      commit('setUrlErrorStatus', { urlHasError, urlMsg })
    } catch (error) {
      urlHasError = true
      urlMsg = error.message
      commit('setUrlErrorStatus', { urlHasError, urlMsg })
    }
  },
  validateSlug ({ commit }, inputSlug) {
    const slug = inputSlug
    let slugHasError = null
    let slugMsg = ''
    const schema = Yup.object().shape({
      slug: Yup.string().trim().min(0).max(10, 'Maximum of 10 alphanumeric characters only. Consider changing your slug. 🐌').matches(/^[a-zA-Z0-9]*$/g, {
        message: 'Only numbers and letters allowed. Sorry. 😬',
        exludeEmptyString: false
      })
    })
    try {
      schema.validateSync({
        slug
      })
      slugHasError = false
      slugMsg = ''
      commit('setSlugErrorStatus', { slugHasError, slugMsg })
    } catch (error) {
      slugHasError = true
      slugMsg = error.message
      commit('setSlugErrorStatus', { slugHasError, slugMsg })
    }
  },
  resetURL ({ commit }) {
    const urlHasError = false
    const urlMsg = ''
    commit('setUrlErrorStatus', { urlHasError, urlMsg })
  },
  resetSlug ({ commit }) {
    const slugHasError = false
    const slugMsg = ''
    commit('setSlugErrorStatus', { slugHasError, slugMsg })
  },
  generateURL ({ commit }, data) {
    const generated = true
    commit('setGeneratedStatus', { generated })
  },
  generateAnother ({ commit }) {
    commit('resetAll')
  },
  saveURL ({ state, commit }) {
    let status = state.showSaveModal
    const body = document.body
    if (status) {
      status = false
      body.classList.remove('modal-open')
    } else {
      status = true
      body.classList.add('modal-open')
    }
    commit('setShowModalStatus', { status })
  }
}
