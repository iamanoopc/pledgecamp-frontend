<template>
  <div class="content container">
    <div>
      <p> {{ $store.getters.filteredProjects.length }} projects found.</p>
    </div>
    <div v-for="project in $store.getters.filteredProjects" :key="project.name">
      <div
        class="col card"
      >
        <img :src="project.projectDescription">
        <div class="title-row">
          <p class="category-title">
            {{ project.projectName }}
          </p>
          <p class="funding-title">
            $ {{ project.fundingGoal }}
          </p>
        </div>
        <div class="category-pill">
          {{ project.categoryName }}
        </div>

        <progress-bar class="progress-bar" size="medium" bar-color="#E5E8FC" bg-color="#F9FAFE" :val="project.percentageComplete" :title="'Percentage Completed -- '+project.percentageComplete+'%'" />
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from 'vue-simple-progress';

export default {
  computed: {
    projectsStore() {
      return this.$store.state.filteredProjects;
    },
  },
  // props: {
  //   projects: Array,
  // },
  components: {
    ProgressBar,
  },

};
</script>

<style scoped>
.col{
  width:360px;
  float: left;
  z-index: 19;
      margin-right: 3%;
    margin-bottom: 2%;
}
.card{
  background:#f7f8fc;
    padding: 20px;
}
.card:hover{
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}
.card .title-row{
  display: flex;
  justify-content: space-between;
}
.category-pill {
    font-size: 12px;
    background: #f9ebe8;
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 1px;
}
.category-title{
font-weight: 600;
    padding: 10px 0;
}
.funding-title{
  padding: 10px 0;
    font-size: 20px;
    font-style: italic;
}
.progress-bar{
  margin-top:12px;
}
.progress-bar:hover{
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}
</style>
