<template>
  <div class="form">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        :class="(!urlError) ? '' : 'is-invalid'"
        placeholder="URL"
        v-model="url"
        @keyup.delete="resetURL">
      <div v-if="urlError" class="invalid-feedback">
        {{ urlError }}
      </div>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        :class="(!slugError) ? '' : 'is-invalid'"
        placeholder="Slug"
        v-model="slug"
        @keyup.delete="resetSlug">
      <div v-if="slugError" class="invalid-feedback">
        {{ slugError }}
      </div>
    </div>
    <p class="mb-1 text-center">Preview:</p>
    <h4 class="mb-5 text-center"><code>https://tinyy.link/slug</code></h4>
    <button
      class="btn btn-primary btn-block"
      @click="validateURL(); validateSlug();">Generate a tinyy.link</button>
  </div>
</template>

<script>
import * as Yup from 'yup'

export default {
  name: 'Default',
  data () {
    return {
      url: '',
      slug: '',
      urlError: null,
      slugError: null
    }
  },
  methods: {
    async validateURL () {
      const url = this.url
      const schema = Yup.object().shape({
        url: Yup.string().trim().url('Oops, please provide a valid URL. 🥺').required('Are we forgetting something? Please provide a URL. 🤨')
      })
      try {
        await schema.validate({
          url
        })
        this.urlError = null
      } catch (error) {
        this.urlError = error.message
      }
    },
    async validateSlug () {
      const slug = this.slug
      const schema = Yup.object().shape({
        slug: Yup.string().trim().min(0).max(10, 'Maximum of 10 alphanumeric characters only. Consider changing your slug. 🐌').matches(/^[a-zA-Z0-9]*$/g, {
          message: 'Only numbers and letters allowed. Sorry. 😬',
          exludeEmptyString: false
        })
      })
      try {
        await schema.validate({
          slug
        })
        this.slugError = null
      } catch (error) {
        this.slugError = error.message
      }
    },
    resetURL () {
      this.urlError = null
    },
    resetSlug () {
      this.slugError = null
    }
  }
}
</script>

<style></style>
