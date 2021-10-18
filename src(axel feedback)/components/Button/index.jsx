const Button = ({type="submit", bgColor="#00FF00", color="#000000", width, text, height, marginTop="0"}) => {
    const style = {
        color: color,
        backgroundColor: bgColor,
        width: width,
        height: height,
        border: "none",
        fontWeight: "550",
        marginTop: marginTop,
    }
    return <button type={type} style={style}>{text}</button>
}

export default Button;