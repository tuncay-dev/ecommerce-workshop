import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    cart: []
  }),
  actions: {
    addItemToCart(product, count = 1) {
      const indexForExistingItem = this.cart.findIndex(
        (item) => product.id == item.product.id
      );
      if (indexForExistingItem !== -1) {
        const item = this.cart[indexForExistingItem];
        item.count = item.count + count;
        this.cart[indexForExistingItem] = item;
      } else {
        this.cart.unshift({product, count});
      }
    },
    removeItemFromCart(product, count = 'all') {
      if (count === 'all') {
        const indexForItemToBeDeleted = this.cart.findIndex(
          (item) => product.id == item.product.id
        );
        if (indexForItemToBeDeleted !== -1) {
          this.cart.splice(indexForItemToBeDeleted, 1);
        }
      }
    }
  },
  getters: {
    itemsInCart() {
      return this.cart.length;
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
});
