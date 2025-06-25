<script lang='ts' setup>
defineProps<{
  name?: string
  t: number
}>()

onMounted(() => {
  console.log('C3 mounted')
})
</script>

<template>
  <div m-1 px-1 style="border: 1px solid #fff;">
    C3: {{ name }} {{ t }}
  </div>
</template>

<style>

</style>
