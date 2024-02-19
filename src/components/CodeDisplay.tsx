import React, { useEffect, useState, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { parse, Options } from 'acorn';

const CodeDisplay = ({ func }: any) => {
    const [code, setCode] = useState(func);
    // TODO: fix the code comming in compiled 

    //   const parseCode = useCallback(() => {
    //     try {
    //       const codeString = func.toString();
    //       const options: Options = { sourceType: 'module', ecmaVersion: 2022 };
    //       const parsedCode = parse(codeString, options);
    //       const functionCode = parsedCode.body.find((node) => node.type === 'FunctionDeclaration');
    //       setCode(codeString.substring(functionCode?.start, functionCode?.end));
    //     } catch (error) {
    //       console.error('Error parsing code:', error);
    //     }
    //   }, [func]);

    //   useEffect(() => {
    //     parseCode(); 
    //   }, [parseCode]); 

    return (
        // TODO: fix this to work in the deployed version
        <SyntaxHighlighter language="javascript" style={atomDark}>
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeDisplay;
