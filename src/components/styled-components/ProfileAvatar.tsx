import styled from 'styled-components';


export const ProfileAvatar = styled.div`
    display: flex;
    
    margin-bottom: 10px;

    h1{
        font-size: 12px;
        font-weight: bold;
    }
    p{
        color: ${(props) => props.theme.colors.gray3};
        font-size: 12px;
    }   
`;