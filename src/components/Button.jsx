const Button = ({ title, activeClass, _callback }) => {

    console.log('Boton', title, activeClass, _callback)
    return (
        <button button className={activeClass}
            onClick={_callback} > {title}
        </button >
    )
}
export default Button