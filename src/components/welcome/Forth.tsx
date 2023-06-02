import { defineComponent } from 'vue';
import s from  "./First.module.scss"
import w4 from "../../assets/icons/w4.svg"
import { RouterLink } from 'vue-router';

export const Forth = defineComponent({
  setup: (props,context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img  src={w4} />
          <h2>每日提醒<br />不遗漏每一笔账单</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
          <RouterLink to="/start" >开始记账</RouterLink>
          <RouterLink to="/start" >跳过</RouterLink>
        </div>
      </div>
    )
  }
})