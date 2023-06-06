import { defineComponent } from 'vue';
export const Button = defineComponent({
  setup: (props,context) => {
    return () => (
      <button>
        {context.slots.default?.()}
      </button>
    )
  }
})