<template>
  <transition name="slide-fade">
    <div
      class="modal fade"
      :class="status ? 'show' : ''"
      tabindex="-1">
      <div
        class="modal-dialog modal-sm modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="openCloseModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h5 class="text-center">tinyy.link saved!</h5>
            <h4 class="text-center">ZCEWFG</h4>
            <p class="text-center">Use this code to edit the URL. Visit the link below to edit the URL.</p>
            <p class="text-center">https://tinyy.link/slug/edit</p>
          </div>
          <div class="modal-footer border-top-0">
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click="openCloseModal">Got it, thanks!</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Save',
  props: ['status'],
  methods: {
    ...mapActions({
      openCloseModal: 'openCloseModal'
    })
  }
}
</script>

<style>

</style>
