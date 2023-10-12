<template class="antialiased">
  <MainLayout>
    <div class="bg-white shadow-sm sticky top-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div>
              <!-- Update this line to just a div-->
              <div
                class="h-64 md:h-80 rounded-lg mb-4 flex w-full m-auto items-center justify-center"
              >
                <img
                  :src="image"
                  :alt="product.description"
                  class="h-64 md:h-80 rounded-md"
                />
              </div>

              <div class="flex -mx-2 mb-4">
                <div v-for="(i, index) in product.images" :key="index">
                  <div class="flex-1 px-2">
                    <button
                      @click="image = i"
                      :class="{
                        'ring-2 ring-indigo-300 ring-inset': image === i,
                      }"
                      class="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center"
                    >
                      <img :src="i" :alt="product.description" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex-1 px-4">
            <h2
              class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"
            >
              {{ product.title }}
            </h2>
            <p class="text-gray-500 text-sm">
              By
              <a href="#" class="text-indigo-600 hover:underline">
                {{ product.brand }}
              </a>
            </p>

            <div class="flex items-center space-x-4 my-4">
              <div>
                <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span class="text-indigo-400 mr-1 mt-1">
                    {{ currencySym }}
                  </span>
                  <span class="font-bold text-indigo-600 text-3xl">
                    {{ product.price }}
                  </span>
                </div>
              </div>
              <div class="flex-1">
                <p class="text-green-500 text-xl font-semibold">
                  ~{{ Math.round(product.discountPercentage) }}
                </p>
                <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
              </div>
            </div>

            <p class="text-gray-500">{{ product.description }}</p>

            <div class="flex py-4 space-x-4">
              <div class="relative">
                <div
                  class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold"
                >
                  Qty
                </div>
                <select
                  v-model="count"
                  class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>

                <svg
                  class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>

              <button
                @click="addProductToCart"
                type="button"
                class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { storeToRefs } from "pinia";
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
import { useProductsStore } from "~/stores/products";
const productsStore = useProductsStore();
const userStore = useUserStore();

const {
  params: { id },
} = useRoute();

const productSkeleton = {
  id: "",
  name: "",
  price: "",
  brand: "",
  images: [0, 1, 2, 3, 4],
  thumbnail: [],
  description: "",
  discountPercentage: "",
};
const product = useState("product", () => productSkeleton);
const currencySym = useState("currencySym", () => "");
const image = useState("image", () => "");
const count = useState("count", () => 1);

onBeforeMount(() => {
  findProduct();
});

const findProduct = async () => {
  const { getProductById } = productsStore;
  const productById = await getProductById(id);
  product.value = productById;
  image.value = productById.thumbnail;
  currencySym.value = productsStore.currency === "EUR" ? "€" : "$";
};

const addProductToCart = async () => {
  const { addItemToCart } = userStore;
  addItemToCart(product.value, count.value);
};
</script>
