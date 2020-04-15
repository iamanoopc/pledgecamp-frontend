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
        <input
          type="checkbox"
          :value="project.categoryId"
          :checked="$store.getters.filteredCategoryIds.includes(project.categoryId)"
          @change="addCategories(project.categoryId)"
        >
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
    const { categoryIds, fundingGoal } = this.$store.state.filtersApplied;
    return {
      categoryIds,

      fundingValueMin: fundingGoal.min,
      fundingValueMax: fundingGoal.max,
      percentageComplete: 100,

    };
  },

  components: {
    ToggleSwitch,
  },


  methods: {
    addCategories(projectId) {
      if (this.categoryIds.includes(projectId)) {
        this.categoryIds.splice(this.categoryIds.indexOf(projectId), 1);
      } else {
        this.categoryIds.push(projectId);
      }
      this.$store.commit('addCategoryIds', this.categoryIds);
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
