<template>
  <div id="app">
    <section class="page">
      <DatePicker />
    </section>
  </div>
</template>

<script>
import DatePicker from "./components/DatePicker";

export default {
  name: "App",
  components: {
    DatePicker
  }
};
</script>

<style>
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page {
  display: grid;
  place-items: center;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
