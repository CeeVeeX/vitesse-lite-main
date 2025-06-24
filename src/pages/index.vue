<script setup lang="ts" generic="T extends any, O extends any">
import { useTime } from '~/composables/useTime'

const { time } = useTime()

const a = ref(false)

const ac = defineComponent({
  name: 'AC1',
  props: {
    t: null,
  },
  setup(props) {
    console.log('ac setup', time.value)
    return () => h('div', {
      style: {
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
      },
    }, Date.now())
  },
})

onUpdated(() => {
  console.log('index updated')
})
</script>

<template>
  <div>
    <C1 v-if="a" />
    <AC1
      v-else
      :style="{
        width: '100px',
        height: '100px',
      }" :t="time"
    />
    <AC2 />
    <ac />
  </div>
</template>
