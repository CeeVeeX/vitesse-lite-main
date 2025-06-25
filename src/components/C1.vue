<script lang='ts' setup>
defineProps<{
  name?: string
}>()

onMounted(() => {
  console.log('C1 mounted')
})
</script>

<template>
  <div m-1 style="border: 10px solid #401313;">
    <div px-1 bg-hex-401313>
      C1: {{ name }}
    </div>
    <div p-1 bg-yellow>
      <slot />
    </div>
    <div p-1 bg-blue>
      <slot name="extra" />
    </div>
  </div>
</template>

<style>

</style>
