<template>
  <div class="container py-4">
    <button class="btn btn-primary m-3 ms-0" @click="tab = 'Bootstrap'">Bootstrap</button>
    <button class="btn btn-primary m-2" @click="tab = 'CheckBox'">Checkbox</button>
    <button class="btn btn-primary m-2" @click="tab = 'IfElse'">IfElse</button>
    <button class="btn btn-primary m-2" @click="tab = 'ForLoop'">ForLoop</button>
    <button class="btn btn-primary m-2" @click="tab = 'Child'">Child</button>
    <button class="btn btn-primary m-2" @click="tab = 'HtmlBinding'">HtmlBinding</button>
    <button class="btn btn-primary m-2" @click="tab = 'Ref'">Ref</button>
    <button class="btn btn-primary m-2" @click="tab = 'SimpleFo'">SimpleForm</button>
    <button class="btn btn-primary m-2" @click="tab = 'ComputedProperty'">
      ComputedProperty
    </button>
    <button class="btn btn-primary m-2" @click="tab = 'Watch'">Watch</button>
    <button class="btn btn-primary m-2" @click="tab = 'Slot'">Slot</button>
    <button class="btn btn-primary m-2 ms-0" @click="tab = 'MountUnmount'">
      MountUnmount
    </button>
    
    <!-- Dynamic Component Rendering -->
    <hr />
    <component :is="tabComponent" />
  </div>
</template>

<script>
import Bootstrap from "./Bootstrap.vue";
import CheckBox from "./Checkbox.vue";
import IfElse from "./IfElse.vue";
import ForLoop from "./ForLoop.vue";
import Child from "./Child.vue";
import HtmlBinding from "./HtmlBinding.vue";
import Ref from "./Ref.vue";
import SimpleForm from "./SimpleForm.vue";
import ComputedProperty from "./ComputedProperty.vue";
import Watch from "./Watch.vue";
import Slot from "./Slot.vue";
import MountUnmount from "./MountUnmount.vue";
export default {
  name: "Practical",
  components: {
    Bootstrap,    
    Child,
    CheckBox,
    IfElse,
    ForLoop,
    HtmlBinding,
    Ref,
    SimpleForm,
    ComputedProperty,
    Watch,
    Slot,
    MountUnmount,
  },
  data() {
    return {
      vehicles: [], // Checkboxes
      show: false, // Toggle
      tab: "Bootstrap",
    };
  },
  computed: {
    tabComponent() {
      return this.tab; // This will be used in the `<component>` tag
    },
  },
  methods: {
    sendData() {},
  },
};
</script>
