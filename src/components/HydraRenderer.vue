<template>
  <canvas ref="hydra" class="hydra"></canvas>
</template>

<script>
import Hydra from 'hydra-synth';

function blobToDataURL(blob) {
  return new Promise((fulfill, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => fulfill(reader.result);
    reader.readAsDataURL(blob);
  });
}

export default {
  name: 'HydraRenderer',
  props: {
    model: String,
    show: Boolean,
  },
  data() {
    return {
      hydra: null,
    };
  },
  watch: {
    model() {
      this.update();
    },
    show() {
      if (this.show) {
        this.update();
      } else {
        this.hydra.hush();
      }
    },
  },
  mounted() {
    const hydraCanvas = this.$refs.hydra;
    hydraCanvas.width = window.innerWidth;
    hydraCanvas.height = window.innerHeight;

    this.initHydra();
    this.update();
  },
  beforeDestroy() {
    this.hydra.hush();
  },
  methods: {
    initHydra() {
      this.hydra = new Hydra({
        canvas: this.$refs.hydra,
        makeGlobal: false,
        detectAudio: false,
      });
    },
    update() {
      if (this.hydra) {
        if (this.model) {
          try {
            this.hydra.eval(this.model);
          } catch (e) {
            console.log(e);
            this.hydra.hush();
            this.initHydra();
          }
        } else {
          this.hydra.hush();
        }
      }
    },
    async getScreenImageURL() {
      const hydraImage = await new Promise((resolve) => {
        this.hydra.getScreenImage(resolve);
      });
      return blobToDataURL(hydraImage);
    },
  },
};
</script>

<style scoped>
.hydra {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
</style>
