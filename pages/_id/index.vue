<template>
  <div>
    {{ $route.params.id }}
    <PageError />
    if params not found, show PageError
  </div>
</template>

<script>
import PageError from '../../components/404'
export default {
  components: {
    PageError
  }
}
</script>
<style></style>
