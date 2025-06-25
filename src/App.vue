<script setup lang="ts">
import { createBlock, createElementBlock, createVNode, Fragment, openBlock, renderList, withCtx } from 'vue'
import { cs } from './components'
import { widget } from './w'

// 预定义组件工厂函数，避免重复定义组件
function createCcComponent() {
  return defineComponent({
    name: `Cc${Math.random().toString(36).substring(2, 15)}`, // 确保组件名唯一
    props: {
      widget: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const widget = toRef(props, 'widget')

      onUpdated(() => {
        console.log(`${widget.value.props.name} updated`)
      })

      return (_ctx: any, _cache: any) => {
        return createVNode(cs[widget.value.name], {
          ...widget.value.props,
          key: widget.value.uuid,
        }, widget.value.slots && Object.entries(widget.value.slots).reduce((acc, [key, value]: any) => {
          acc[key] = withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, ccs(value), 128)),
          ])
          return acc
        }, {} as Record<string, any>), 8, ['style'])
      }
    },
  })
}

// 缓存组件定义
const CcComponent = createCcComponent()

function ccs(widgets: any[]) {
  return renderList(widgets, (widget) => {
    return openBlock(), createBlock(CcComponent, {
      widget,
      key: widget.uuid, // 确保 key 稳定
    })
  })
}

const c = defineComponent({
  name: 'App',
  props: {
    widget: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const widget = (props.widget)

    return (_ctx: any, _cache: any) => {
      return openBlock(), createBlock(
        cs[widget.name],
        widget.props,
        widget.slots && Object.entries(widget.slots).reduce((acc, [key, value]: any) => {
          acc[key] = withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, ccs(value), 128)),
          ])
          return acc
        }, {} as Record<string, any>),
      )
    }
  },
})
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200" flex>
    <component :is="c" :widget="widget" />
  </main>
</template>
