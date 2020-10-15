<template>
  <div class="form">
    <div class="form-group">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label=""
          aria-describedby="generated-link"
          readonly>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary btn-icon" type="button" id="button-addon2"><i class="material-icons-round">content_copy</i></button>
        </div>
      </div>
    </div>
    <button
      class="btn btn-primary btn-block"
      @click="generateAnother">Generate another tinyy.link</button>
    <button
      class="btn btn-outline-primary btn-block mb-5"
      @click="saveURL">Save tinyy.link for later</button>
    <button
      class="btn btn-dark btn-block">Support this project</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Generated',
  methods: {
    ...mapActions({
      generateAnother: 'generateAnother',
      saveURL: 'saveURL'
    })
  }
}
</script>

<style>

</style>
