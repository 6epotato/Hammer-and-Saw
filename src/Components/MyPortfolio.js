import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <div class="flex items-center h-screen w-full justify-center">

                <div class="max-w-xs">
                    <div class="bg-white shadow-xl rounded-lg py-3">
                        <div class="avatar placeholder p-2 grid items-center">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-24 mx-auto">
                                <span class="text-3xl">A</span>
                            </div>
                        </div>
                        <div class="p-2">
                            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Arifur Rahman</h3>
                            <div class="text-center text-gray-400 text-xs font-semibold">
                                <p>Web Developer</p>
                            </div>
                            <table class="text-xs my-3">
                                <tbody><tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Email Address</td>
                                    <td class="px-2 py-2">aarifurrahman93@gmail.com</td>
                                </tr>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Educational Background</td>
                                        <td class="px-2 py-2">B.sc in CSE</td>
                                    </tr>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Skills</td>
                                        <td class="px-2 py-2">React,Express js, MongoDB, Javascript,Node js</td>
                                    </tr>
                                </tbody></table>

                            <div class="text-center my-3">
                                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="https://fluffy-madeleine-5a9581.netlify.app/">Project 1</a>
                            </div>
                            <div class="text-center my-3">
                                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="https://tour-mania.web.app/">Project 2</a>
                            </div>
                            <div class="text-center my-3">
                                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="https://best-electronics-58258.web.app/">Project 3</a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;