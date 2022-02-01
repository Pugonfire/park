<template>
  <div class="card">
    <h1>{{ cardData.address }} ({{ cardData.car_park_no }})</h1>
    <div>Carpark Type: {{ cardData.car_park_type }}</div>
    <div>Availability: {{ availability }}</div>
  </div>
</template>

<script>
export default {
  name: "carpark-card",
  props: ["cardInfo", "cardAvailability"],
  data() {
    return {
      cardData: this.cardInfo,
      allAvailability: this.cardAvailability,
    };
  },
  computed: {
    availability: function () {
      var result = this.allAvailability.carpark_data.find(
        (t) => t.carpark_number == this.cardData.car_park_no
      );
      if (result) return result;
      else return "N/A";
    },
  },
};
</script>

<style scoped>
.card {
  outline: 3px solid rgb(83, 83, 83);
}
</style>
