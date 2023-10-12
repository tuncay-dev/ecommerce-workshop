<template>
  <div v-if="searchBarState" class="flex justify-center items-center">
    <div class="container mx-auto bg-indigo-500 rounded-lg p-14">
      <form>
        <div
          class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between"
        >
          <input
            class="text-base text-gray-400 flex-grow outline-none px-2"
            type="text"
            placeholder="Search for a product"
            @focusin="searching = true"
            @focusout="searching = false"
          />
          <Icon
            v-if="searching"
            name="eos-icons:loading"
            size="25"
            class="mr-2"
          />
          <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto">
            <button
              @click="searching = false"
              class="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const searching = useState("searching", () => false);
const { searchBarState } = useSearchBarState();
</script>
