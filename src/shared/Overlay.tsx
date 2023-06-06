import { defineComponent } from 'vue';
export const Overlay = defineComponent({
  setup: (props,context) => {
    return () => (
      <div>Overlay</div>
    )
  }
})