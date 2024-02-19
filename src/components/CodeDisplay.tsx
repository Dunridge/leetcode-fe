import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { parse, Options } from 'acorn';

const CodeDisplay = ({ func }: any) => {
  const [code, setCode] = useState('');

  const parseCode = () => {
    try {
      const codeString = func.toString();
      const options: Options = { sourceType: 'module', ecmaVersion: 2022 }; // Specify the ECMAScript version
      const parsedCode = parse(codeString, options);
      const functionCode = parsedCode.body.find((node) => node.type === 'FunctionDeclaration');
      setCode(codeString.substring(functionCode?.start, functionCode?.end));
    } catch (error) {
      console.error('Error parsing code:', error);
    }
  };

  useEffect(() => {
    parseCode();
  }, [parseCode]);

  return (
    <SyntaxHighlighter language="javascript" style={solarizedlight}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
