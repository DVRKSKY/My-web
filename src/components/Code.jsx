import React, { useEffect, useState, useRef } from 'react';
import MonacoEditor from 'react-monaco-editor';

export default function Code({ data }) {
    const options = {
        selectOnLineNumbers: true,
        scrollbar: {
            vertical: 'visible',
            horizontal: 'visible',
            horizontalSliderSize: 5,
            verticalScrollbarSize: 5,
        },
        minimap: {
            enabled: false // Para deshabilitar el minimapa también
        }
    };

    const editorRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);  // Nuevo estado para rastrear si el componente se ha montado

    const editorDidMount = (editor, monaco) => {
        editor.focus();
        editorRef.current = editor;

        monaco.editor.defineTheme('myTheme', {
            base: 'vs',
            inherit: true,
            colors: {
                'editor.foreground': '#000000',
                'editor.background': '#FFFFFF',
                'editorCursor.foreground': '#8B0000',
                'editor.lineHighlightBackground': '#0000FF20',
                'editorLineNumber.foreground': '#58F7F7',
                'editor.selectionBackground': '#88000030',
                'editor.inactiveSelectionBackground': '#88000015'
            },
            rules: [
                { token: 'comment', foreground: '58F7F7' },
                { token: 'variable', foreground: '58F7F7' },
                { token: 'keyword', foreground: '58F7F7' },
                // añade más reglas según tus necesidades
            ]
        });
        

        editor.updateOptions({ theme: 'myTheme' }); // Utilizar el tema personalizado
    };

    const onChange = (newValue, e) => {
        console.log('onChange', newValue, e);
    };

    useEffect(() => {
        const handleResize = () => {
            if (editorRef.current) {
                editorRef.current.layout();
            }
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (editorRef.current) {
            const model = editorRef.current.getModel();
            model.setValue(data);
        }
    }, [data]);

    useEffect(() => {
        setIsMounted(true); // Marcar el componente como montado después de que se haya montado
    }, []);

    return (
        // Sólo renderizar MonacoEditor después de que el componente se haya montado
        isMounted && (
            <MonacoEditor 
                width="100%"
                height="90%"
                language="javascript"
                theme="myTheme"
                value={data}
                options={options}
                onChange={onChange}
                editorDidMount={editorDidMount}
            /> 
        )  
    );
}
