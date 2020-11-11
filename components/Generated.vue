<template>
  <div class="form">
    <div class="form-group">
      <div class="input-group mb-5">
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label=""
          aria-describedby="generated-link"
          :value="getLink"
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
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Generated',
  methods: {
    ...mapActions({
      generateAnother: 'generateAnother',
      saveURL: 'saveURL'
    })
  },
  computed: {
    ...mapGetters({
      getLink: 'getLink'
    })
  }
}
</script>

<style>

</style>
