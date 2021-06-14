<template>
  <div>
    <div class="resize">
      <div class="flex">
        <div class="w-20" style="width: 20%">
          <span class="padded-10 bold centred-text">Brand *</span>
        </div>
        <div>
          <select
            name="Brand"
            id="Brand"
            class="search-select"
            @change="selectBrand($event)"
            v-if="selectedBrand"
          >
            <option
              v-for="item in brandFilters"
              :key="item.brandId"
              :value="item.brandId"
              :selected="item.brandId === selectedBrand.brand.brandId"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="flex" style="margin-top: 2%">
        <div style="width: 20%">
          <span class="padded-10 bold centred-text">Campaign name*</span>
        </div>
        <div>
          <input
            type="text"
            :value="selectedBrand.campaignName"
            class="padded-7 bold centred-input"
          />
        </div>
      </div>

      <div class="mt-3">
        <div class="ml-5">
          <label for="collab" class="fs-25">Media *</label>
        </div>
        <div class="flex-container column">
          <div class="padx-10">
            <label for="collab" class="fs-25 padrx-20">Collaboration</label>
            <input
              type="checkbox"
              id="collab"
              name="collab"
              :value="12"
              @change="changeSetting($event)"
              v-model="checkedCategories"
            />
          </div>
          <div class="padx-10">
            <label for="vehicle1" class="fs-25 padrx-20">
              New Product / innovation</label
            >
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              :value="2"
              @change="changeSetting($event)"
              v-model="checkedCategories"
            />
          </div>
          <div class="padx-10">
            <label for="vehicle1" class="fs-25 padrx-20"> Print</label>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              :value="3"
              @change="changeSetting($event)"
              v-model="checkedCategories"
            />
          </div>
          <div class="padx-10">
            <label for="vehicle1" class="fs-25 padrx-20"> Radio</label>
            <input
              type="checkbox"
              id="7"
              name="vehicle1"
              :value="7"
              @change="changeSetting($event)"
              v-model="checkedCategories"
            />
          </div>
          <div class="padx-10">
            <label for="vehicle1" class="fs-25 padrx-20"> Print</label>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              :value="4"
              @change="changeSetting($event)"
              v-model="checkedCategories"
            />
          </div>
          <div class="padx-10">
            <label for="vehicle1" class="fs-25 padrx-20"> Sponsorship</label>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              :value="5"
              @change="changeSetting($event)"
              v-model="checkedCategories"
            />
          </div>
          <div class="padx-10">
            <label for="vehicle1" class="fs-25 padrx-20"> Website</label>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              :value="8"
              @change="changeSetting($event)"
              v-model="checkedCategories"
            />
          </div>
          <div class="padx-10">
            <label for="vehicle1" class="fs-25 padrx-20">
              Labeling/Packaging</label
            >
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              :value="1"
              @change="changeSetting($event)"
              v-model="checkedCategories"
            />
          </div>
          <div class="padx-10">
            <label for="vehicle1" class="fs-25 padrx-20"> OOH</label>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              :value="3"
              @change="changeSetting($event)"
              v-model="checkedCategories"
            />
          </div>
          <div class="padx-10">
            <label for="vehicle1" class="fs-25 padrx-20"> Promotions</label>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              :value="6"
              @change="changeSetting($event)"
              v-model="checkedCategories"
            />
          </div>
          <div class="padx-10">
            <label for="vehicle1" class="fs-25 padrx-20"> Social Media</label>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              :value="9"
              @change="changeSetting($event)"
              v-model="checkedCategories"
            />
          </div>
          <div class="padx-10">
            <label for="vehicle1" class="fs-25 padrx-20">
              TVC/Online videos</label
            >
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              :value="10"
              @change="changeSetting($event)"
              v-model="checkedCategories"
            />
          </div>
          <div class="padx-10">
            <label for="vehicle1" class="fs-25 padrx-20"> Others</label>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              :value="11"
              @change="changeSetting($event)"
              v-model="checkedCategories"
            />
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <label class="bold">Deadline for descision *</label>
          </div>
          <div></div>

          <div class="">
            <div class="date-placement">
              <input
                type="date"
                :value="
                  selectedBrand.createdDate | formatDate(null, 'YYYY-MM-DD')
                "
                class="input-date"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { brandsApi, listBrandApi } from "../../api/Brandapi";
import dateMixin from "../../shared/datepipemixin.js";
export default {
  name: "EditBrand",
  mixins: [dateMixin],
  data() {
    return {
      checkedCategories: [],
      brandFilters: [],
      selectedBrand: [],
      selectedBrandChoice: null,
    };
  },
  methods: {
    selectBrand(event) {
      this.selectedBrandChoice = event.target.value;
    },
    // This function is used to get medias push in the array if later you want ti submit an update
    changeSetting(event) {
      console.log(event.target.value);
    },
  },
  async mounted() {
    //CALL listbrand api
    brandsApi()
      .then((res) => {
        this.brandFilters = res?.data;
      })
      .catch((error) => {
        console.log(error);
      });
    //CALL list campa
    listBrandApi()
      .then((result) => {
        this.selectedBrand = result?.data?.requests;

        this.selectedBrand = result?.data?.requests.filter((element) => {
          return element.requestId == this.$route.params.requestId;
        });
        this.selectedBrand = this.selectedBrand[0];
        this.selectedBrand.media.map((element) => {
          this.checkedCategories.push(element.mediaId);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to spanis component only -->
<style scoped>
.search-select {
  height: 55px;
  width: 426px;
  border-radius: 6px;
  border: 2px solid #3f3a4e54;
  font-weight: 700;
  background-color: #a6afbf4a;
}
.centred-text {
  display: block;
  width: 100px;
  margin: 0 auto;
  padding: 5%;
}
.centred-input {
  background-color: #a6afbf4a;
  width: 370px;
  margin: 0 auto;
  height: 0%;
  border-radius: 7px;
}
.container > div {
  float: left;
}
.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;

  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
}
.column {
  flex-direction: column;
  flex-wrap: wrap;
  height: 400px;
  width: 60%;
  margin-top: 2%;
  margin-left: 5%;
}
input[type="checkbox"] {
  /* Double-sized Checkboxes */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
}
input[type="checkbox"]:checked {
  border-color: red;
  background-color: red;
}
.input-date {
  height: 55px;
  width: 450px;
  border-radius: 6px;
  border: 2px solid #3f3a4e54;
  font-weight: 700;
  background-color: #a6afbf4a;
}
.date-placement {
  width: 95%;
  float: right;
  margin-top: 1%;
}
@media (max-width: 565px) {
  .resize {
    transform: scale(0.85);
  }
}@media (max-width: 500px) {
  .resize {
    transform: scale(0.75);
    margin-right: 15%;
  }
}

</style>
