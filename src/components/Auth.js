import React, { useState } from 'react';
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";

function Auth() {
 const [signup, setSignup] = useState(true);
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [loginError, setLoginError] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    // add your frontend logic here
 };

 const handleLogin = (e) => {
    e.preventDefault();
    // add your frontend logic here
 };

 return (
   <>
   
     <div className="inset-0  bg-opacity-75">
       <div className="flex min-h-full   items-center justify-center p-4 text-center">
         <div className="  w-full max-w-md  transform overflow-hidden  rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
           <h3 className="text-xl font-semibold lwading-6 text-gray-900">
             {signup ? "Create Account" : "Account Sign In"}
           </h3>

         

           <form
             className="w-full flex flex-col gap-5"
             onSubmit={handleSubmit()}
           >
             <TextInput
               name="email"
               label="Email Address"
               placeholder="email@example.com"
               type="email"
               
             />

             {signup && (
               <div className="w-full flex gap-1 md:gap-2">
                 

               {(
                       <div className="w-full grid grid-cols-2 gap-2 ">
                   <TextInput
                     name="firstName"
                     label="First Name"
                     placeholder="eg. James"
                     type="text"
                   
                
                   />

                   <TextInput
                     name="lastName"
                     label="Last Name"
                     placeholder="Wagonner"
                     type="text"
                    
                   
                   />
                 </div>
               )}

              
                 
               </div>

             )}

             <div className="w-full grid grid-cols-2 gap-1 md:gap-2">
               <TextInput                                                                                                                                
                 name="password"
                 label="Password"
                 placeholder="Password"
                 type="password"
               
                 
               />

               {signup && (
                 <TextInput
                   label="Confirm Password"
                   placeholder="Password"
                   type="password"
                  
                  
                 />
               )}
             </div>

             {/* ... Other form inputs */}

            

             <div className="mt-2">
               <CustomButton
                 type="submit"
                 containerStyles={`inline-flex justify-center rounded-md bg-blue-600 px-8 py-2 text-sm font-medium text-white outline-none hover:bg-blue-800`}
                 title={signup ? "Create Account" : "Login Account"}
               />
             </div>
           </form>

           <div className="mt-4">
             <p className="text-sm text-gray-700">
               {signup
                 ? "Already have an account?"
                 : "Do not have an account"}

               
             </p>
           </div>
         </div>
       </div>
     </div>
   
 </>
 );
}

export default Auth;