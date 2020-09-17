import style from './style';

const CardPlaceholder = () => <article class={style.wrapper}>
    <div class={style['avatar-wrapper']}>
        <div class={style.avatar}>
        </div>
    </div>
    <div class={style['text-wrapper']}>
        <span class={style.title}></span>
        <span class={style.description}></span>
        <span class={style.description}></span>
    </div>
</article>

export default CardPlaceholder;