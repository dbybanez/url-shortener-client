<template>
  <div class="site-content vh-100">
    <section class="content-section h-100">
      <div class="container-fluid h-100">
        <div class="row align-items-center justify-content-center h-100">
          <div class="col-12 col-md-5 col-lg-4 col-xl-3 text-center">
            <div class="spinner-border mb-3" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <h5>Supercharging your URL...</h5>
            <PageError />
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
  async mounted () {
    try {
      const slug = this.$route.params.id
      const url = await 'https://google.com'
      if (slug === 'QWERTY') {
        window.location = url
      } else {
        console.log('Not found: 404')
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style></style>
