import React, { useEffect, useState } from "react";
import { apiRequest } from "../utils";
import { useSelector } from "react-redux";
import { Loading } from "../components";
import { useNavigate } from "react-router-dom";

const Application = () => {
    const {user} = useSelector(state => state.user);
    const [applications,setApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const navigate = useNavigate();

    const fetchUserApplications = async()=>{
        setIsLoading(true);
        try {
            const response = await apiRequest({
                url:`users/applications/${user._id}`,
                method:"GET", 
            });
            // console.log(response.data);
            setApplications(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setError(error.message);
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchUserApplications();
    },[]);

    if(isLoading){
        return <Loading/>
    }
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">My Job Applications</h2>
      
      {applications.length === 0 ? (
        <p className="text-gray-500 min-h-[15vh]">You have not applied for any jobs yet.</p>
      ) : (
        <ul className="space-y-4">
          {applications.map((app) => (
            <li key={app._id} className="p-4 bg-white shadow-md rounded-lg border">
            <div className="flex justify-between ">
                <div>
                    <img src={app.companyProfileUrl} alt={app.company} className="w-12 h-12" />
                    <p className="text-black">{app.company}</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">{app.jobTitle}</h3>
                    <p className="text-sm text-gray-500">Applied on: {new Date(app.appliedAt).toLocaleDateString()}</p>
                    <p className="text-sm text-gray-500">Location: {app.location}</p>
                </div>
                <div>
                    <button 
                    className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                    onClick={() =>navigate(`/job-detail/${app.jobId}`)}
                >
                    View Details
                </button>
                </div>
            </div>
             
             
              
            </li>
          ))}
        </ul>
      )}
    </div>
    );
}

export default Application;