import {createGlobalStyle} from "styled-components";
import {BREAKPOINTS} from "@/constants/breakpoints";
import background from "@/assets/backgrounds/background.png";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        display: flex;
        min-height: 100%;

        font-family: ${({theme}) => theme.typography.fontFamily.main};
        font-size: ${({theme}) => theme.typography.fontSize.md};
        font-weight: ${({theme}) => theme.typography.fontWeight.sm};
        color: ${({theme}) => theme.palette.primary.light};

        background: ${({theme}) => theme.palette.background.dark};
        background-image: url(${background});
        background-size: cover;
        background-attachment: fixed;

        @media (max-width: ${BREAKPOINTS.lg}px) {
            background-position: -477px;
        }

        @media (max-width: ${BREAKPOINTS.md}px) {
            font-size: ${({theme}) => theme.typography.fontSize.xs};
        }
    }

    main {
        display: block;
    }

    #root {
        display: flex;
        flex: 1 1 100%;
        flex-direction: column;
        justify-content: space-between;
    }

   

    // Normalize

    html {
        line-height: 1.15;
        text-size-adjust: 100%;
    }

    body {
        margin: 0;
    }

    main {
        display: block;
    }

    h1 {
        margin: 0.67em 0;
        font-size: 2em;
    }

    hr {
        overflow: visible;
        box-sizing: content-box;
        height: 0;
    }

    pre {
        font-family: monospace;
        font-size: 1em;
    }

    a {
        background-color: transparent;
    }

    abbr[title] {
        text-decoration: underline;
        text-decoration: underline dotted;
        border-bottom: none;
    }

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp {
        font-family: monospace;
        font-size: 1em;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    img {
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        margin: 0;
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    legend {
        display: table;

        box-sizing: border-box;
        max-width: 100%;
        padding: 0;

        color: inherit;
        white-space: normal;
    }

    progress {
        vertical-align: baseline;
    }

    textarea {
        overflow: auto;
    }

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        appearance: textfield;
        outline-offset: -2px;
    }

    [type="search"]::-webkit-search-decoration {
        appearance: none;
    }

    ::-webkit-file-upload-button {
        font: inherit;
        appearance: button;
    }

    details {
        display: block;
    }

    summary {
        display: list-item;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none;
    }
`;
