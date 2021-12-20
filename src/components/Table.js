import React from 'react';
import '.././App.css';
import jpgIcon from '.././assets/icons/jpgIcon.png';
import pdfIcon from '.././assets/icons/pdfIcon.png';
import xmlIcon from '.././assets/icons/xmlIcon.png';

const Table = ({ files, deleteFile }) => {

    const tableRows = () => files.map((o) => (
        <tr key={o.id}>
            <td className="Table">
                {o.type === "jpg" && (<img src={jpgIcon} alt="icon" />)}
                {o.type === "jpeg" && (<img src={jpgIcon} alt="icon" />)}
                {o.type === "pdf" && (<img src={pdfIcon} alt="icon" />)}
                {o.type === "xml" && (<img src={xmlIcon} alt="icon" />)}
            </td>
            <td className="Table" onClick={() => deleteFile(o.id)}>{o.name}</td>
            <td className="Table">{o.description}</td>
            <td className="Table">{o.uploader}</td>
            <td className="Table">{o.date}</td>
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr className="Table">
                    <th> </th>
                    <th>Filename </th>
                    <th>Description </th>
                    <th>Uploaded By </th>
                    <th>Date </th>
                </tr>
            </thead>
            <tbody>
                {tableRows()}
            </tbody>
        </table>
    )
};

export default Table;