<template>
  <div>
    <FilterBrand message="Welcome to Your Vue.js App" />
    <div id="app"></div>
    <div class="table-container">
      <div class="table-header">
        <div style="width:12%" class="status">
        <span class="span-header">Status</span>
        </div>
        <div class="name">
        <span class="span-header mr-20">Name</span>
        </div>
        <div class="type">
        <span class="span-header mr-10">Type</span>
        </div>
        <div class="brand">
        <span class="span-header mr-15">Brand</span>
        </div>
        <div class="submission">
        <span class="span-header mr-25">Submission</span>
        </div>
      </div>

<div>
  <div v-if="listBrands.length ===0" class="empty-table">
<label class="mt-10">No Brands found ! </label>
  </div>
      <div
        class="container"
        v-for="item in listBrands"
        :key="item.requestId"
      >
      <div class="pl-2" style="width : 5%">
        <span class="span-header "
          >
            <img
              :src="
                item.requestStatus.name === 'REJECTED'
                  ? require(`@/assets/icons/icons32/close.png`)
                  : item.requestStatus.name === 'SUBMITTED'
                  ? require(`@/assets/icons/icons32/check-mark.png`)
                  : require(`@/assets/icons/icons32/hourglass.png`)
              "
            /><label v-bind:class="{'danger' : item.requestStatus.name === 'REJECTED' , 'success' : item.requestStatus.name === 'SUBMITTED'  }">{{item.requestStatus.name === 'REJECTED' ? 'Closed' : item.requestStatus.name === 'SUBMITTED' ? 'Verified' : 'Pending'}}</label></span>
            </div>
        <div class="span-header flex" style="width : 45%">
          <div class="vertical-line hidesidebar"></div>
          <span id="padder-name"> {{ item.campaignName }}</span>
        </div>
        <div style="width : 15%"  >
        <span v-bind:class="{'span-header spanner-advice' : item.advice ,'span-header spanner-request' : !item.advice}" >
          {{item.advice ? 'Advice' : 'Request'}}
        </span>
        </div>

<div style="width : 10%">
        <span class="span-header ">{{ item.brand.name }}</span>
        </div>
        <div style="width : 15%">
        <span class="span-header " v-if="!item.submittedDate"
          >Aucune Date</span
        >
        <span class="span-header " v-if="item.submittedDate">{{
          item.submittedDate | formatDate(null, "MM-DD-YYYY")
        }}</span>
        </div>
                <div class="span-header" style="width : 10%" >
               <router-link :to="{ name: 'EditBrand' , params: { requestId: item.requestId }}"> <img src="../../assets/icons/icons32/right-arrow.png">   </router-link>   
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import FilterBrand from "./FilterBrand.vue";
import dateMixin from "../../shared/datepipemixin.js";
import { listBrandApi } from "../../api/Brandapi";

export default {
  mixins: [dateMixin],
  name: "ListBrand",
  components: {
    FilterBrand,
  },
  data() {
    return {
      listBrands: [],
    };
  },
  methods: {
    filterBrandList(brand,brandName){
      this.listBrands = this.listBrands.filter(elements=> {
     if (brand && brandName) {
           return (elements.brand.name.includes(brand) && elements.campaignName.includes(brandName));
     }
     if (brand) {
              return elements.brand.name.includes(brand);

     }
     if (brandName) {
              return elements.campaignName.includes(brandName);
     }  
      })
    }
  },

  // In the real world le call api is asynchronous but still who knows even if its a local file :)
  async mounted() {
        listBrandApi()
      .then((result) => {
        this.listBrands = result?.data?.requests;
      }).catch((error) => {
        console.log(error);
      });

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to spanis component only -->
<style scoped>
.table-container {
  position: absolute;
  top: 20%;
  width: 95%;
}
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin-left: 6%;
  margin-top: 2%;
}
.span-header {
  font-size: 16px;
  font-weight: bold;
}
div.container {
margin-top: 2%;
background-color: #a6afbf4a;    
border-radius: 30px;
    height: 115px;
    width: 95%;
    display: flex;
    align-items: center;
    width: 95%;
    margin-left: 6%;
}
.vertical-line {
  border-left: 2px solid #4a4a60;
  height: 60px;
}
.status {
  flex: 0 0 6%;
}
.name {
  flex: 0 0 31%;
}
.type {
  flex: 0 0 0%;
}
.brand {
    flex: 0 0 0%;
}
.submission {
    flex: 0 0 24%;

}
#padder-name {
  padding: 19px 0px 20px 15px;
}
      .container :first-child {
        width: 32px;
      }
@media (max-width: 1180px) {
  .hidesidebar {
    display: none;
  }
}
.empty-table {
    display: flex;
    justify-content: center;
}
.spanner-request {
  background-color: #566784;
  color: white;

}
.spanner-advice {
    background-color: #f01111bd;
    color: white;
}
</style>
