<template>
  <div>
    <div class="header-page flex-flow">
      <span class="title-page"> All Requests </span>
      <div class="flex mt-3 w-100">
        <div class="w-30">
          <span class="capitalize padded-10 filter-shorter">filters</span>
          <input type="text" class="search-input input-shorter" @change="changeName($event)" placeholder="enter name" />
        </div>
        <div class="w-30">
          <select name="Brand" id="Brand" class="search-select" @change="selectBrand($event)">
          <option         v-for="item in brandFilters"
        :key="item.brandId" :value="item.name">{{item.name}}</option>
          </select>
        </div>
        <div>
          <input type="button" value="Filter" class="button-filter" v-on:click="filter" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { brandsApi } from "../../api/Brandapi";

export default {
  name: "FilterBrand",
  data() {
    return {
      brandFilters: [],
      brand : this.brand,
      brandName : this.brandName,
    };
  },
  methods: {
  filter() {
    this.$parent.filterBrandList(this.brand,this.brandName);
  },
  selectBrand(event) {
    this.brand = event.target.value;
  },
  changeName(event) {
    this.brandName = event.target.value;
  }
  },

  // In the real world le call api is asynchronous but still who knows even if its a local file :)
  async mounted() {
        brandsApi()
      .then((res) => {
        this.brandFilters = res?.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: bold;
}
.title-page {
  font-size: 28px;
  font-family: sans-serif;
  color: #779bdb;
}
.header-page {
  width: 100%;
  display: flex;
  position: absolute;
  top: 5%;
  left: 7%;
}
.search-input {
    height: 25px;
    border-radius: 6px;
    border: 2px solid #3f3a4e54;
    font-weight: 700;
    background-color: #a6afbf4a;
}
.search-select {
    height: 32px;
    border-radius: 6px;
    border: 2px solid #3f3a4e54;
    font-weight: 700;
    background-color: #a6afbf4a;
    width: 150px;
}
.button-filter {
  height: 32px;
    border-radius: 6px;
    font-weight: 700;
    background-color: #026492;
    width: 150px;
    color: white;
}
@media (max-width: 1038px) {
  .filter-shorter {
    display: none; 
  }
}
@media (max-width: 626px) {
  .input-shorter {
    width: 114px;
  }
}
</style>
