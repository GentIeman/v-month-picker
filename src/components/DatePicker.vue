<template>
  <div class="date-picker" :class="getHorizontalPosition" v-click-outside="externalClick">
    <div class="date" @click="click = !click">
      <p class=" date__display display">{{ month }} {{ year }}</p>
      <button class="date__calendar-btn calendar-btn date__calendar-btn_hover"
              :class="{'date__calendar-btn_focus':click}">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
          <path
            d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"
            transform="translate(-2 -1)" fill="#bdc3c7" />
        </svg>
      </button>
      <div class="date__line" :class="{'date__line_active': click}"></div>
    </div>
    <transition name="fade-down">
      <Popup :class="getVerticalPosition" v-if="click === true" @yearChanged="getYear($event)"
             @monthChanged="getMonth($event)" :currentMonth.sync="month" :selectedMonthGraph="selectedMonthGraph"
             @selectedMonth="getSelectedMonth($event)" :currentYear.sync="year" @index="getIndex($event)"
             :firstYear="validatedFirstYear" :lastYear="validatedLastYear" :locale="validatedLocale"/>
    </transition>
  </div>
</template>

<script>
import Popup from "./Popup";

export default {
  name: "date-picker",
  components: { Popup },
  props: {
    horizontalPosition: {
      default: "center",
      type: String
    },
    verticalPosition: {
      default: "bottom",
      type: String
    },
    firstYear: {
      default: "1950",
      type: String
    },
    lastYear: {
      default: "2049",
      type: String
    },
    locale: {
      default: "ru",
      type: String
    }
  },
  data() {
    return {
      click: false,
      date: null,
      month: '',
      year: new Date().getFullYear(),
      monthIndex: new Date().getMonth() + 1,
      selectedMonthGraph: "" // хранит в себе значние выделенного месяца
    };
  },
  methods: {
    getSelectedMonth(item) {
      this.selectedMonthGraph = item;
    },
    externalClick() {
      this.click = false;
    },
    getYear(item) {
      this.year = item;
    },
    getMonth(item) {
      this.month = item;
    },
    getIndex(item) {
      this.monthIndex = item;
    },
    formatDateISO() {
      if (String(this.monthIndex).length < 2) this.monthIndex = "0" + this.monthIndex;
      this.date = this.year + "-" + this.monthIndex + "-00";
    }
  },
  watch: {
    year() {
      this.formatDateISO();
    },
    monthIndex() {
      this.formatDateISO();
    }
  },
  created() {
    if (this.verticalPosition !== "bottom" && this.verticalPosition !== "top") {
      throw new ReferenceError(`Attribute ver-position has an unidentified meaning`);
    }

    if (this.horizontalPosition !== "center" && this.horizontalPosition !== "left" && this.horizontalPosition !== "right") {
      throw new ReferenceError(`Attribute hor-position has an unidentified meaning`);
    }

    this.month = new Date().toLocaleString(this.validatedLocale, { month: "long" })
    this.formatDateISO();
  },
  computed: {
    validatedLocale(){
      return (this.locale.length < 1 ) ? "ru" : this.locale
    },
    validatedFirstYear() {
      return (Number(this.firstYear) > 1 ) ? +this.firstYear : 1950
    },
    validatedLastYear() {
      return ((isNaN(+this.lastYear) || Number(this.lastYear)) < this.validatedFirstYear)  ? +this.validatedFirstYear + 100 : +this.lastYear
    },
    getHorizontalPosition() {
      return `h-side-${this.horizontalPosition.toLocaleLowerCase()}`;
    },
    getVerticalPosition() {
      return `v-side-${this.verticalPosition.toLocaleLowerCase()}`;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

:root {
  --primary-color: #1867C0;
  --secondary-color: #7CA9DB;
}

.date-picker {
  display: grid;
  place-items: center;
  width: max-content;
  height: 100%;
}

.h-side-left {
  place-items: start;
}

.h-side-right {
  place-items: end;
}

.v-side-top {
  top: -350px;
}

.v-side-bottom {
  top: 45px;
}

.date {
  display: grid;
  grid-template-areas: 'txt txt btn'
                       'line line line';
  place-items: center start;
  place-content: space-between;
  position: relative;
  padding: 10px 0 10px;
  max-width: 300px;
  width: max-content;
  user-select: none;
  outline: none;
}

.date__display {
  display: flex;
  justify-content: flex-end;
  grid-area: txt;
}

.display {
  font: normal 1em sans-serif;
  color: #333;
  text-transform: capitalize;
  cursor: pointer;
}

.date__calendar-btn {
  position: relative;
  width: 25px;
  height: 25px;
  grid-area: btn;
  cursor: pointer;
  margin-left: 5px;
}

.calendar-btn {
  border: none;
  background-color: transparent;
  outline: none;
}

.calendar-btn > svg > path {
  transition: all .5s;
}

.date__calendar-btn_hover:hover svg > path {
  fill: var(--primary-color, #1867C0);
}

.date__calendar-btn_focus svg > path {
  fill: var(--primary-color, #1867C0)
}

.date__calendar-btn_focus:focus svg > path {
  fill: var(--primary-color, #1867C0)
}

.date__line {
  width: 0;
  height: 1.5px;
  background-color: #ccc;
  grid-area: line;
  transition: all .5s;
  opacity: 0;
}

.date__line_active {
  width: 100%;
  opacity: 1;
}

@media (prefers-reduced-motion: no-preference) {
  /*no-preference*/
  .fade-down-enter-active, .fade-down-leave-active {
    transition: all .5s ease;
  }

  .fade-down-enter, .fade-down-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
