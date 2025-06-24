const data = ref(Date.now())

setInterval(() => {
  data.value = Date.now()
}, 1000)

export function useTime() {
  return {
    time: data,
  }
}
