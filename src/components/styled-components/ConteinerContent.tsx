import styled from 'styled-components';


export const ContainerContent = styled.main`
    padding: 12px 24px;
    width: 50%;
    background-color: rgb(29, 155, 240);
    color: ${(props) => props.theme.colors.gray8};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;