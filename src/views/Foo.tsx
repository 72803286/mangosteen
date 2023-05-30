import { defineComponent, ref } from "vue";

export const Foo = defineComponent({
    setup() {
        const refCount = ref(0)
        const onClick = () => refCount.value += 1
        return () => <>
            <div>
                {refCount.value}Foo
            </div>
            <div>
                <button onClick={onClick}>+2</button>
            </div>
        </>
    }
})