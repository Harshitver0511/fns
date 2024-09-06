import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import Notice from '../Home/Notice/Notice'
import './Registration.css'





function Registration() {
  const fees = [
    { category: 'Indian students', offline: 'Rs. 3000/-', online: 'Rs. 2000/-' },
    { category: 'Foreign students', offline: '150 USD', online: '100 USD' },
    { category: 'Indian Academicians', offline: 'Rs. 4000/-', online: 'Rs. 3000/-' },
    { category: 'Foreign Academicians', offline: '250 USD', online: '200 USD' },
    { category: 'Industry participants', offline: 'Rs. 5000/-', online: 'Rs. 4000/-' },
  ];
  const [formData, setFormData] = useState({
    participantName: '',
    dob: '',
    profession: '',
    otherProfession: '',
    participationType: '',
    instituteName: '',
    rollIdNumber: '',
    supervisorName: '', // Not required
    country: '',
    email: '',
    phone: '',
    areYou: '',
    hostelAccommodation: '', // Changed to empty string
    guestHouseAccommodation: '', // Changed to empty string
    proofOfTransactionLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    const requiredFields = [
      'participantName', 'dob', 'profession', 'instituteName', 
      'rollIdNumber', 'country', 'email', 'phone', 'areYou'
    ];

    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      alert('Please fill in all required fields.');
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx_DT8PowiFdLAHlghdn8IPFdIwZH4nzuEd3bKPp-Qqvaxr-mptDtWSX7ptNbxOFBe9/exec', 
        { 
          method: 'POST',
          body: formDataToSend,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        });
      if (response.ok) {
        alert('Data submitted successfully!');
        setFormData({
          participantName: '',
          dob: '',
          profession: '',
          otherProfession: '',
          participationType: '',
          instituteName: '',
          rollIdNumber: '',
          supervisorName: '', // Resetting optional field
          country: '',
          email: '',
          phone: '',
          areYou: '',
          hostelAccommodation: '',
          guestHouseAccommodation: '',
          proofOfTransactionLink: '',
        });
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };
  return (
    <>
    {/* <div className="accepted grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-3 md:mx-24">
        
        <Sidebar />
   
          <div className="nitp-notice">
            <Notice />
          </div>
        
      </div> */}
  
      <div className="mx-5 md:mx-20">
     
      <div className="registration-table">
      <h2 className='text-2xl text-red-700'>Registration Fees</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Offline</th>
            <th>Online</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, index) => (
            <tr key={index}>
              <td>{fee.category}</td>
              <td>{fee.offline}</td>
              <td>{fee.online}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='text-center'>* All registration fees are including applicable tax</p>
    </div>
    <div className="registration-table">
      <h2 className='text-2xl text-red-700'>Bank Details</h2>
      <p className='text-center'>Will be Updated soon !</p>
    </div>
    
    <div className="registration-table">
    <h2 className='text-2xl text-red-700'>Accomodation </h2>
    <p className='text-center'>Accodmodation for deligates will be made in Guesthouse on payment basis. Accomodation forstudents will be made on NITP Hostel on paymentbasis
   <br/> *Participants needs to send priror request*</p>
   </div>
   
   <div className="iframe-container">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScgiem0jgb92n8Zhdpzp4PgLmjry-iSFvKrc5dyTWVHLyJNSA/viewform?embedded=true"
      
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
    </div>

    </>
  )
}

export default Registration