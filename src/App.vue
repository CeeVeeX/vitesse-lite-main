<script setup lang="ts">
import { createBlock, createElementBlock, openBlock, resolveDynamicComponent } from 'vue'
import { cs } from './components'
import { widget } from './w'

provide('widget', widget)
inject('widget', widget)

function cc(widget: any) {
  let slots: any

  const slotsKeys = Object.keys(widget.slots || {})

  if (widget.slots && slotsKeys.length) {
    if (slotsKeys.length === 1 && slotsKeys[0] === 'default') {
      slots = () => widget.slots![slotsKeys[0]].map((w: any) => createBlock(cc(w)))
    }
    else {
      slots = {}
      for (const key of slotsKeys) {
        slots[key] = () => widget.slots![key].map((w: any) => createBlock(cc(w)))
      }
    }
  }

  console.log('cc', widget.name, slots)

  const props = widget.props

  return defineComponent({
    name: 'Cc',
    setup() {
      onUpdated(() => {
        console.log(`${widget.name} updated`)
      })
      return (_ctx: any, _cache: any) => {
        return h(cs[widget.name], props, slots)
      }
    },
  })
}

const c = defineComponent({
  name: 'App',
  setup() {
    return (_ctx: any, _cache: any) => {
      return openBlock(), createBlock(resolveDynamicComponent(cc(widget.value)))
    }
  },
})
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <component :is="c" />
  </main>
</template>
