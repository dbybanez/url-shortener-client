<template>
  <div class="site-content vh-100">
    <section class="content-section h-100">
      <div class="container-fluid h-100">
        <div class="row align-items-center justify-content-center h-100">
          <div class="col-12 col-md-5 col-lg-4 col-xl-3">
            <h1 class="text-rbl mb-5 text-center">
              Logo
            </h1>
            <h3 class="text-rbl text-center" v-if="getGeneratedStatus">Congratulations!</h3>
            <p class="text-center mb-4" v-if="getGeneratedStatus">You have created a tinyy.link! <br />You're tinyy.link is:</p>
            <Default v-if="!getGeneratedStatus"/>
            <Generated v-if="getGeneratedStatus"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Default from '../components/Default'
import Generated from '../components/Generated'

export default {
  components: {
    Default,
    Generated
  },
  computed: {
    ...mapGetters({
      getGeneratedStatus: 'getGeneratedStatus'
    })
  }
}
</script>

<style></style>
