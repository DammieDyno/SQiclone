import React from 'react'

const Homenav = () => {
  return (
    <nav className='navigate'>
        <div>
            <img src={require("./Imageholder/co.jpg")} className='sqilogo' />
        </div>
        <div className='Adiv'>
            <a className='action1' href="">About <i class="fa-solid fa-chevron-down"></i>
            <div className='dropdown1'>
                <p>Our story</p>
                <p>Our team</p>
                <p>Campus Info</p>
            </div>
            
            </a>
            <a className='actup' href="">Programmes<i class="fa-solid fa-chevron-down"></i>
            <div className='dropdown2'>
                <p>National Innovation Diploma</p>
                <p>Professional Diploma Program</p>
                <p>Executive Professional Certificate</p>
                <p>Programme</p>
            </div>
            </a>
            <a className='admissiondropdown' href="">Admission<i class="fa-solid fa-chevron-down"></i>
            <div className='dropdown3'>
                <p>Apply for a Programme</p>
                <p>Made of study</p>
                <p>Tuition</p>
                <p>Frequently Asked Questions</p>
            </div>
            </a>
            <a className='portaldropdown' href="">E-portal<i class="fa-solid fa-chevron-down"></i>
            <div className='dropdown4'>
                <p>Student</p>
                <p>Staff</p>
            </div>
            </a>
            <a className='' href="">SQI community</a>
            <a href="">news</a>
        </div>
    </nav>
  )
}

export default Homenav