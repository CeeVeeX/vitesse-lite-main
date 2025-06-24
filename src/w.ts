export const widget = ref({
  uuid: '0',
  name: 'C1',
  props: {
    style: {
      // width: '100px',
      // height: '100px',
    },
  },
  slots: {
    default: [
      {
        uuid: '1',
        name: 'C2',
        props: {
          style: {
            width: '100px',
            height: '100px',
            border: '1px solid red',
          },
        },
      },
      {
        uuid: '2',
        name: 'C3',
        props: {
          style: {
            width: '100px',
            height: '100px',
            border: '1px solid red',
          },
        },
      },
    ],
  },
})

setInterval(() => {
  widget.value.slots.default[0].props.style.height = `${Math.random() * 100}px`
}, 1000)
