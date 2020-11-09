<template>
  <div class="site-content vh-100">
    <section class="content-section h-100">
      <div class="container-fluid h-100">
        <div class="row align-items-center justify-content-center h-100">
          <div class="col-12 col-md-5 col-lg-4 col-xl-3">
            <h1 class="text-rbl mb-5 text-center">
              Logo
            </h1>
            <Edit />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Edit from '../../../components/Edit'

export default {
  components: {
    Edit
  },
  computed: {
    ...mapGetters({
      getGeneratedStatus: 'getGeneratedStatus'
    })
  }
}
</script>

<style></style>
