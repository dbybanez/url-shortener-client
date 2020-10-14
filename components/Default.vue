<template>
  <div class="form">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        :class="(!urlHasError) ? '' : 'is-invalid'"
        placeholder="URL"
        v-model="url"
        @keyup.delete="resetURL">
      <div v-if="urlHasError" class="invalid-feedback">
        {{ urlErrorMessage }}
      </div>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        :class="(!slugHasError) ? '' : 'is-invalid'"
        placeholder="Slug"
        v-model="slug"
        @keyup.delete="resetSlug">
      <div v-if="slugHasError" class="invalid-feedback">
        {{ slugErrorMessage }}
      </div>
    </div>
    <p class="mb-1 text-center">Preview:</p>
    <h5 class="mb-5 text-center"><code>https://tinyy.link/{{ slug? slug : 'slug' }}</code></h5>
    <button
      class="btn btn-primary btn-block"
      @click="validate({ url, slug })">Generate a tinyy.link</button>
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
    })
  }
}
</script>

<style></style>
