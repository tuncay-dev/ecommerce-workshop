<template>
  <div>
    <Header />
    <SearchBar />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Search from "~/components/Search/SearchBar.vue";
const { searchBarState } = useSearchBarState();
</script>
