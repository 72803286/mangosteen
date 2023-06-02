import { defineComponent } from 'vue';
import s from  "./WelcomeLayout.module.scss"
import w4 from "../../assets/icons/w4.svg"
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const Forth = defineComponent({
  setup: (props,context) => {
    const slots = {
      icon:() => <img src={w4} />,
      text:() => <h2>每日提醒<br />不遗漏每一笔账单</h2>,
      buttons:() => <>
          <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
          <RouterLink to="/start" >开始记账</RouterLink>
          <RouterLink to="/start" >跳过</RouterLink>
          </>
    }
    return () => (
      <WelcomeLayout v-slots = {slots}></WelcomeLayout>
    )
  }
})