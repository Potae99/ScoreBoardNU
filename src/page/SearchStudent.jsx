import axios from 'axios';
import React, { useState } from 'react'

function SearchStudent() {

    const [StudentID, setStudentID] = useState("");
    const [StudentDetail, setStudentDetail] = useState("");

    const ToStudentDetail = () => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL + '/search', { params: { studentID: StudentID } })
            .then((res) => {
                if (res.data.error === true) {
                    console.log('ERROR FOUND');
                    return;
                }
                setStudentDetail(res.data.data);
            })
            .catch((error) => {
                console.log(error.res);
            });
        window.location.href = "/StudentDetail";
    };

    return (
        <>
            <div className=' min-h-screen bg-white border border-white'>
                <h1 className=' text-center text-black text-3xl m-7'>ค้นหานิสิต</h1>
                <div className='grid grid-cols-1 place-items-center'>
                    <input className=' border border-black w-2/3 rounded-md bg-white py-3 px-6 text-black focus:border-black focus-shadow-md font-medium m-7'
                        placeholder='ค้นหานิสิต...รหัสนิสิต'
                        onChange={(event) => {
                            setStudentID(event.target.value);
                        }}
                        type='text'
                        value={StudentID}
                    />
                </div>
                <div className=' grid grid-cols-1 place-items-center'>
                    <button onClick={ToStudentDetail} class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span class="relative">ค้นหานิสิต</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SearchStudent