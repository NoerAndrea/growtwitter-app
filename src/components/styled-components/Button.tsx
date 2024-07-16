import styled from 'styled-components';


export const Button = styled.button`
    margin-top: 8px;
    width: 100%;
    border: none;
    border-radius: 16px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.gray7};
    padding: 8px 4px;
`;