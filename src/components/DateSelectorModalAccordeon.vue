<template>
  <div>
    <transition name="fade">
      <section class="years-accordeon" v-if="showYearsList === true">
        <ul class="years-accordeon__list">
          <li ref="year" class="years-accordeon__item years-accordeon__item_hover" v-for="item in arrYear" :key="item"
              :class="{'years-accordeon__current-year': item === currentYearAccordeon, 'years-accordeon__item_selected' : item == selectedYear}"
              @click="selectYear(item)">
            {{ item }}
          </li>
        </ul>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: "DateSelectorModalAccordeon",
  props: ['showYearsList', 'selectedYear', 'arrYear'],
  data() {
    return {
      currentYearAccordeon: new Date().getFullYear(),
    }
  },
  updated() {
    this.handlerScroll()
  },
  methods: {
    selectYear(item) {
      this.$emit('selectedYear', this.tempYear = item)
      this.$emit('hideYearsList')
    },
    handlerScroll() {
      this.$refs.year.forEach(item => {
        if (item.innerText == this.selectedYear) {
          item.scrollIntoView({block: 'center'})
        }
      })
    }
  }
}
</script>

<style scoped>
/* скрытие скролла в браузере Chrome */
.years-accordeon::-webkit-scrollbar {
  width: 0
}

.years-accordeon {
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  height: 247px;
  overflow-y: scroll;
  user-select: none;
  scrollbar-width: none; /* скрытие скролла в браузере FireFox */
}

.years-accordeon .years-accordeon__list {
  display: grid;
  grid-auto-rows: auto;
  list-style: none;
  width: 100%;
}

.years-accordeon .years-accordeon__item {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  color: #000;
  font: normal 0.9rem sans-serif;
  cursor: pointer;
  transition: all .5s;
}

.years-accordeon__item.years-accordeon__current-year {
  color: var(--secondary-color);
  font: bold 1rem sans-serif;
}

.years-accordeon__item.years-accordeon__item_selected {
  color: #2879D3;
  font-weight: bold;
  font-size: 1.3rem;
  background-color: #e3e3e3;
}

.years-accordeon__item_hover:not(.years-accordeon__item_selected):hover {
  background-color: #f1f0f0;
}

@media (prefers-reduced-motion: no-preference) {
  .fade-enter-active, .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
