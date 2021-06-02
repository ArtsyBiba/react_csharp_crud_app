import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 100%;
    margin: auto;
    margin-top: 0.5em;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    height: 8vh;
    align-content: center;
    justify-content: space-around;
`; 

export const Subheader = styled.div`
    display: flex;
    font-weight: 600;
    font-size: 1em;
    justify-content: center;
    align-items: center;
    line-height: 8vh;
    text-transform: uppercase;
    width: 33%;
    cursor: pointer;
    border-bottom: 1px solid rgba(245,60,47,0.85);

    &:hover {
        border-bottom: 4px solid rgba(245,60,47,0.85);
        transition: all 0.3s ease 0s;
    }
`;