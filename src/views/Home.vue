<template>
  <h1>HOME</h1>
  <button type="button" @click="getAvailability">Get Availability</button>
  <div v-if="availability">Deets: {{ availability.timestamp }}</div>
  <br />
  <button type="button" @click="fetchAPIData">Fetch</button>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment,
      please try back later
    </p>
  </section>
  <section v-else>
    <div v-if="loading">Loading...</div>

    <div v-else>
      <carpark-card
        v-for="carpark in info"
        :key="carpark.id"
        :cardInfo="carpark"
        :cardAvailability="availability"
      ></carpark-card>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import CarparkCard from "../components/CarparkCard.vue";
export default {
  components: { CarparkCard },
  name: "home",
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      availability: null,
    };
  },
  methods: {
    // getToken() {
    //   axios
    //     .get("https://www.ura.gov.sg/uraDataService/insertNewToken.action", {
    //       headers: {
    //         AccessKey: "3df68727-2825-4d0a-aee7-768b467a0815",
    //       },
    //     })
    //     .then((response) => {
    //       this.token = response;
    //     });
    // },
    fetchAPIData() {
      axios
        .get(
          "https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&limit=5"
        )
        .then((response) => {
          this.info = response.data.result.records;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    getAvailability() {
      axios
        .get("https://api.data.gov.sg/v1/transport/carpark-availability", {
          headers: {
            accept: "application/json",
          },
        })
        .then((response) => {
          this.availability = response.data.items[0];
          // get most recent availability
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // fetchAPIDataURA() {
    //   axios
    //     .get(
    //       "https://www.ura.gov.sg/uraDataService/invokeUraDS?service=Car_Park_Details",
    //       {
    //         headers: {
    //           AccessKey: "3df68727-2825-4d0a-aee7-768b467a0815",
    //           Token:
    //             "82rdXS3rpd4kT3M8qn687-4P3tg7th4dR72SC7-2d5b6yF@d0690bJ257JCF66bf9-hh4qnB886+pY7-gdB--dHM0m7ak-E9aFdf",
    //         },
    //       }
    //     )
    //     .then((response) => {
    //       this.info = response.data;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       this.errored = true;
    //     })
    //     .finally(() => (this.loading = false));
    // },
  },
  mounted() {
    // this.fetchAPIData;
  },
};
</script>

<style scoped></style>
