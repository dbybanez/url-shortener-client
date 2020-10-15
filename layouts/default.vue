<template>
  <div>
    <Nuxt />
    <save :status="showModal"/>
    <!-- <div
      class="modal-backdrop fade show"
      v-if="modalStatus"></div> -->
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
    return {
      showModal: this.modalStatus
    }
  },
  computed: {
    ...mapGetters({
      modalStatus: 'getshowSaveModalStatus'
    })
  }
}
</script>

<style></style>
