import React, { useEffect } from "react";
import { useState } from "react";
import { apiRequest } from "../utils";
import { useParams } from "react-router-dom";
const Applicants = () => {

    const {id} = useParams();
    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchApplicants = async()=>{
        try {
            const response = await apiRequest({
                url:`/jobs/applicants/${id}`,
                method:"GET",
            });
            console.log("zx",response.data);
            setApplicants(response.data);
        } catch (error) {
            setError(error.message);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchApplicants();
    },[])


    //  return (
    //     <div className="max-w-4xl mx-auto p-4">
    //       <h2 className="text-xl font-semibold mb-4">Job Applications </h2>
          
    //       {
    //     //   applicants.length === 0 ? (
    //     //     <p className="text-gray-500 min-h-[15vh]"></p>
    //     //   ) : (
    //     //     <ul className="space-y-4">
    //     //       {/* {applications.map((app) => (
    //     //         <li key={app._id} className="p-4 bg-white shadow-md rounded-lg border">
    //     //         <div className="flex justify-between ">
    //     //             <div>
    //     //                 <img src={app?.companyProfileUrl ?? userProfile} alt={app.company} className="w-12 h-12" />
    //     //                 <p className="text-black">{app.company}</p>
    //     //             </div>
    //     //             <div>
    //     //                 <h3 className="text-lg font-semibold">{app.jobTitle}</h3>
    //     //                 <p className="text-sm text-gray-500">Applied on: {new Date(app.appliedAt).toLocaleDateString()}</p>
    //     //                 <p className="text-sm text-gray-500">Location: {app.location}</p>
    //     //             </div>
    //     //             <div>
    //     //                 <button 
    //     //                 className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
    //     //                 onClick={() =>navigate(`/job-detail/${app.jobId}`)}
    //     //             >
    //     //                 View Details
    //     //             </button>
    //     //             </div>
    //     //         </div>
                 
                 
                  
    //     //         </li>
    //     //       ))} */}
    //     //     </ul>
    //     //   )
    //       }
    //     </div>
    //     );
    return (
        <div className="p-6 w-[35%] bg-white shadow-lg rounded-md">
          <h2 className="text-xl font-semibold mb-4">Applicants</h2>
    
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
    
          {applicants.length === 0 && !loading && <p>No applicants yet.</p>}
    
          <ul className="space-y-4">
            {applicants.map((applicant) => (
              <li
                key={applicant._id}
                className="p-3 border rounded-md shadow-md flex justify-around items-center"
              >
                
                <div>
                  <h3 className="text-md font-bold">{applicant.name}</h3>
                  {/* <p className="text-gray-600">{applicant.email}</p> */}
                  <a 
                    href={`mailto:${applicant.email}`} 
                    className="text-blue-500 hover:underline"
                    >
                    {applicant.email}
                    </a>
                </div>
                <a
                  href={applicant.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 text-white px-2 py-2 rounded-md hover:bg-purple-600"
                >
                  View Resume
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Applicants;