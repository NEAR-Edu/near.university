<template>
  <div style="height: 1000px">
    <div class="h-full" id="form"></div>
  </div>
</template>

<script>
// <div class="typeform-widget" data-url="https://form.typeform.com/to/POs9XeBv?typeform-medium=embed-snippet" data-transparency="100" style="width: 100%; height: 1000px;"></div>
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';
import { onMounted } from '@vue/runtime-core';

export default {
  setup() {
    onMounted(() => {
      createWidget('POs9XeBv', {
        container: document.querySelector('#form'),
        width: '100%',
        height: '1000px'
      });
    });
  }
};
</script>
