import { defineComponent, ref } from 'vue';
import { Button } from '../shared/Button';
import { Center } from '../shared/Center';
import { FloatButton } from '../shared/FloatButton';
import { Icon } from '../shared/Icon';
import { Navbar } from '../shared/Navbar';
import { Overlay } from '../shared/Overlay';
import s from './StartPage.module.scss';
export const StartPage = defineComponent({
  setup: (props, context) => {
    const refOverlayVisible = ref(false)
    const onclickstart = () => {console.log('hi');
    }
    const onClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value
    }
    
    return () => (
      <div>
        <Navbar>{
          {
            default: () => '山竹记账',
            icon: () => <Icon name='menu' class={s.navIcon} onClick={onClickMenu} />
          }
        }</Navbar>
        <Center class={s.pig_wrapper} direction='vertical' jxc='蒋晓晨'>
          <Icon name="pig" class={s.pig} />
          <Icon name="pig" class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onclickstart}>开始记账</Button>
        </div>
        <FloatButton iconName='add' />
        {refOverlayVisible.value &&
          <Overlay onClose={() => refOverlayVisible.value = false} />
        }
      </div>
    )
  }
})