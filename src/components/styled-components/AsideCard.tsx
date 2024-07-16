import styled from 'styled-components';


export const AsideCard = styled.div`
    margin-top: 24px;
    margin-left: 16px;
    padding: 8px 12px;
    border-radius: 10px;
    background: rgb(233, 233, 233);

    h1{
        font-size: 14px;
        font-weight: bold;
    }
    ul{
        list-style-type: none;
        margin-top: 8px;
    }
    li{
        display: list-item;
        text-align: -webkit-match-parent;
        unicode-bidi: isolate;
    }
    label{
        font-size: 10px;
        color: ${(props) => props.theme.colors.gray3};
    }
    p{
        font-size: 12px;
        font-weight: bold;
    }
`;