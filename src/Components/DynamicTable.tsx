import React from 'react';

function DynamicTable(props: { tableData: any }) {
    return (
        <section className='w-[100vw] h-auto md:px-24 px-4  overflow-x-auto '>
            <h1 className='text-4xl md:py-8 py-4 text-[#ff8605] capitalize' >Participant  Details</h1>

            <table className="table-auto min-w-full border  text-center ">
                <thead className="bg-orange-500 text-white">
                    <tr>
                        {Object.keys(props.tableData[0]).map((key, index) => (
                            key !== "Timestamp" && key !== "Mobile number " && (
                                <th key={index} className="px-4 py-2">{key}</th>
                            )
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.tableData.map((item: any, index: number) => (
                        <tr key={index} className={index % 2 === 0 ? '' : ''}>
                            {Object.entries(item).map(([key, value]: any, index) => (
                                key !== "Timestamp" && key !== "Mobile number " && (
                                    <td key={index} className="border text-white px-4 py-2">{value}</td>
                                )
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default DynamicTable;
