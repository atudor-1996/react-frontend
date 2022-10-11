import React, { useEffect, useState, useMemo } from "react";
import axios from 'axios'
import './CNPData.css'
import ReactTable, { useTable } from 'react-table'
import { CNPCOLUMNS } from "./CNPColumns"
import Button from 'react-bootstrap/Button';

const CNPData = () => {
    const [cnpData, setcnpData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [number, SetNumber] = useState(0);
    const [err, setErr] = useState('');

    const columnCNP = useMemo(() => CNPCOLUMNS, []);
    const dataCNP = useMemo(() => cnpData, [cnpData]);
    const tableInstance = useTable({
        columns: columnCNP,
        data: dataCNP
    });
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;

    const handleInput = (event) => {
        const value = Math.max(0, Math.min(10000, isNaN(event.target.value) ? 0 : Number(event.target.value)));
        SetNumber(value);
    };

    const handleClick = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`/cnp/random/getList?number=${number}`, {
                headers: {
                    Accept: 'application/json',
                },
            });

           // console.log('data is: ', JSON.stringify(cnpData, null, 4));

            setcnpData(data);
        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };


    //console.log(cnpData);
    return (

        <div className="cnp-data">
            <input type='text' value={number} className='inputNumber' onChange={handleInput}></input>
            <Button variant="secondary" onClick={handleClick} className="btn-fetch">Fetch data</Button>
            {isLoading && <h1>loading</h1>}

            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (<tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))
                        }

                    </tr>))}

                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                                })}

                            </tr>
                        )
                    }
                    )}

                </tbody>
            </table>



        </div>
    )
}

export default CNPData
