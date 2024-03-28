import React from 'react'


import { FaRegUser } from "react-icons/fa";

function TreeModal2() {


    return (
        <div className="container">
            {/* <h1>Welcome to React</h1> */}
            <div className="main">
                <div className="first">
                    <div><button><FaRegUser /></button></div>
                    <div className="row2">
                    {Array.from({ length:4}, (_, index) => (
                        <div className="two" key={index}>
                            <div className='userTwo'>
                                <button><FaRegUser /></button>
                            </div>
                            <div className="third">
                                <div className='user'>
                                    <button><FaRegUser /></button>
                                </div>
                                <div className='user'>
                                    <button><FaRegUser /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>

                
            </div>
        </div>
    );
}

export default TreeModal2
