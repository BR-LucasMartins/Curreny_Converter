import styled from "styled-components";

export const  Container = styled.div`
    width: 100%;
    height: calc(100vh - 85px);
    background-color: #068FFF;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        padding: 0;
    }
`;

export const Form = styled.form`
    width: 30vw;
    padding: 1.1em;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.2em;

    .input-wrapper{
        display: flex;
        flex-direction: column;
        margin-bottom: 1.8em;
        position: relative;

        label{
            margin-bottom: 1.2em;
        }

        input{
            height: 2.5em;
            max-width: 250px;
            padding: 0 .8em;
            border-radius: .3em;
            border-color: transparent;
            outline: none;
            box-shadow: 0px 0px 5px #ccc;
        }

        .coin-image{
            width: 50px;
            height: 50px;
            position: absolute;
            right: 10%;
            top: 20%
        }

        .select-container{
            display: flex;
            gap: 1.5em;

            .list-coins{
                width: 25%;

                &-info{
                    margin-top: 15px;
                    padding-left: 5px;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    

                    .flag{
                        width: 48px;
                        height: 24px;
                    }
                }
            }

            select{
                width: 100%;
                height: 2.5em;
                padding: 0 .8em;
                border-radius: .3em;
                border-color: transparent;
                outline: none;
                box-shadow: 0px 0px 5px #ccc;
            }

            button{
                width: 25%;
                height: 2.5em;
                background-color: #F5B904;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #F5B904;
                border-radius: .3em;
                font-weight: bold;
                cursor: pointer;

                img{
                    margin-right: 15px;
                }

                &:hover{
                    opacity: .8;
                }
                
            }
        }

        @media screen and (max-width: 600px) {

            .to{
                text-align: center;
                color: #dd3278;
            }

            input{
                max-width: 100%;
                height: 45px;
            }

            .coin-image{
                display: none;
            }

            .select-container{
                flex-direction: column;
                gap: 1em;

                .list-coins{
                width: 100%;

                &-info{
                    margin-top: 10px;
                    padding-left: 5px;
                    display: flex;
                    flex-direction: row;
                    
                    img{
                        display: block;
                    }

                    span{
                        margin-left: 20px;
                    }

                }
            }

                select{
                    width: 100%;
                    height: 45px;
                }

                button{
                    width: 100%;
                    height: 45px;
                    margin-top: 20px;
                }
            }
        }
    }

    .link{
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 15px;
        padding-right: 5%;

        &:hover, &:focus{
            .tooltip{
                display: flex;
            }
                
            }

        a{
            text-decoration: none;
            font-weight: bold;
            color: #dd3278;
            font-size: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: 1px solid #dd3278;
            width: 22px;
            height: 22px;
        }

        .tooltip{
            background-color: white;
            padding: .4em 1em;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            font-size: 12px;
            position: relative;
            display: none;
            transition: all .2s ease-in;

            &::before{
                box-sizing: border-box;
                content: " ";
                display: block;
                position: absolute;
                right: -8px;
                top: 50%;
                transform: translate(0, -48%);
                border-left: solid 10px #fff;
                border-top: solid 10px transparent;
                border-bottom: solid 10px transparent;
                width: 8px;
                height: 8px;
            }

        }

        
    }

    .screen-result{
            margin-top: 20px;
            width: 100%;
            min-height: 80px;
            border-radius: .3em;
            box-shadow: 0px 0px 5px #ccc;
            font-size: 1.6em;
            box-shadow: 0px 0px 5px #ccc;
            background-color: #fff; 
            padding: 1em;
    }

    @media screen and (max-width: 600px) {
        width: 100vw;
        height: 100%;

        .screen-result{
            margin-top: 15px;
        }
    }

    @media screen and (min-width: 601px) and (max-width: 1000px) {
        width: 70vw;
    }

    @media screen and (min-width: 1001px) and (max-width: 1600px) {
        width: 50vw;
    }
`;





