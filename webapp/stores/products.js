import {defineStore} from 'pinia';
import {useFetch} from 'nuxt/app';
import {toRaw} from 'vue';

export const useProductsStore = defineStore('ProductsStore', {
  state: () => ({
    products: [],
    categories: [],
    currency: 'EUR'
  }),
  actions: {
    async fillInProductsStore() {
      const {data} = await useFetch('https://dummyjson.com/products?limit=100');
      const newProducts = data._value.products;
      this.products = toRaw(newProducts);
    },
    async getProductById(productId) {
      if (this.products.length === 0) await this.fillInProductsStore();
      return this.products.find((product) => product.id == productId);
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
});
