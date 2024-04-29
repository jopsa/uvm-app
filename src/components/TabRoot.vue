<template>
  <div class="ion-page">
    <ion-tabs>
      <ion-tab
        tab="dashboard"
        :routes="['dashboard', 'dashboard-details']"
        :to="{ name: 'dashboard' }"
      >
        <ion-vue-router name="tab1Route"></ion-vue-router>
      </ion-tab>
    </ion-tabs>
  </div>
</template>

<script>
import { addIcons } from "ionicons";
import { star, lockClosedOutline, addCircle , checkmark} from "ionicons/icons";

addIcons({
  "ios-star": star,
  "md-star": star,
  "ios-lock-closed": lockClosedOutline,
  "md-lock-closed": lockClosedOutline,
  "ios-add-circle": addCircle,
  "md-add-circle": addCircle,
  "ios-checkmark" : checkmark,
  "md-checkmark": checkmark
});
export default {
  name: "TabRoot",
  props: {},
};
</script>
