import styled from "@emotion/styled";

export const Feedback = styled.div`
display: flex;
flex-direction: column;
gap: 5px;

& * {
    font-weight: 500;
    margin: 0
}

& :nth-of-type(3) {
    margin-bottom: 10px
}
`