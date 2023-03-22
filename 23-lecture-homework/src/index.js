import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import './index.css'

const App = () => {
    return (
        <div>
            <h1>Курс валют</h1>
            <p>Станом на: {data[0].exchangedate}</p>
            <table>
                <thead>
                    <th>Скорочення</th>
                    <th>Назва</th>
                    <th>Ціна</th>
                </thead>
                <tbody>
                    {data.map(item => {
                        return (

                            <tr>
                                <td>{item.cc}</td>
                                <td>{item.txt}</td>
                                <td>{item.rate}</td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));