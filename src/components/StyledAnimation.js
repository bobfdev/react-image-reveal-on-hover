import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;

    .cursor {
        width: 25px;
        height: 25px;
        margin: 0;
        padding: 0;
        background-color: rgb(238, 130, 31);
        border-radius: 50%;
        pointer-events: none;
        position: fixed;
        transform: translate(-50%, -50%);
    }
`

export const Title = styled.h1`
    font-size: 45px;
    letter-spacing: 4px;
    text-align: center;
    margin-top: 2rem;
    color: rgb(234, 131, 34);
`

export const U1 = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 30%);
    justify-content: center;
    margin: auto;
    position: relative;
    top: 40px;

    li {
        color: rgb(255, 255, 255);
        margin-bottom: 15px;
        padding: 7px;
        margin: 1.5rem;
        font-size: 25px;
        text-transform: uppercase;

        span {
            &:hover {
                & ~ div {
                    transform: translateX(0) scale(1);
                    opacity: 1;
                }
            }
        }
    
        .img-cont {
            position: absolute;
            width: 300px;
            /* transform: translateX(100px) scale(0.8); */
            transform: rotate(-5deg) scale(0.8);
            opacity: 0;
            transition: 0.6s;

            img {
                height: 400px;
                width: 400px;
                border: 1px solid rgb(255, 255, 255, 0.5);
                border-radius: 15px;
            }
        }
    }

  
`