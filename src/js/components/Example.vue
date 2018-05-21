<template>
    <div class="component-editor w-full">
        <h2 class="mb-2">Hot Module Reloading works fine.</h2>
        <p class="mb-2">
            try to edit the source in <code>src/js/components/Example.vue</code></p>
        <p>
            <strong>{{ count }}</strong>
            <button class="bg-white px-2 rounded"
                    @click="increment">+</button>
        </p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  mounted() {
    console.log("Component mounted.");
  },
  methods: {
    increment: function() {
      this.count += 1;
    }
  }
};
</script>
<style>
</style>
