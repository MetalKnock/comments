import {ReactNode} from "react";
import {ThemeProvider} from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        palette: {
            primary: {
                main: string;
                light: string;
            };
            secondary: {
                main: string;
                light: string;
            };
            background: {
                main: string;
                dark: string;
            };
            border: {
                main: string;
                mainOpacity: string;
            };
        };
        typography: {
            fontFamily: {
                main: string;
            };
            fontWeight: {
                sm: string;
                lg: string;
            };
            fontSize: {
                sm: string;
                md: string;
            };
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }
}

const theme = {
    palette: {
        primary: {
            main: "#000",
            light: "#fff",
        },
        secondary: {
            main: "#8297AB",
            light: "#626262",
        },
        background: {
            main: "#313439",
            dark: "#0E1A1E",
        },
        border: {
            main: "#767676",
            mainOpacity: "rgba(118,188,188,0.2)",
        },
    },
    typography: {
        fontFamily: {
            main: "Lato, sans-serif",
        },
        fontWeight: {
            sm: "400",
            lg: "700",
        },
        fontSize: {
            sm: "0.875rem",
            md: "1rem",
        },
    },
    breakpoints: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
    },
};

interface ThemeProps {
    children: ReactNode;
}

function Theme({children}: ThemeProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
