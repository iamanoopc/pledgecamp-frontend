<template>
  <div
    class="notifications-menu-wrap notification-menu-dropdown-content"
  >
    <div class="notifications-header">
      <div class="header-title">
        Notifications
      </div>
      <button class="clear-button" @click.stop="clear()">
        Clear All
      </button>
      <!---->
    </div>

    <div>
      <div
        class="notification-item"
        :class="{read:notificationsSelected.includes(notification.projectId)}"
        v-for="(notification, index) in $store.getters.notifications"
        :key="notification.projectId"
        @click.stop="readNotification(index)"
      >
        {{ notification.notification }}
      </div>
    </div>
    <div v-if="$store.getters.notifications.length === 0" class="empty">
      You Have No Notifications.
    </div>
    <!---->
  </div>
</template>

<script>
export default {
//   props: {
//     notification: Object,
//   },
  data() {
    const { notifications, notificationsSelected } = this.$store.state;

    return {
      notifications,
      notificationsSelected,
    };
  },


  methods: {
    readNotification(index) {
      if (!this.notificationsSelected.includes(this.notifications[index].projectId)) {
        this.notificationsSelected.push(this.notifications[index].projectId);
      }
    },
    clear() {
      this.$store.commit('addNotificationsSelected', []);
      this.$store.commit('addNotifications', []);
    },
  },

};
</script>

<style scoped>

.read{
    text-decoration: line-through;
}
.clear-button{
    float:right;
}

.header
  .header-content
  .header-right
  .notification-menu
  .notification-menu-dropdown-content {
  position: absolute;
  right: 0;
  margin-top: 20px;
}

.notification-item {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 24px 16px 20px;
  border-bottom: 1px solid #e6e6e6;
  border-radius: 3px;
  color: #000;
  cursor: pointer;
  min-width: 0;
}

.notification-item > a {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.notification-item.large {
  border: 1px solid #e6e6e6;
  margin-top: 16px;
}

.notification-item.read {
  background-color: #fafafa;
}

.notification-image {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 35px;
  height: 35px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: #000;
}

.notification-main {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

.notification-main .notification-header {
  max-height: 16px;
}

.notification-main .notification-header .notification-title {
  margin-top: 0;
  margin-bottom: 0;
  color: #000;
  font-family: "PT Sans", Helvetica Neue, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  display: inline-block;
  vertical-align: top;
  line-height: 14px;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 540px) {
  .notification-main .notification-header .notification-title {
    max-width: 160px;
  }
}

@media (max-width: 370px) {
  .notification-main .notification-header .notification-title {
    max-width: 100px;
  }
}

.notification-main .notification-header .notification-date {
  margin-left: auto;
  margin-right: 2px;
  float: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.notification-main .notification-header .notification-date .date-text {
  color: #000;
  font-family: "PT Sans", Helvetica Neue, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  color: #7c7c7e;
  text-transform: uppercase;
  line-height: 12px;
}

.notification-main .notification-header .notification-date .date-unread {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fe7545;
  margin: 2px 8px 0;
}

.notification-main .notification-subtitle {
  margin-top: 0;
  margin-bottom: 0;
  color: #000;
  font-family: "PT Sans", Helvetica Neue, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: #7c7c7e;
  overflow: hidden;
  text-overflow: ellipsis;
}

.notification-main .notification-description {
  color: #000;
  font-family: Untitled, Helvetica Neue, sans-serif;
  font-size: 16px;
  line-height: 24px;
  padding-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "PT Sans", Helvetica Neue, sans-serif;
}

.p-spinner-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.p-spinner-wrapper .p-spinner {
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #495aff;
  width: 32px;
  height: 32px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

.notifications-menu-wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1px;
  background-color: #fff;
  -webkit-box-shadow: 0 16px 56px rgba(0, 0, 0, 0.15);
  box-shadow: 0 16px 56px rgba(0, 0, 0, 0.15);
  margin-top: 0;
  margin-bottom: 0;
  color: #000;
  font-family: "PT Sans", Helvetica Neue, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  min-width: 355px;
  width: 483px;
  padding: 0 1px;
  max-height: 600px;
  overflow-y: scroll;
}

.notifications-menu-wrap .notifications-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 25px 18px 12px;
  -webkit-box-shadow: 0 1.5px 0 #e6e6e6;
  box-shadow: 0 1.5px 0 #e6e6e6;
}

.notifications-menu-wrap .notifications-header .header-title {
  margin-top: 0;
  margin-bottom: 0;
  color: #000;
  font-family: "PT Sans", Helvetica Neue, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}

.notifications-menu-wrap .notifications-header .mark-read {
  color: #000;
  font-family: "PT Sans", Helvetica Neue, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  color: #2e40ea;
  text-transform: uppercase;
  cursor: pointer;
}

.notifications-menu-wrap .notifications-list .created-project-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-top: 15px;
}

.notifications-menu-wrap .notifications-list .created-project-item .p-image {
  width: 48px;
  height: 64px;
  -o-object-fit: cover;
  object-fit: cover;
  margin-right: 15px;
}

.notifications-menu-wrap .notifications-list .created-project-item .p-url {
  color: #2e40ea;
}

.notifications-menu-wrap
  .notifications-list
  .backed-project-list
  .backed-project-item
  a {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}


.notifications-menu-wrap
  .notifications-list
  .backed-project-list
  .backed-project-item.view-all-link {
  margin-top: 15px;
}

.notifications-menu-wrap
  .notifications-list
  .backed-project-list
  .backed-project-item.view-all-link
  a {
  color: #2e40ea;
  display: block;
}


.notifications-menu-wrap .view-all {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "PT Sans", Helvetica Neue, sans-serif;
  font-weight: 700;
  text-align: center;
  -webkit-transition: background-color 0.2s ease-in-out,
    -webkit-box-shadow 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out,
    -webkit-box-shadow 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    -webkit-box-shadow 0.2s ease-in-out;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  height: 48px;
  padding: 3px 50px 0;
}

.notifications-menu-wrap .view-all:disabled {
  background-color: #707073;
  color: #fff;
  cursor: not-allowed;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.notifications-menu-wrap .view-all:hover:enabled {
  -webkit-box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}

.notifications-menu-wrap .view-all:focus:enabled {
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0.8);
}

.notifications-menu-wrap .spinner {
  padding: 25px 0;
  -webkit-box-shadow: 0 1.5px 0 #e6e6e6;
  box-shadow: 0 1.5px 0 #e6e6e6;
}

.notifications-menu-wrap .empty {
  padding: 25px 0;
  margin: 0 auto;
  margin-top: 0;
  margin-bottom: 0;
  color: #000;
  font-family: "PT Sans", Helvetica Neue, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .notifications-menu-wrap {
    margin-right: -40px;
  }
}

@media (max-width: 540px) {
  .notifications-menu-wrap {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .notifications-menu-wrap {
    margin-right: -60px;
  }
}

@media (max-width: 370px) {
  .notifications-menu-wrap {
    min-width: 300px;
  }
}


</style>
