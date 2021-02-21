<template>
  <div>
    <hydra-renderer
      :model="model"
    >
    </hydra-renderer>
  </div>
</template>

<script>
import HydraRenderer from '@/components/HydraRenderer';
import { mapState } from 'vuex';

export default {
  name: 'Synth',
  components: { HydraRenderer },
  computed: {
    ...mapState([
      'model',
    ]),
  },
};
</script>

<style scoped>

</style>
