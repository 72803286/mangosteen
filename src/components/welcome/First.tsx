import { defineComponent } from 'vue';
import s from  "./First.module.scss"
import w1 from "../../assets/icons/w1.svg"
import { RouterLink } from 'vue-router';

export const First = defineComponent({
  setup: (props,context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img  src={w1} />
          <h2>会挣钱<br />还要会省钱</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
          <RouterLink to="/welcome/2" >下一页</RouterLink>
          <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
        </div>
      </div>
    )
  }
})