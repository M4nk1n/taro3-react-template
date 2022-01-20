import { observable, runInAction } from 'mobx'

const counterStore = observable({
  counter: 0,
  other: 0,

  updateInAction: () => {
    runInAction(() => {
      counterStore.counter++
      counterStore.other--
    })
  },

  increment: () => {
    counterStore.counter++
    counterStore.other++
  },

  decrement: () => {
    counterStore.counter--
    counterStore.other--
  },

  incrementAsync: () => {
    setTimeout(() => {
      counterStore.counter++
      counterStore.other++
    }, 1000)
  }
})

export default counterStore