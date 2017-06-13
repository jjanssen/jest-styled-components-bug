import styled, { css } from 'styled-components';

const getSomething = function() {
    // Could be a comprehensive conditional
    return css `
        width: 100%;
    `;
}

const ExampleElem = styled.div`
    ${getSomething}
    margin: 10px;
    padding: 10px;
`;

export default ExampleElem;