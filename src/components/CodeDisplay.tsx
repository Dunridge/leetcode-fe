import React, { useEffect, useState, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { parse, Options } from 'acorn';

const CodeDisplay = ({ func }: any) => {
  const [code, setCode] = useState('');

  const parseCode = useCallback(() => {
    try {
      const codeString = func.toString();
      const options: Options = { sourceType: 'module', ecmaVersion: 2022 };
      const parsedCode = parse(codeString, options);
      const functionCode = parsedCode.body.find((node) => node.type === 'FunctionDeclaration');
      setCode(codeString.substring(functionCode?.start, functionCode?.end));
    } catch (error) {
      console.error('Error parsing code:', error);
    }
  }, [func]);

  useEffect(() => {
    parseCode(); // Call parseCode directly inside the useEffect
  }, [parseCode]); // Include parseCode in the dependency array

  return (
    <SyntaxHighlighter language="javascript" style={solarizedlight}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
