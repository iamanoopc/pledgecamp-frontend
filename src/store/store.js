/* eslint-disable no-param-reassign */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    projects: [],
    filteredProjects: [],
    allCategoryIds: [],
    categoryIdsSelected: [],
    notifications: [],
    notificationsSelected: [],
    notificationMenu: false,
    filterMenu: false,

    // Snapshot of filters appied on the sidebar
    filtersApplied: {
      featured: false,
      categoryIds: [],
      fundingGoal: {
        min: 0,
        max: 10000,
      },
      percentageComplete: 0,
    },
  },
  mutations: {
    addProjects(state, projects) {
      state.projects = projects;
    },

    addFilteredProjects(state, projects) {
      state.filteredProjects = projects;
    },

    addNotifications(state, notifications) {
      state.notifications = notifications;
    },
    addNotificationsSelected(state, notifications) {
      state.notificationsSelected = notifications;
    },

    filterMenuShow(state, status) {
      state.filterMenu = status;
      if (state.notificationMenu) state.notificationMenu = false;
    },

    notificationMenuShow(state, status) {
      state.notificationMenu = status;
      if (state.filterMenu) state.filterMenu = false;
    },

    applyFeatured(state, status) {
      state.filtersApplied.featured = status;
    },

    addAllCategoryIds(state, categoryIds) {
      state.allCategoryIds = categoryIds;
    },

    addCategoryIds(state, categoryIds) {
      state.filtersApplied.categoryIds = categoryIds;
    },

    addFundingGoals(state, fundingGoal) {
      state.filtersApplied.fundingGoal = fundingGoal;
    },
    applyPercentageCompletion(state, percentageComplete) {
      state.filtersApplied.percentageComplete = percentageComplete;
    },

  },

  getters: {
    projects: (state) => state.projects,
    filteredProjects: (state) => state.filteredProjects,
    notifications: (state) => state.notifications,
    notificationsSelected: (state) => state.notificationsSelected,
    filtersApplied: (state) => state.filtersApplied,
    filteredCategoryIds: (state) => state.filtersApplied.categoryIds,
  },
});
