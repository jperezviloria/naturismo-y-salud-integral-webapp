import styled from "styled-components"


export const Principal = styled.div `
    display: grid;
    grid-template-columns: 80% 20%;
    font-family: 'Kumbh Sans', sans-serif;
    background-color:#f6f5f1;
    
    div{
        &.content{
            overflow-y:scroll;
            height: 700px;
        }
    }

`


export const WelcomeStyle = styled.div `
    display: grid;
    grid-template-columns: 30% 60%;
    align-items: center;
    justify-content: center;
    img{
        width: 250px;
    }
    p{
        font-size:24px;
    }
`

export const HeaderStyle = styled.div `
    background-color: #bedbbb;
    display: grid;
    grid-template-columns: repeat(1, 50%);
    grid-template-rows: repeat(4, 50px);
    justify-content: center;
    text-align: center;
    color: red;
    height: 700px;
    

    a{
        display:grid;
        align-content:center;
        text-decoration: none;
        padding: 3px 4px;
        background-color: white;
        color:black;
        border: 2px solid #7ea04d;
        border-radius: 5px;
        
        margin: 5px 0;
    }
    
`

export const ServiceStyle = styled.div`
    background-color:#f6f5f1;
    margin: 100px auto;
    display: grid;
    justify-content: center;
    border: 3px solid #7ea04d;
    box-shadow: 5px 10px 20px #a6a6a4;
    width: 90%;
    text-align: center;
    border-radius: 20px;
    img{
        width: 100px;
        margin: 0 auto;
    }

    p{
        &.price{
            padding: 4px 7px;
            background-color: #ffffff;
            border: 2px solid #838383;
            font-size: 26px;
            border-radius: 4px;
            color: #59886b;
            font-weight:800;
            
        }
    }
`


export const ServiceBaseStyle = styled.div`
    background-color: #effad3;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    justify-content: center;
    
`

export const ContactFormStyle = styled.div`
    display: grid;
    text-align: center;
    justify-content: center;
    padding-bottom: 100px;
    form{
        border: 3px solid #7ea04d;
        border-radius: 10px;
        display: grid;
        grid-template-columns: repeat(1, 50%);
        justify-content: center;
        width: 600px;

        input{
            text-align: center;
            margin: 10px 0;
            padding: 10px ;
            font-family: 'Kumbh Sans', sans-serif;
            border: 2px solid #838383;
        }    
        select{
            margin: 10px 0;
            border: 2px solid #838383;
            background-color: white;
            padding: 10px ;
            font-family: 'Kumbh Sans', sans-serif;
            
            option{
                text-align: center;
        }
        }
        
        textarea{
            border: 2px solid #838383;
            margin: 10px 0 40px;
            text-align: center;
            padding: 10px;
            resize: none;
            font-family: 'Kumbh Sans', sans-serif;
        }
        button{
            font-family: 'Kumbh Sans', sans-serif;
            margin: 0 0 30px;
            padding: 15px;
            border-radius: 5px;
            border: 3px solid #7ea04d;
            background-color: #effad3;
            font-weight: 800;
        }
    }
    
`