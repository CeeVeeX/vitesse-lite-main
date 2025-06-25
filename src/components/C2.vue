<script lang='ts' setup>
defineProps<{
  name?: string
}>()

onMounted(() => {
  console.log('C2 mounted')
})
</script>

<template>
  <div m-1 px-1 style="border: 1px solid #fff;">
    C2: {{ name }} = {{ Date.now() }}
  </div>
</template>

<style>

</style>
