import React, { Component } from 'react'
import { Text, TextInput } from 'react-native'
import estilo from '../../estilo'

export default class Mega extends Component{
    state = {
        qtdeNumero: this.props.qtdeNumero
    }

    alterarQtNumero = (qtde) => {
        this.setState({ qtdeNumero: qtde })
    }

    render(){
        return(
            <>
            <Text style={estilo.fontG}>
                Gerador de Mega-sena {this.state.qtdeNumero}
            </Text>
            <TextInput
                keyboardType= {'numeric'}
                style = {{borderBottomWidth: 1}}
                placeholder='Qtde de Números'
                value = {this.state.qtdeNumero}
                onChangeText={this.alterarQtNumero}
            />
            </>
        )
    }
}