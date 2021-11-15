const Button = ({ title, activeClass, _callback }) => {

    return (
        <button className={activeClass} onclick={_callback}>{title}</button>

    )
}
export default Button