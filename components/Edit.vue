<template>
  <div class="form">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder=""
        aria-label=""
        aria-describedby="generated-link"
        :value="getID"
        readonly>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Code">
    </div>
    <button
      class="btn btn-primary btn-block">Edit URL</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Default',
  data () {
    return {
      url: '',
      slug: ''
    }
  },
  methods: {
    ...mapActions({
      validate: 'validate',
      resetURL: 'resetURL',
      resetSlug: 'resetSlug'
    })
  },
  computed: {
    ...mapGetters({
      urlHasError: 'getUrlHasError',
      urlErrorMessage: 'getUrlErrorMessage',
      slugHasError: 'getSlugHasError',
      slugErrorMessage: 'getSlugErrorMessage'
    }),
    getID () {
      return 'https://tinyy.link/' + this.$route.params.id
    }
  }
}
</script>

<style></style>
