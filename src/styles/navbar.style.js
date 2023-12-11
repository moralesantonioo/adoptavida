import styled from 'styled-components';

export const NavbarStyle = styled.div`

    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E5E5E5;
    padding: 0 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index:  10;
    background-color: #fff;
`

export const ButtonPrimary = styled.button`
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
    background-color: #1CC00E;

    @media (min-width: 768px) {
        width: 100px;
    }
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


