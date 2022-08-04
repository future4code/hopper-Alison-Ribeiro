import styled from "styled-components"

export const BotaoPadrao = styled.button`
    background-color: black;
    color: white;
    border-radius: 8px;
    padding: 3px 5px;
    font-size: 12px;
    border: 2px solid #D24D57;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    margin: 0px 5px;
    &:hover {
            background-color: #D24D57; /* Green */
            color: white;
        }
    &:after{
            background: #D24D57;
            -moz-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
            -ms-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
            -webkit-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
            transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    }
    &:link, :visited{
            margin: 30px auto 0;
            padding: 14px 15px;
            color: #fff;
            font-size:14px;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            overflow: hidden;
            letter-spacing: .08em;
            border-radius: 0;
            text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
            -webkit-transition: all 1s ease;
            -moz-transition: all 1s ease;
            -o-transition: all 1s ease;
            transition: all 1s ease;
    }
    &:link::after, :visited::after{
            z-index: -1;
            -webkit-transition: all 0.75s ease 0s;
            -moz-transition: all 0.75s ease 0s;
            -o-transition: all 0.75s ease 0s;
            transition: all 0.75s ease 0s;
    }
`