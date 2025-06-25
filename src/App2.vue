<script setup lang="ts">
// function cc(widget: any) {
//   const slots = widget.slots && Object.entries(widget.slots).reduce((acc, [key, value]: any) => {
//     acc[key] = withCtx(() => {
//       // console.log('cc', widget.name, widget.uuid, key, value)
//       return [
//         (openBlock(true), createElementBlock(Fragment, null, renderList(value, (it) => {
//           return openBlock(), createBlock(cc(it))
//         }), 128)),
//       ]
//       // return value.map((w: any) => {
//       //   return h(cc(w), { key: w.uuid })
//       // })
//     })

//     return acc
//   }, {} as Record<string, any>)

//   return defineComponent({
//     name: 'Cc',
//     setup() {
//       // console.log('cc', widget.name, widget.uuid)

//       const props = widget.props

//       onUpdated(() => {
//         console.log(`${widget.props.name} updated`)
//       })

//       return (_ctx: any, _cache: any) => {
//         return createVNode(cs[widget.name], {
//           ...props,
//           key: widget.uuid,
//         }, slots, 8, Object.keys(props))
//       }
//     },
//   })
// }

// function ccs(widgets: any[]) {
//   return renderList(widgets, (widget) => {
//     const c = defineComponent({
//       name: 'Cc',
//       props: {
//         widget: {
//           type: Object,
//           required: true,
//         },
//       },
//       setup(props) {
//         const { widget } = toRefs(props)

//         onUpdated(() => {
//           console.log(`${widget.value.props.name} updated`)
//         })

//         return (_ctx: any, _cache: any) => {
//           return createVNode(cs[widget.value.name], widget.value.props, widget.value.slots && Object.entries(widget.value.slots).reduce((acc, [key, value]: any) => {
//             acc[key] = withCtx(() => [
//               (openBlock(true), createElementBlock(Fragment, null, ccs(value), 128)),
//             ])

//             return acc
//           }, {} as Record<string, any>), 8, ['style'])
//         }
//       },
//     })
//     return openBlock(), createBlock(c, {
//       widget,
//     })
//   })
// }
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <C1 name="C1">
      <C1 name="0->1(更新)">
        <C2 name="0->1->3" />
        <C2 name="0->1->4" />
        <template #extra>
          <C2 name="0->1->5" />
          <C2 name="0->1->6" />
        </template>
      </C1>
    </C1>
  </main>
</template>
