import React from 'react';
import About from "./components/About";
import {createRoot} from 'react-dom/client'

const reactElement = document.getElementById('root');
const root = createRoot(reactElement)

root.render(<About />);