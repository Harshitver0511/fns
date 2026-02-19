import React from "react";
import "./Committes.css";


import anni from "../image/anni.png";
import pkjain from "../image/pkjain.png";
import sub from "../image/subrata.png";
import niki from "../image/nikisweta.png";
import abhay from '../image/abhay.png';
import sanjeev from '../image/sanjeev.png';
import awadh from '../image/awadh.png';
import naik from '../image/naik.png';

function Committes() {
  const adv = [
    { name: "Prof. Krishna N. Ganesh", title: "Founder Director", affiliation: "IISER Pune and Tirupati, and SERB National Chair, India.", award: "Padma Shri awardee" },
    { name: "Prof. Avesh K. Tyagi", title: "Director Chemistry Group", affiliation: "DAE-BARC, India.", award: null },
    { name: "Dr. Asish Lele", title: "Director", affiliation: "NCL Pune, India.", award: "Shanti Swaroop Bhatnagar awardee" },
    { name: "Prof. Liming Dai", title: "Director", affiliation: "ARC Centre of Excellence for Carbon Science and Innovation, UNSW, Australia.", award: "ARC laureate fellow" },
    { name: "Prof. Alexander M Seifalian", title: "Director & Prof", affiliation: "Centre for Nanotechnology & Regenerative Medicine, UCL, England.", award: null },
    { name: "Prof. Dr. Madhav Mallia", title: "Member secretary, and Head Radiopharmaceutical committee", affiliation: "DAE-BARC, Mumbai, India.", award: null },
    { name: "Prof. Rohit Srivastava", title: "Prof. Dept. of Bioscience and Bio. Engg.", affiliation: "IIT-Bombay, Mumbai, India.", award: "Shanti Swaroop Bhatnagar & Vigyan Shri awardee" },
    { name: "Prof. Thomas J. Webster", title: "Prof.", affiliation: "Northeastern University, USA.", award: "Nobel Prize nominee Chemistry 2023" },
    { name: "Prof. Ambarish Ghosh", title: "Prof.", affiliation: "CeNSE-IISc, Bengaluru, India.", award: "Shanti Swaroop Bhatnagar awardee" },
    { name: "Dr. Binay Saikia", title: "Chief Scientist", affiliation: "CSIR-NEIST, Assam, India.", award: "Shanti Swaroop Bhatnagar awardee" },
    { name: "Prof. Amol Kulkarni", title: "Chief Scientist", affiliation: "CSIR-NCL Pune, Maharashtra, India.", award: "Shanti Swaroop Bhatnagar awardee" },
    { name: "Prof. Sagar Pal", title: "Dean R&D, and Prof. Dept. of Chem. and Chem. Bio.", affiliation: "IIT(ISM) Dhanbad, India.", award: "MRSI and R. D. Desai awardee" },
    { name: "Prof. Ram Sharan Singh", title: "HAG and BIS chai Prof. Dept. of Chem. Engg. & Tech.", affiliation: "IIT-BHU, India.", award: null },
    { name: "Prof. A Venu Vinod", title: "Dean F&W & Prof. Dept. of Chem. Engg", affiliation: "NIT Warangal, India.", award: null },
    { name: "Prof. Samrat Mukherjee", title: "Dean S&W and Prof. Dept of Physics", affiliation: "NIT Patna.", award: null },
    { name: "Prof. Michael S Strano", title: "Professor Dept. of Chem. Engg", affiliation: "MIT, USA.", award: null },
    { name: "Prof. Pallab Banerji", title: "HAG Prof. Mater. Sci. Centre", affiliation: "IIT-Kharagpur, India.", award: null },
    { name: "Prof. Yogesh Chandra Sharma", title: "Prof. Dept. of Chem.", affiliation: "IIT-BHU, India.", award: null },
    { name: "Prof. M. Arivazhagan", title: "Head & Professor Dept. of Chemical Engineering", affiliation: "NIT-Trichy, India.", award: null },
    { name: "Prof. Ram K. Gupta", title: "Prof. Dept. of Chem.", affiliation: "Pittsburg State University, USA.", award: null },
    { name: "Prof. Tarun K. Misra", title: "Dean R&D, and Prof. Chemistry", affiliation: "NIT Agartala, India.", award: null },
    { name: "Prof. Pallab Ghosh", title: "Prof. Dept. of Chemical Engineering", affiliation: "IIT Guwahati, India.", award: null },
    { name: "Prof. G. Pugazhenthi", title: "Prof. Dept. of Chemical Engineering", affiliation: "IIT Guwahati, India.", award: null },
    { name: "Prof. Dr. Raghumani Singh Ningthoujam", title: "Scientist Chem. Div.", affiliation: "DAE-BARC, India.", award: null },
    { name: "Prof. Arun Chattopadhyay", title: "Prof. Dept. of Chemistry & Centre for Nanotech.", affiliation: "IIT-Guwahati, India.", award: null },
    { name: "Prof. Prolay Das", title: "Professor Dept. of Chem.", affiliation: "IIT Patna, India.", award: null },
    { name: "Prof. Debapriya Mandal", title: "Professor, Dept. of Chem. Engg", affiliation: "IIT-Jammu, India.", award: null },
    { name: "Prof. Debabrata Mandal", title: "Head and Assoc. Prof. Dept. of Biotech.", affiliation: "NIPER Hajipur, India.", award: null },
    { name: "Prof. Sahid Hussain", title: "Assoc. Prof. Dept. of Chem.", affiliation: "IIT Patna, India.", award: null },
    { name: "Dr. Amitava Acharya", title: "Principal Scientist", affiliation: "CSIR-IHBT, Palampur, India.", award: null },
    { name: "Prof. Dr. Betty CA", title: "Head N & BS Section Chem. Div.", affiliation: "DAE-BARC, India.", award: null },
    { name: "Prof. Subinoy Rana", title: "Asst. Prof. Mat. Research Cent.", affiliation: "IISc Bengaluru, India.", award: null },
    { name: "Prof. Madhav Chavhan", title: "Asst. Prof. Science", affiliation: "University of Ostrava, Czech Republic.", award: null },
    { name: "Prof. Isha Mutreja", title: "Asst. Prof. Dept. of Rest. Sci.", affiliation: "University of Minnesota, USA.", award: null },
    { name: "Prof. Shubhi Gupta", title: "Asst. Prof. Fuel, Metals and Metallur. Engg.", affiliation: "IIT(ISM) Dhanbad, India.", award: null }
  ];
  
  return (
    <>
      <div className="mx-2 md:mx-20">
        <div className="committees-layout my-5 py-5">
          <h2 className="text-2xl text-red-700 font-bold">Meet Our Team</h2>
          <div className="min-h-screen p-6">
            {/* Director Section */}
            <div className="text-center mb-12">
              <img
                className="mx-auto  w-40 h-40 object-cover"
                src={pkjain}
                alt="Prof. Pradip K. Jain"
              />
              <h2 className="text-3xl font-bold text-red-600 mt-4">
                Prof. Pradip K. Jain
              </h2>
              <p className="text-gray-700 text-2xl">Director, NIT Patna</p>
            </div>

            {/* Conveners and Treasurer Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
              {/* Convener */}
              <div>
                <h2 className="text-blue-900 text-2xl font-bold">Convener</h2>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={sub}
                  alt="Prof. Subrata Das"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Prof. Subrata Das
                </h3>
                <p className="text-gray-700 text-xl">
                  Assoc. Prof. and Head Dept. of Chem. & Dept. of Chem. Engg.
                  and Tech
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>

              {/* Co-Convener */}
              <div>
              <h2 className="text-blue-900 text-2xl font-bold">Co-Convener</h2>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={anni}
                  alt="Prof. Aniruddha Paul"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Prof. Aniruddha Paul
                </h3>
                <p className="text-gray-700 text-xl">
                  Asst. Prof Dept. of Chem. 
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>

              {/* Treasurer */}
              <div>
              <h2 className="text-blue-900 text-2xl font-bold">Treasurer</h2>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={niki}
                  alt="Prof. Niki S. Jha"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Prof. Niki S. Jha
                </h3>
                <p className="text-gray-700 text-xl">
                  Assoc. Prof. Dept. of Chem. 
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>
            </div>

            {/* Organising Secretaries Section */}
            <h3 className="text-2xl text-blue-900 font-bold text-center mb-6">
              Organising Secretaries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {/* Dr. Sanjeev Verma */}
              <div>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={sanjeev}
                  alt="Dr. Sanjeev Verma"
                />
                <h4 className="text-xl font-semibold mt-4">
                  Dr. Sanjeev Verma
                </h4>
                <p className="text-gray-700 text-xl">
                  Asst. Prof  Dept. of Chem. Engg.
                  and Tech
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>

              {/* Dr. Awadh K. Kumar */}
              <div>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={awadh}
                  alt="Dr. Awadh K. Kumar"
                />
                <h4 className="text-xl font-semibold mt-4">
                  Dr. Awadh K. Kumar
                </h4>
                <p className="text-gray-700 text-xl">
                  Asst. Prof Dept. of Chem. Engg.
                  and Tech
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>

              {/* Dr. Abhay K. Choudhary */}
              <div>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={abhay}
                  alt="Dr. Abhay K. Choudhary"
                />
                <h4 className="text-xl font-semibold mt-4">
                  Dr. Abhay K. Choudhary
                </h4>
                <p className="text-gray-700 text-xl">
                  Asst. Prof. Dept. of Chem. Engg.
                  and Tech
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>

              {/* Dr. Banavath A. K. Naik */}
              <div>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={naik}
                  alt="Dr. Banavath A. K. Naik"
                />
                <h4 className="text-xl font-semibold mt-4">
                  Dr. Banavath A. K. Naik
                </h4>
                <p className="text-gray-700 text-xl">
                  Asst. Prof  Dept. of Chem. Engg.
                  and Tech
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>
            </div>
          </div>
          <h1 className="text-2xl text-blue-900 font-bold text-center mb-6">
              National and International Advisory Committee members
            </h1>
          <div className="mx-30 text-center">
            {adv.map((member, index) => (
              <div key={index} className="text-left mx-10">
                <p className="text-gray-700 text-xl mt-4">{member.name}</p>
                <p className="text-gray-700 text-xl">{member.title}</p>
                <p className="text-gray-700 text-xl">{member.affiliation}</p>
                {member.award && <p className="text-gray-700 text-xl">Award: {member.award}</p>}
              </div>
            ))}
              </div>
            ))}
            </div>

        </div>
      </div>
    </>
  );
}

export default Committes;
