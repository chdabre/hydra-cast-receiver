<template>
  <div class="splash">
    <h1>hydra</h1>
  </div>
</template>

<script>
export default {
  name: 'Splash',
  created() {
    setTimeout(() => this.$router.push('/synth'), 2000);
  },
};
</script>

<style scoped>
.splash {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: white;
  font-size: 60px;
  font-family: 'Chivo', monospace;
}
</style>
