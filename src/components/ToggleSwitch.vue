<template id="switch-button">
  <div class="switch-button-control" :title="featured ? 'Featured is on' : 'Featured is off'">
    <div
      class="switch-button"
      :class="{ enabled: $store.getters.filtersApplied.featured }"
      @click="toggle"
      :style="{ '--color': color }"
    >
      <div class="button" />
    </div>
    <div class="switch-button-label">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featured: this.$store.state.filtersApplied.featured,

    };
  },
  props: {
    // featured: Boolean,
    color: {
      type: String,
      required: false,
      default: '#969FF4',
    },
  },
  methods: {
    toggle() {
      this.featured = !this.featured;
      this.$store.commit('applyFeatured', this.featured);
    },
  },
};
</script>

<style scoped>
.switch-button-control {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.switch-button-control .switch-button {
  height: 1.6em;
  width: calc(1.6em * 2);
  border: 2px solid var(--color);
  box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.33);
  border-radius: 1.6em;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background-color: white;
}
.switch-button-control .switch-button .button {
  height: calc(1.6em - (2 * 2px));
  width: calc(1.6em - (2 * 2px));
  border: 2px solid var(--color);
  border-radius: calc(1.6em - (2 * 2px));
  background: var(--color);
  transition: all 0.3s ease-in-out;
}
.switch-button-control .switch-button.enabled {
  background-color: var(--color);
  box-shadow: none;
}
.switch-button-control .switch-button.enabled .button {
  background: white;
  transform: translateX(calc(calc(1.6em - (2 * 2px)) + (2 * 2px)));
}
.switch-button-control .switch-button-label {
  margin-left: 10px;
}

</style>
