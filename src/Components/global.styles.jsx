import styled from "styled-components"
import image from "./images/bg.jpg"

export const NavContainer = styled.header`
    background-color: #292929;
    padding: 20px  77px;
    color: #FFFFFF;
    display: flex;
    align-items: flex-start;

    .logo{
        padding: 10px;
        border: 1px solid white;
        text-align: center;
    }

    @media only screen and (max-width: 500px) {
        align-items: center;
        justify-content: center;
    }
    
`

export const BannerContainer = styled.section`
    background: url(${image});
    height: 600px;
    width: 100%;
    /* object-fit: cover; */
    background-repeat: no-repeat;
    background-size: cover;

    .textContent{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 72px;
        line-height: 94px;
        letter-spacing: -0.05em;

        color: #FFFFFF;
        position: absolute;
        width: 490px;
        height: 282px;
        left: 77px;
        top: 147px;
    }

    @media only screen and (max-width: 500px) {
        height: 300px;

        .textContent{
            margin: 0vh auto;
            width: 273px;
            height: 72px;
            position: static;
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 36px;
            text-align: center;
            display: flex;
            align-items: center;
            align-content: center;
            align-self: center;
            padding-top: 100px;
            /* letter-spacing: -0.05em; */
        }
    }
`

export const MoviesContainer = styled.div`
    margin: 60px 0;
    form{
        padding: 10px 77px;
        display: grid;

        input{
            padding: 12px 20px;
        }
    }

    @media only screen and (max-width: 500px) {
        margin: 30px 0;

        form{
            padding: 5px 28px;
        }
    }
`

export const DisplayContainer = styled.div`
    padding: 20px 77px;

    .categories{
        display: grid;
        gap: 10px;

        .movies{
            display: flex;
            gap: 20px;
            overflow-x: auto;
            
            

            .movie{
                flex: 1;
                width: 300px;
                height: 300px;
                border-radius: 12px;
                position: relative;
            }

            p{
                width: 300px;
                height: 300px;
                text-align: center;
                z-index: 2;
                color: white;
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 31px;
                background-color: rgb(0,0,0,0.5);
                border-radius: 12px;
                display: grid;
                align-items: center;
                opacity: 0;
                transition: all .3s;
            }

            p:hover{
                opacity: 1;
            }

            .darkBg{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1;
                width: 300px;
                height: 300px;
                border-radius: 12px;
                background:linear-gradient( rgba(0,0,0,0.1), rgb(0,0,0,0.7));
            }
        }
    }

    @media only screen and (max-width: 500px) {
        padding: 10px 28px;
    }
`