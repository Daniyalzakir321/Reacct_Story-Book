import React from 'react'
import './cart.css'

interface data {
    title: string;
    text: string;
    title_font: Number;
    text_font: Number;
}

export default function Cart({ title, text, title_font, text_font }: data) {
    return (
        <div className="main">
            <h2 style={{
                // fontSize: title_font 
            }}>
                {title}

            </h2>
            <p style={{
                //  fontSize: text_font 
            }}>
                {text}

            </p>
        </div>
    )
}
// export const Styles = {
//     fontSize: title_font,
// };