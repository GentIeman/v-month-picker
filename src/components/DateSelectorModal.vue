<template>
  <section class="popup">
    <header class="popup__header">
      <div class="popup__header-container">
        <h1 class="popup__current-month" @click="showYearsList = false"> {{ currentMonth }}</h1>
        <h3 class="popup__current-year popup__current-year_hover" @click="showYearsList = !showYearsList">
          {{ selectedYear }}
        </h3>
      </div>
    </header>
    <DateSelectorModalAccordeon :showYearsList="showYearsList" @hideYearsList="showYearsList = false" :selectedYear="selectedYear"
                    :arrYear="years" @selectedYear="getAccorderonYear($event)"/>
    <section class="years-slider" v-if="showYearsList === false">
      <div class="years-slider__inner">
        <button class="years-slider__btn-left years-slider__btn-left_focused btn btn_hover btn_focused"
                @click="yearListStepper(-1)">
          <svg width="15" height="15" viewBox="0 0 496 793" fill="#C5C2C2" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M169.896 396.024L474.645 119.557C502.005 92.197 502.005 47.88 474.645 20.52C447.285 -6.84 402.968 -6.84 375.609 20.52L21.11 342.161C6.327 356.944 -0.192002 376.699 1.026 396.058C-0.192002 415.417 6.327 435.172 21.11 449.955L375.641 771.561C403.001 798.921 447.318 798.921 474.678 771.561C502.038 744.201 502.038 699.884 474.678 672.525L169.896 396.024Z"/>
          </svg>
        </button>
        <div tabindex="0"
             class="years-slider__selected-year selected-year years-slider__selected-year_hover years-slider__selected-year_focus"
             @click="showYearsList = !showYearsList">
          {{ selectedYear }}
        </div>
        <button class="years-slider__btn-right years-slider__btn-right_focused btn btn_hover btn_focused"
                @click="yearListStepper(1)">
          <svg width="15" height="15" viewBox="0 0 496 793" fill="#C5C2C2" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M326.184 396.057L21.4354 672.524C-5.92464 699.884 -5.92464 744.201 21.4354 771.561C48.7954 798.921 93.1124 798.921 120.471 771.561L474.97 449.92C489.753 435.137 496.272 415.382 495.054 396.023C496.272 376.664 489.753 356.909 474.97 342.126L120.439 20.52C93.0794 -6.83998 48.7624 -6.83998 21.4024 20.52C-5.9576 47.88 -5.9576 92.197 21.4024 119.556L326.184 396.057Z"/>
          </svg>
        </button>
      </div>
    </section>
    <section class="months-grid" v-if="showYearsList === false">
      <ul class="months-grid__list">
        <li class="months-grid__item" v-for="(month, index) in monthsShort" :key="index">
          <button @click="selectMonth(month)" @keypress.enter="selectMonth(month)"
                  class="months-grid__month months-grid__month_hover months-grid__month_focused month"
                  :class="{'months-grid__month-current': month === currentMonthShort, 'months-grid__month_selected': month === selectedMonth}">
            {{ month }}
          </button>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import DateSelectorModalAccordeon from "./DateSelectorModalAccordeon";

