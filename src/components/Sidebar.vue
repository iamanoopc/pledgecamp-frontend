<template>
  <div class="sidebar">
    <h4>
      Filters
    </h4>
    <button class="reset-button" @click="clearFilters()">
      Clear Filters
    </button>
    <br>
    <p>Featured</p>
    <ToggleSwitch v-model="$store.getters.filtersApplied.featured" />
    <br>
    <p>Categories</p>
    <div class="card-body">
      <div v-for="project in $store.getters.projects" :key="project.categoryId">
        <input type="checkbox" :value="project.categoryId" v-model="checkedCategories" @change="addCategories()">

        {{ project.categoryName }}
      </div>
    </div>

    <br>
    <p>Funding Goal range:</p>
    <input v-model="fundingValueMin" @input="addFundingGoals()">
    <input v-model="fundingValueMax" @input="addFundingGoals()">
    <br>
    <br>
    <p>Percentage Completion</p>
    <br>
    <input type="range" name="percentageComplete"
           min="0" max="100" step="1" v-model="percentageComplete"
           @input="applyPercentageCompletion()"
    >
    {{ percentageComplete }}%

    <div>
      <button class="confirm-button" @click="applyFilters()">
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
import ToggleSwitch from './ToggleSwitch.vue';


export default {
  data() {
    return {
      checkedCategories: this.$store.state.filtersApplied.categoryIds,
      fundingValueMin: this.$store.state.filtersApplied.fundingGoal.min,
      fundingValueMax: this.$store.state.filtersApplied.fundingGoal.max,
      percentageComplete: 100,

    };
  },

  computed: {
    // projectsStore() {
    //   return this.$store.state.filtersApplied;
    // },
  },
  components: {
    ToggleSwitch,
  },


  methods: {
    addCategories() {
      this.$store.commit('addCategoryIds', this.checkedCategories);
    },
    addFundingGoals() {
      this.$store.commit('addFundingGoals', { min: Number(this.fundingValueMin), max: Number(this.fundingValueMax) });
    },
    applyPercentageCompletion() {
      this.$store.commit('applyPercentageCompletion', Number(this.percentageComplete));
    },
    applyFilters() {
      this.$root.$emit('applyTheFilters');
    },
    clearFilters() {
      this.$root.$emit('clearTheFilters');
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: absolute;
  right: 0;
  height: calc( 100vh - 90px );
  background-color: #E5E8FC;
  top: 90px;
  width: 250px;
  z-index: 20;
  padding: 20px;
}

.confirm-button{
    width: 100%;
    margin-top: 20px;
}
.reset-button{
    float:right;
    margin-top: 20px;
}
</style>
