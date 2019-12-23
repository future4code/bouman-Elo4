import React from 'react';
import styled from 'styled-components';
import AddCircle from '@material-ui/icons/AddCircleOutline'
import RemoveCircle from '@material-ui/icons/RemoveCircleOutline'
import DeleteIcon from '@material-ui/icons/Delete'

const ContainerItem = styled.div`
    border-bottom: 1px dotted black;
    width: 100%;
    padding: 2px;
`

const DadosItem = styled.div`
    display: flex;
    align-items: center;
`

const ContainerQuantidade = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`

const InputQuantidade = styled.input`
    width: 25px;
    text-align: center;
    margin: 0 5px;
`

const ContainerNome = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function ComponenteItemCarrinho(props) { 

    const aumentarInputQuantidade = () => {
        props.alteraQuantidade(props.itemCarrinho.id, 1)
    }

    const reduzirInputQuantidade = () => {
        if(props.itemCarrinho.quantidade > 1) {
            props.alteraQuantidade(props.itemCarrinho.id, -1)
        }
    }

    const tranporteFilhoPai = () => {
        props.transportePai(props.itemCarrinho.id)
    }

    return (
        <ContainerItem>
            <ContainerNome>
                <p>{props.itemCarrinho.nome}</p>
                <DeleteIcon onClick={tranporteFilhoPai} />
            </ContainerNome>
            <DadosItem>
                <ContainerQuantidade>
                    <RemoveCircle onClick={reduzirInputQuantidade} />
                    <InputQuantidade
                        readOnly
                        value={props.itemCarrinho.quantidade}
                    />
                    <AddCircle onClick={aumentarInputQuantidade} />
                </ContainerQuantidade>
                <p>R${parseFloat(props.itemCarrinho.preco*props.itemCarrinho.quantidade).toFixed(2)}</p>
            </DadosItem>
        </ContainerItem>
    )
    
};

export default ComponenteItemCarrinho;