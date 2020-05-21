<template>
  <div class="home">
    <h2>Corona Updates</h2>

    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="alert alert-info text-left" v-if="isLoading">Loading...</div>
        </div>
      </div>
      <div class="row">
        <corona-results-card></corona-results-card>
      </div>
    </div>
  </div>
</template>

<script>
import CoronaResultsCard from "@/components/CoronaResult";

export default {
  name: "Home",
  data: function() {
    return {
      isLoading: false,
      data: []
    };
  },
  components: {
    CoronaResultsCard
  },
  methods: {}
};
</script>

<style scoped>
</style>