import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 10px;
`

export const ButtonSecundary = styled.button`
    width: 80px;
    padding: 10px;
    cursor: pointer;
    border-radius: 100px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    color: black;
    border: none;
    border: 1px solid #1CC00E;
    background-color: transparent;

    @media (min-width: 768px) {
        width: 100px;
    }
`

export const ButtonStyle = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Title = styled.span`
    font-size: 15px;
    font-weight: bold;
`