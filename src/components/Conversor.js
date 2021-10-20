import React, { Component } from 'react';
import './Conversor.css';

export default class Conversor extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this);
    }

    converter(){
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v5/convert?q=${de_para}&compact=ultra&apiKey=be13a22ba891f3e589cf`

        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(json=>{
            let cotacao = json[de_para];
            let moedaB_valor = (parseFloat(this.state.moedaA_valor)*parseFloat(cotacao)).toFixed(2)
            this.setState({moedaB_valor})
        })
    }

    render() {
        return (
            <div className='conversor global'>
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input className='valor global' type="number" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
                <input className='botao global' type="button" value="Converter" onClick={this.converter}></input>
                <h2>R$ {this.state.moedaB_valor}</h2>
            </div>
        )
    }
}
