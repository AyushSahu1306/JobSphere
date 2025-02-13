import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoMdDocument } from "react-icons/io";
import { CustomButton } from "../components";
import { apiRequest } from "../utils";
import { useParams,useNavigate } from "react-router-dom";

const Apply = () => {
    const {user} = useSelector((state) => state.user);
    // console.log(user);
    const { jobId } = useParams();
    // console.log("jobId", jobId);
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [formData, setFormData] = useState({
        name: user.firstName + " " +user.lastName,
        email: user.email,
        resume: user?.cvUrl || null,
    });

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrMsg(null);
        const {name,email,resume} = formData;
        if(!resume){
            setErrMsg("Please upload your resume in profile section.");
            setIsLoading(false);
            return;
        }
        
        try {
            const res = await apiRequest({
              url: `/jobs/apply-job/${jobId}`,
              token: user?.token,
              data: formData,
              method: "POST",
            });
            console.log("error",res);
            if (res.status === false) {
                setErrMsg({status:"failed",message: res.message});
            } else {
              setErrMsg({ status: "success", message: res.message });
              setTimeout(() => {
                // window.location.reload();
                navigate("/job-detail/"+jobId);
              }, 2000);
            }
            setIsLoading(false);
          } catch (error) {
            console.log("error2",error);
            setIsLoading(false);
          }

    };

    return (
        <div>
            <div className="m-auto w-[45%] p-3 bg-white shadow-md rounded-md">
                <div className='text-center p-2 text-2xl'>Apply for Job</div>
                <form onSubmit={handleSubmit}>
                   <div className='p-2 flex justify-around'>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            readOnly
                            className=' border rounded px-2 py-2 w-[35%]'
                        />
                    </div>

                    <div className='p-2 flex justify-around'>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            readOnly
                            className='border rounded px-2 py-2 w-[35%]'
                        />
                    </div>

                    <div className='p-2 flex justify-around'>
                        <label htmlFor="resume">Resume:</label>
                               
                    {formData.resume ? 
                    <a 
                        href={formData.resume}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex justify-centre w-[35%] items-center hover:bg-gray-600  text-center  bg-gray-500 text-white py-2 px-2 rounded">
                        <IoMdDocument  className="w-10"/>
                        <p className="">
                        View Resume
                        </p>
                    </a>
                    : 
                        <div className="w-[35%] items-center hover:bg--600  text-center  py-2 rounded">
                            <div className='border-2 py-1 bg-purple-200 text-gray-800'> No resume found</div>
                            <div className='text-xs'>*Please upload your resume in profile section.</div>
                        </div>
                                  }
                    </div>
                    <CustomButton
                          type="submit"
                          containerStyles="mx-[40%] my-5 rounded-md border border-transparent bg-purple-600 px-8 py-2 text-sm font-medium text-white hover:bg-purple-200 hover:text-purple-500 focus:outline-none "
                          title={"Submit"}
                        />
                        {errMsg && (
                        <div role="alert" className={`text-sm  text-center ${errMsg.status === "success"?"text-green-600":"text-red-500"} mt-0.5`}>
                        {errMsg.message}
                        </div>
            )}
                </form>
            </div>
        </div>
    );
};

export default Apply;