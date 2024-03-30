import React from 'react';
import account from './assets/account.png';

function Create() {
  return (
    <section className=" flex flex-row md:flex-col  justify-center items-center  ">
      <img src={account} alt="Create Account" className=" mr-4   phone:justify-center phone:m-auto " />
      <div>
        <h3 className=" text-orange-600 text-2xl font-bold md:text-center">Create an Account</h3>
        <h2 className='  text-3xl font-bold md:text-center md:mt-5 mt-3'> Create/login to an existing <br /> account to get started </h2>
        <p className='text-gray  md:text-center md:mt-7 font-[18px] text-gray-400 p-2 mt-3'>An account is created with your email <br /> and desired password</p>
      </div>
    </section>
  );
}

export default Create;
