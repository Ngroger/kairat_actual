import React, { createContext, useContext, useRef, useState } from 'react';

// Создаем контекст
const WebViewContext = createContext(null);

// Провайдер контекста
export const WebViewProvider = ({ children }) => {
    const webRef = useRef(null);
    const [reloadKey, setReloadKey] = useState(0);

    // Функция для перезагрузки WebView
    const reloadWebView = () => {
        setReloadKey(prevKey => prevKey + 1);
        if (webRef.current) {
            webRef.current.reload(); // Перезагружаем WebView
        }
    };

    return (
        <WebViewContext.Provider value={{ webRef, reloadKey, reloadWebView }}>
            {children}
        </WebViewContext.Provider>
    );
};

// Хук для использования контекста
export const useWebView = () => {
    return useContext(WebViewContext);
};