export default {
  name: "DateSelectorModal",
  components: {DateSelectorModalAccordeon},
   props: ['currentMonth', 'currentYear', 'selectedMonthGraph', 'firstYear', 'lastYear', 'locale'],
  data() {
    return {
      currentMonthShort: new Date().toLocaleString(this.locale, {month: "short"}).replace(/\.$/, ""),
      years: [],
      selectedMonth: this.selectedMonthGraph,
      selectedYear: this.currentYear,
      showYearsList: false,
      monthsShort: [],
      monthsLong: [],
    }
  },
  created() {
    for (let year = Number(this.firstYear); year <= Number(this.lastYear); year++) this.years.push(year)

    this.monthsShort = new Array(12).fill(0).map((item, i) => {
      return new Date(`${this.currentYear}-${i + 1}`) // ${this.currentYear}- firefox
        .toLocaleDateString(this.locale, {month: 'short'})
        .replace(/\.$/, "")
    })

    this.monthsLong = new Array(12).fill(0).map((item, i) => {
      return new Date(`${this.currentYear}-${i + 1}`) // ${this.currentYear}- firefox
        .toLocaleDateString(this.locale, {month: 'long'})
    })
  },
  methods: {
    yearListStepper(dir) {
      let pos = this.years.findIndex(item => item === this.selectedYear)
      this.selectedYear = this.years[pos + dir > this.years.length - 1 ? 0 : pos + dir < 0 ? this.years.length - 1 : pos + dir]
      this.$emit('yearChanged', this.selectedYear)
    },
    selectMonth(item) {
      this.selectedMonth = this.monthsShort[this.monthsShort.findIndex(pos => pos === item)]
      this.$emit('monthChanged', this.monthsLong[this.monthsShort.findIndex(pos => pos === item)])
      this.$emit('index', this.monthsShort.indexOf(item) + 1)
      this.$emit('selectedMonth', this.selectedMonth)
    },
    getAccorderonYear(item) {
      this.$emit('yearChanged', this.selectedYear = item)
    }
  }
}
</script>

<style scoped>
.popup {
  position: absolute;
  width: 300px;
  height: 350px;
  border: solid 2px var(--primary-color);
  border-radius: 5px;
  background-color: #fff;
  z-index: 2;
  overflow: hidden;
}

.popup__header {
  display: flex;
  position: relative;
  width: 100%;
  height: 100px;
  background-color: var(--primary-color);
}

.popup__header .popup__header-container {
  margin-left: 20px;
  align-self: center;
}

.popup__current-month {
  color: #fff;
  font: normal 2em 'Roboto', sans-serif;
  user-select: none;
  cursor: pointer;
  text-transform: capitalize;
}

.popup__current-year {
  display: inline-block;
  color: var(--secondary-color, #7CA9DB);
  font: normal 1.4em 'Roboto', sans-serif;
  cursor: pointer;
  transition: color .3s;
  user-select: none;
}

.popup__current-year_hover:hover {
  color: #4392e3;
}

.years-slider {
  display: flex;
  width: 100%;
  height: 40px;
  cursor: pointer;
  user-select: none;
}

.years-slider__inner {
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 90%;
}

.years-slider__selected-year {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100px;
  transition: all .5s;
}

.years-slider__selected-year_hover:hover {
  color: #333;
}

.years-slider__selected-year_focus:focus {
  color: #333;
}

.selected-year {
  font: normal 1.1rem sans-serif;
  color: #a8a8a8;
  outline: none;
}

.years-slider__btn-left,
.years-slider__btn-right {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
}

.btn {
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
}

.btn > svg {
  transition: all .5s;
}

.btn_hover:hover svg {
  fill: var(--secondary-color);
}

.years-slider__btn-right_focused:focus,
.years-slider__btn-left_focused:focus {
  background-color: #e8e8e8;
}

.months-grid {
  position: relative;
  width: 100%;
  height: 200px;
}

.months-grid .months-grid__list {
  display: grid;
  position: relative;
  list-style: none;
  justify-items: center;
  width: 100%;
  height: inherit;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
}

.months-grid .months-grid__item {
  padding: 10px;
}

.months-grid__month {
  width: 80px;
  height: 30px;
  border: solid 1px red;
  border-radius: 5px;
}

.months-grid__month.months-grid__month-current {
  background-color: rgba(24, 103, 192, 0.2);
  color: var(--primary-color);
}

.months-grid__month_hover:not(.months-grid__month_selected, .months-grid__month-current):hover {
  background-color: #ECE5E5;
  color: #A39D9D;
}

.month {
  background-color: transparent;
  color: #A39D9D;
  font-size: 1.05em;
  border: none;
  transition: all .2s;
  cursor: pointer;
  outline: none;
  text-transform: capitalize;
}

.months-grid__month.months-grid__month_selected {
  background-color: var(--primary-color);
  color: #fff;
}

.months-grid__month_focused:not(.months-grid__month_selected, .months-grid__month-current):focus {
  background-color: #ECE5E5;
  color: #A39D9D;
}
</style>
