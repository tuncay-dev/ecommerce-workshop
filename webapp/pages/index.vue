<template>
  <div>
    <MainLayout>
      <Products :products="products" :currency="currency" />
    </MainLayout>
  </div>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import Products from "~/components/products";
import { useProductsStore } from "~/stores/products.js";
import { storeToRefs } from "pinia";
const productsStore = useProductsStore();
productsStore.fillInProductsStore();
const { products, currency } = storeToRefs(productsStore);
</script>
