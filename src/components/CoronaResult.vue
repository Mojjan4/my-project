<template>
  <div class="corona-results-card mt-5">
    <div class="row" v-if="showFilter"></div>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="result in results" :key="result.country_name">
        <div class="card">
          <div class="card-header">{{result.country_name}}</div>
          <div class="card-body">
            <ul>
              <li>
                <strong>Active cases:</strong>
                {{result.active_cases}}
              </li>
              <li>
                <strong>Deaths:</strong>
                {{result.deaths}}
              </li>
              <li>
                <strong>New cases:</strong>
                {{result.new_cases}}
              </li>
              <li>
                <strong>New Deaths:</strong>
                {{result.new_deaths}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CoronaResultsCard",
  data: function() {
    return {
      isLoading: false,
      results: {}
    };
  },
  props: ["showFilter"],
  methods: {
    getWorldCoronaData: function() {
      this.isLoading = true;
      axios
        .get(
          "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
          {
            headers: {
              "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
              "x-rapidapi-key":
                "399d2b363amshcd995da4c73aeb1p14aa99jsn3af958989cb3"
            }
          }
        )
        .then(response => {
          this.results = response.data.countries_stat;
        })
        .catch(e => {
          this.errors.push(e);
        });
      this.isLoading = false;
    }
  },
  beforeMount() {
    this.getWorldCoronaData();
  }
};
</script>

<style scoped>
.card-header {
  font-weight: bold;
}
ul {
  list-style: none;
  text-align: left;
  padding: 10px;
}
ul,
li {
  display: inline-block;
}
</style>