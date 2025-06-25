export const widget = reactive<any>({
  uuid: '0',
  name: 'C1',
  props: {
    name: 'C1',
    style: {
    },
  },
  slots: {
    default: [
      {
        uuid: '1',
        name: 'C1',
        props: {
          name: '0->1(更新)',
          style: {
          },
        },
        slots: {
          default: [
            {
              uuid: '3',
              name: 'C2',
              props: {
                name: '0->1->3',
                style: {

                },
              },
            },
            {
              uuid: '4',
              name: 'C2',
              props: {
                name: '0->1->4',
                style: {

                },
              },
            },
          ],
          extra: [
            {
              uuid: '5',
              name: 'C2',
              props: {
                name: '0->1->5',
                style: {

                },
              },
            },
            {
              uuid: '6',
              name: 'C2',
              props: {
                name: '0->1->6',
                style: {

                },
              },
            },
          ],
        },
      },
      {
        uuid: '2',
        name: 'C3',
        props: {
          name: '0->2',
          style: {

          },
        },
      },
    ],
  },
})

setInterval(() => {
  widget.slots.default[0].props.style.height = `${Math.random() * 10 + 300}px`
  widget.slots.default[1].props.t = Date.now()
}, 1000)

setTimeout(() => {
  const uuid = Math.random().toString(36).substring(2, 15)
  widget.slots.default.push({
    uuid: `${uuid}`,
    name: `C2`,
    props: {
      name: `0->${uuid}`,
      style: {
        border: '1px solid red',
      },
    },
  })
}, 5000)

setTimeout(() => {
  const uuid = Math.random().toString(36).substring(2, 15)
  widget.slots.default[0].slots!.default.push({
    uuid: `${uuid}`,
    name: `C2`,
    props: {
      name: `0->1->${uuid}`,
      style: {
        border: '1px solid blue',
      },
    },
  })
}, 10000)
