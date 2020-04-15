<template>
  <div id="app">
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import NotificationService from '../services/notificationService';

export default {
  name: 'App',
  components: {
    Header,
    Content,
  },
  created() {
    this.getInitialProjectData();
    // console.log('created lifecycle');

    // event listening for sidebar component
    this.$root.$on('applyTheFilters', () => {
      NotificationService.postFilters({
        filters: this.$store.state.filtersApplied,
      }).then(
        ((response) => {
          console.log(response, 'Filtered Projects da');
          // this.getFilteredProjectData();
          this.$store.commit('addFilteredProjects', response[0]);
          const categoryIds = response[0].map((project) => project.categoryId);
          this.$store.commit('addCategoryIds', categoryIds);
          const fundingGoals = response[0].map((project) => project.fundingGoal).sort((a, b) => a - b);
          this.$store.commit('addFundingGoals', { min: fundingGoals[0], max: fundingGoals[fundingGoals.length - 1] });
          this.$store.commit('addNotifications', response[1]);
        }),
      );

      // Apply the filter on frontend
    });

    this.$root.$on('clearTheFilters', () => {
      console.log('clearTheFilters');
      this.getInitialProjectData();
      // NotificationService.clearFilters().then(
      //   ((response) => {
      //     console.log(response, 'response da');
      //     // this.getFilteredProjectData();
      //     this.getInitialProjectData();
      //     // this.$store.commit('addProjects', response);
      //   }),
      // );

      // Apply the filter on frontend
    });


    // this.getProjectData();
    // this.getNotificationData();
  },
  methods: {
    getInitialProjectData() {
      NotificationService.getProjects().then((projects) => {
        // console.log(projects, 'projects da');
        this.$store.commit('addProjects', projects[0]);
        this.$store.commit('addFilteredProjects', projects[0]);
        const fundingGoals = projects[0].map((project) => project.fundingGoal).sort((a, b) => a - b);
        const categoryIds = projects[0].map((project) => project.categoryId);
        this.$store.commit('addAllCategoryIds', categoryIds);
        this.$store.commit('addCategoryIds', categoryIds);
        this.$store.commit('addFundingGoals', { min: fundingGoals[0], max: fundingGoals[fundingGoals.length - 1] });
        this.$store.commit('addNotifications', projects[1]);

        // this.showToast(`${notification.name}--${notification.description}`);
        // console.log(notification, "New notification arrived");
      });
    },
    // getFilteredProjectData() {
    //   NotificationService.getFilteredProjects().then((projects) => {
    //     console.log(projects, 'projects da');
    //     this.$store.commit('addProjects', projects);
    //     const fundingGoals = projects.map((project) => project.fundingGoal).sort((a, b) => a - b);
    //     const categoryIds = projects.map((project) => project.categoryId);
    //     this.$store.commit('addCategoryIds', categoryIds);
    //     this.$store.commit('addFundingGoals', { min: fundingGoals[0], max: fundingGoals[fundingGoals.length - 1] });

    //     // this.showToast(`${notification.name}--${notification.description}`);
    //     // console.log(notification, "New notification arrived");
    //   });
    // },
    getNotificationData() {
      NotificationService.getNotifications().then((notifications) => {
        this.$store.commit('addNotification', notifications);
        // this.showToast(`${notifications.name}--${notifications.description}`);
        console.log(notifications, 'New notification arrived');

        // // Polling function
        // let timesRun = 0;
        // const interval = setInterval(() => {
        //   timesRun += 1;
        //   // insert one notification
        //   if (timesRun === 3) {
        //     clearInterval(interval);
        //   }
        // }, 1000);
      });
    },
    showToast(notification) {
      this.$toasted.show(notification, {
        theme: 'bubble',
        position: 'bottom-right',
        duration: null,
        action: {
          text: 'Close',
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          },
        },
      });
    },

  },
};
</script>

<style>
body *,
html * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'PT Sans', Helvetica Neue, sans-serif;
}

a {
  text-decoration: none;
  color: #000;
}

a:hover {
  color: #2e40ea;
}

li,
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  background: -webkit-gradient(linear, left bottom, left top, from(#fff), to(#f9fafe));
  background: linear-gradient(0deg, #fff, #f9fafe);
}

.container {
  padding-left: 20px;
  padding-right: 20px;
}

.container,
.container-content {
  max-width: 1440px;
  width: 100%;
  margin: auto;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.container-content {
  padding-left: 20px;
  padding-right: 20px;
  padding: 0 7%;
}

.page-title {
  font-family: 'PT Sans', Helvetica Neue, sans-serif;
  font-weight: 700;
  line-height: 32px;
  font-size: 28px;
  color: #000;
  margin: 25px 0;
}

.hr,
hr {
  border-top: none;
  border-bottom: 1px solid #e6e6e6;
  margin: 30px 0 40px;
}

.svg_line {
  stroke: #000;
  stroke-width: 2;
}

.h1,
h1 {
  font-size: 42px;
  line-height: 50px;
}

.h1,
.h2,
h1,
h2 {
  margin-top: 0;
  margin-bottom: 0;
  color: #000;
  font-family: 'PT Sans', Helvetica Neue, sans-serif;
  font-weight: 700;
}

.h2,
h2 {
  font-size: 32px;
  line-height: 42px;
}

.h3,
h3 {
  font-size: 24px;
  line-height: 32px;
}

.h3,
.h4,
h3,
h4 {
  margin-top: 0;
  margin-bottom: 0;
  color: #000;
  font-family: 'PT Sans', Helvetica Neue, sans-serif;
  font-weight: 700;
}

.h4,
h4 {
  font-size: 18px;
  line-height: 24px;
}

.h5,
h5 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 600;
}

.h5,
.subheading,
h5 {
  color: #000;
  font-family: 'PT Sans', Helvetica Neue, sans-serif;
  line-height: 24px;
}

.subheading {
  font-size: 12px;
  font-weight: 700;
}

.p_large {
  font-size: 18px;
  line-height: 28px;
}

.p_large,
.p_small {
  color: #000;
  font-family: Untitled, Helvetica Neue, sans-serif;
}

.p_small {
  font-size: 16px;
  line-height: 24px;
}

.p_info {
  font-size: 12px;
  line-height: 19px;
}

.p_info,
.subtitle {
  font-family: 'PT Sans', Helvetica Neue, sans-serif;
  font-weight: 600;
}

.subtitle {
  line-height: 24px;
  font-size: 16px;
  color: #000;
}

.icon-size-medium {
  width: 24px;
  height: 24px;
}

.icon-large {
  width: 32px;
  height: 32px;
}

button:disabled {
  cursor: not-allowed;
}

.center-text {
  text-align: center;
}

.link {
  color: #000;
  font-family: 'PT Sans', Helvetica Neue, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
}
</style>
