export default {
  getUrl: state => state.url,
  getCode: state => state.code,
  getLink: state => state.link,
  getSlug: state => state.slug,
  getUrlHasError: state => state.urlHasError,
  getUrlErrorMessage: state => state.urlErrorMessage,
  getSlugHasError: state => state.slugHasError,
  getSlugErrorMessage: state => state.slugErrorMessage,
  getGeneratedStatus: state => state.generated,
  getModalOpenStatus: state => state.isModalOpen 
}
