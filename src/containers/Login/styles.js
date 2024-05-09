import styled from 'styled-components' 

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 200px;
        border-radius: 10px;
        margin-top: 30px;
    }

    h1 {
        margin-top: 12px;
        color: #fff;
        font-size: 50px;
    }

    p{ 
        margin-top: 30px;
        color: #fff;
        font-size: 25px;
    }

    h3 {
        margin-top: 25px;
    }

    input {
        width: 200px;
        height: 30px;
        margin-top: 10px;
        border: none;
        border-radius: 10px;
        padding-left: 30px;
    }


    button {
        margin-top: 20px;
        width: 100px;
        height: 30px;
        background-color: #dcdcdc;
        border: none;
        border-radius: 10px;
        font-size: 17px;
        font-weight: bold;
        cursor: pointer;
    }


`