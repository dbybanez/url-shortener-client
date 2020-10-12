<template>
  <div class="form">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        :class="(!urlError) ? '' : 'is-invalid'"
        placeholder="URL"
        v-model="url">
      <div v-if="urlError" class="invalid-feedback">
        {{ urlError }}
      </div>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Slug">
    </div>
    <p class="mb-1 text-center">Preview:</p>
    <h4 class="mb-5 text-center"><code>https://tinyy.link/slug</code></h4>
    <button
      class="btn btn-primary btn-block"
      @click="validateURL">Generate a tinyy.link</button>
  </div>
</template>

<script>
import * as Yup from 'yup'

export default {
  name: 'Default',
  data () {
    return {
      url: '',
      urlError: null,
      slugError: null
    }
  },
  methods: {
    async validateURL () {
      const url = this.url
      const schema = Yup.object().shape({
        url: Yup.string().trim().url('Oops, please provide a valid URL.').required('Are we forgetting something? Please provide a URL')
      })
      try {
        await schema.validate({
          url
        })
        this.urlError = null
      } catch (error) {
        this.urlError = error.message
      }
    }
  }
}
</script>

<style></style>
