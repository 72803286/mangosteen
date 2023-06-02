import { defineComponent } from 'vue';
import s from  "./First.module.scss"
import w1 from "../../assets/icons/w1.svg"
import { RouterLink } from 'vue-router';

export const First = defineComponent({
  setup: (props,context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={w1} />
        </div>
        <div class={s.actions}>
          <div class={s.fake}>__</div>
          <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
          <RouterLink to="/welcome/2" >下一页</RouterLink>
          <RouterLink to="/start" >跳过</RouterLink>
        </div>
      </div>
    )
  }
})