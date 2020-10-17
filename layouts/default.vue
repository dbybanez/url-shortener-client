<template>
  <div>
    <Nuxt />
    <Save :status="modalStatus"/>
    <div
      class="modal-backdrop fade show"
      v-if="modalStatus"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Save from '../components/Save'
export default {
  components: {
    Save
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      modalStatus: 'getModalOpenStatus'
    })
  }
}
</script>

<style></style>
