import React, { Component } from 'react';




class Botao extends Component {
    constructor(props){
        super(props)
        this.state = {
            texto: this.props.value
        }
    }


    render() {
        let resposta = this.state.texto.split('')
        return (
            <button className="primary-btn">
                {resposta.map((letra, key) => <span key={key}>{letra}</span>)}
            </button>
        );
    }
}

export default Botao;