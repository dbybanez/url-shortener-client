<template>
  <div class="site-content vh-100">
    <section class="content-section h-100">
      <div class="container-fluid h-100">
        <div class="row align-items-center justify-content-center h-100">
          <div class="col-12 col-md-5 col-lg-4 col-xl-3 text-center">
            <div v-if="found" class="spinner-border mb-3" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <h5 v-if="found">Supercharging your URL...</h5>
            <PageError v-if="!found"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageError from '../../components/404'
export default {
  components: {
    PageError
  },
  data () {
    return {
      found: true
    }
  },
  async mounted () {
    try {
      // get slug
      const slug = this.$route.params.id
      // look for slug in database
      const url = await 'https://google.com'
      // if it exists, redirect
      if (slug === 'QWERTY') {
        setTimeout(() => {
          window.location = url
        }, 3000)
      } else {
        // else, show 404
        this.found = false
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style></style>
