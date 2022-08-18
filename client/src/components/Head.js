import React from 'react';
import {Helmet} from "react-helmet";

const Head = () => {
    return (
        <Helmet>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="format-detection" content="telephone=no" />
            <meta http-equiv="Content-Language" lang="es" />
            <meta name="robots" content="all" />
            <meta name="geo.placename" content="Bogotá D.C., Colombia." />
            <meta name="HandheldFriendly" content="True" />
            <meta name="MobileOptimized" content="320" />
            <meta name="theme-color" content="#E6ACA9" />
            <link rel="shortcut icon" type="image/x-icon" href="./img/logo.ico" />
            <link rel="apple-touch-icon" href="./img/logo.ico" />
            <title data-rh="true">Nury Valenzuela Joyería.</title>
        </Helmet>
    );
};

export default Head;
