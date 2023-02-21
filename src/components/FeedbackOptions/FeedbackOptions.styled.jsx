import styled from "@emotion/styled";

export const Options = styled.div `
display: flex;
gap: 5px;

& * {
    text-transform: capitalize;
    background-color: white;
    border: 1px solid grey;
    border-radius: 3px;
    cursor: pointer;
    font-family: inherit;
    font-size: 15px
}
`