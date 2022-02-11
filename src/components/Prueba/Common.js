const Common = {
    ButtonSubmit: ({text}) => (<button style={{color:"red"}} variant="primary" size="lg">{text}</button>),
    TitleLabel: ({text, estilo}) => (<p className={estilo}> {text}</p>)
}

export default Common;