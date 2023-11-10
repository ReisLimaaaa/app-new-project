import React, { Component } from 'react'
import { Button, Text, TextInput } from 'react-native'
import estilo from '../../estilo'

export default class Mega extends Component{
    state = {
        qtdeNumero: this.props.qtdeNumero,
        numero:[]
    }

    alterarQtNumero = (qtde) => {
        this.setState({ qtdeNumero: +qtde })
    }

    gerarNumeros = () =>{
        const numero = Array (this.state.qtdeNumero)
        .fill()
        .reduce(n => [...n, this.gerarNumNaoContido(n)], [])
        this.setState({numero})
    }

    gerarNumNaoContido = nums =>{
        const novo = parseInt(Math.random()*60)+1
        return nums.includes(novo)? this.gerarNumNaoContido(nums): novo
    }

    render(){
        return(
            <>
            <Text style={estilo.fontG}>
                Gerador de Mega-sena
            </Text>
            <TextInput
                keyboardType= {'numeric'}
                style = {{borderBottomWidth: 1}}
                placeholder='Qtde de Números'
                value = {this.state.qtdeNumero}
                onChangeText={this.alterarQtNumero}
            />
            <Button title='Gerar' onPress={this.gerarNumeros}/>
            <Text>
                {this.state.numero.join(',')}
            </Text>
            </>
        )
    }
}