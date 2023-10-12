<template>
  <div id="summary" class="w-1/4 px-8 py-10">
    <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
    <div class="flex justify-between mt-10 mb-5">
      <span class="font-semibold text-sm uppercase">
        Items {{ userStore.itemsInCart }}
      </span>
    </div>
    <div>
      <label class="font-medium inline-block mb-3 text-sm uppercase"
        >Shipping</label
      >
      <select class="block p-2 text-gray-600 w-full text-sm">
        <option>Standard shipping - {{ currencySym }}10.00</option>
      </select>
    </div>
    <div class="py-10">
      <label
        for="promo"
        class="font-semibold inline-block mb-3 text-sm uppercase"
        >Promo Code</label
      >
      <input
        type="text"
        id="promo"
        placeholder="Enter your code"
        class="p-2 text-sm w-full"
      />
    </div>
    <button
      class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
    >
      Apply
    </button>
    <div class="border-t mt-8">
      <div class="flex font-semibold justify-between py-6 text-sm uppercase">
        <span>Total cost</span>
        <span>{{ currencySym }}{{ cartGrandTotal() }}</span>
      </div>
      <button
        class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "~/stores/user";
import { useProductsStore } from "~/stores/products";

// Stores
const userStore = useUserStore();
const productsStore = useProductsStore();

// States
const currencySym = useState("currencySym", () => "");
const userCart = useState("userCart", () => cartSkeleton);

// BeforeMountHook
onBeforeMount(() => {
  const { currency } = storeToRefs(productsStore);
  const { cart } = storeToRefs(userStore);
  currencySym.value = currency.value === "EUR" ? "€" : "$";
  userCart.value = cart;
});

// CartGrandTotalFunction
const cartGrandTotal = () => {};
</script>
