<script lang='ts' setup>
onUpdated(() => {
  console.log('C1 updated 内部')
})
</script>

<template>
  <div>
    C1
    <div>
      <slot />
    </div>
  </div>
</template>

<style>

</style>
