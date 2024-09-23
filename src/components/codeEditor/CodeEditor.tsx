'use client'
import React from "react";
import { useState } from "react";
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
    language: string;
    code: string;
    setCode: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, code, setCode }) => {
    return (
        <div className="rounded-md ">
            <Editor
                height="450px"
                language={language}
                value={code}
                onChange={(value = '') => setCode(value)}
                theme="vs-dark" // Optional: for dark theme
            />
        </div>
    );
};

export default CodeEditor;
