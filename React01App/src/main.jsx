import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


function NewFunction() {
    const name = "Pranay";

    return (
        <h1>My name is {name}</h1>
    )
}

const newElement = createElement('h1', null, 'Hello World')
createRoot(document.getElementById('root')).render(
    <>
        <NewFunction />
        {newElement}
    </>
)
