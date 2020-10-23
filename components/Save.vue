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
            <h5 class="text-center mb-4">tinyy.link saved!</h5>
            <p class="text-center">To edit your URL, click the link below and enter your unique code:  test<pre><code class="text-danger">ZCEWFG</code></pre></p>
            <p class="text-center"><a href="https://tinyy.link/FEJWOVdw2/edit">https://tinyy.link/FEJWOVdw2/edit</a></p>
          </div>
          <div class="modal-footer border-top-0">
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click="openCloseModal">Awesome, thanks!</button>
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
