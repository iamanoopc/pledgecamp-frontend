/* eslint-disable no-param-reassign */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    projects: [],
    filteredProjects: [],
    allCategoryIds: [],
    notifications: [],
    notificationMenu: false,
    filterMenu: false,


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
      console.log('addCategoryIds', categoryIds.length);

      state.filtersApplied.categoryIds = categoryIds;
    },

    addFundingGoals(state, fundingGoal) {
      state.filtersApplied.fundingGoal = fundingGoal;
    },
    applyPercentageCompletion(state, percentageComplete) {
      state.filtersApplied.percentageComplete = percentageComplete;
    },
    applyClearFilters(state) {
      state.filtersApplied = {
        featured: true,
        categoryIds: [],
        fundingGoal: {
          min: 0,
          max: 10000,
        },
        percentageComplete: 0,
      };
    },
  },
  getters: {
    projects: (state) => state.projects,
    filteredProjects: (state) => state.filteredProjects,
    notifications: (state) => state.notifications,
    filtersApplied: (state) => state.filtersApplied,
    filteredCategoryIds: (state) => state.filtersApplied.categoryIds,

  },
});
