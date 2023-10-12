<template>
  <div class="bg-white">
    <MainLayout>
      <div class="container mx-auto mt-10">
        <div class="flex shadow-md my-10">
          <!-- Cart -->
          <Cart />
          <!-- Summary -->
          <CartSummary />
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script setup>
import Cart from "~/components/cart";
import MainLayout from "~/layouts/MainLayout.vue";
import CartSummary from "~/components/cart/summary.vue";
const { searchBarState, toggleSearchBarState } = useSearchBarState();
if (searchBarState === true) toggleSearchBarState();
</script>
