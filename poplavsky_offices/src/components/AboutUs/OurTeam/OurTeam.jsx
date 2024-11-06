
import React, { useState } from 'react';
import './OurTeam.css';
import CustomDivider from '../../../utils/Divider/CustomDivider/CustomDivider';
import { Button } from 'primereact/button';
import { Dialog } from "primereact/dialog";

import teamMembers from '../../../utils/jsons/AboutUs/ourTeam';

export default function OurTeam() {
  const [memberSelected, setMember] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleNavigate = (link) => {
    window.open(link, "_blank");
  };

  const contentCard = (member) => {
    return (
      <div
        className={`col-12 card-team md:w-12rem h-16rem border-round grid grid-nogutter justify-content-center align-content-center p-2 border-1 cursor-pointer ${(memberSelected !== null && memberSelected === member) ? 'card-team-selected' : ''}`}>
        <div className='col-12 h-10rem relative'
          style={{
            backgroundImage: `url(${member.photo})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Button icon="pi pi-linkedin" className='px-4 py-1 absolute' size="small"
            style={{
              borderRadius: "50px",
              left: "50.5%",
              bottom: "-0.75rem",
              transform: "translateX(-50.5%)",
            }}
            onClick={() => handleNavigate(member.linkedin)}
          />
        </div>
        <div className='col-12 flex justify-content-center align-items-center' style={{ height: 'fit-content' }}>
          <p className='m-0 pt-3 text-white text-sm urbanist-semibold'>{member.fullName}</p>
        </div>
        <div className='col-12 flex justify-content-center align-items-center' style={{ height: 'fit-content' }}>
          <p className='m-0 text-gray-400 text-xs text-center'>
            {member.position}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="OurTeam grid grid-nogutter nested-grid  border-round gap-3 p-3 relative fadein animation-duration-1000 animation-iteration-1 animation-ease-in-out">
      <div className="col-12 grid grid-nogutter nested-grid justify-content-start align-items-center  border-round pb-2">
        <div className="col-12 px-4 md:px-6">
          <CustomDivider />
          <h2 className="text-white text-2xl md:text-4xl m m-2">Our Team</h2>
          <h4 className="m-0 text-xs md:text-lg w-full font-normal text-gray-500">
            At Poplavsky International Offices, our team is composed of experts with extensive knowledge and diverse backgrounds, each dedicated to providing tailored solutions that drive successful international expansions in the UAE.
          </h4>
        </div>
      </div>


      <div className='col-12 grid grid-nogutter nested-grid justify-content-center align-content-center '>
        <div className='col-12 md:col-10 mb-3 grid grid-nogutter nested-grid justify-content-center align-items-center md:gap-3 border-round'
          style={{ height: 'fit-content' }}
        >
          {teamMembers.map((member, index) => (
            <div className='col-6 md:col-fixed'>
              <div
                className='hidden md:block'
                onClick={() => setMember(member)}>
                {contentCard(member)}
              </div>
              <div
                className='block md:hidden'
                onClick={() => { setVisible(true); setMember(member) }}>
                {contentCard(member)}
              </div>
            </div>
          ))}
        </div>


        <div className='hidden md:flex col-10 bg-blue-dark border-round  justify-content-center align-items-center p-3' style={{ minHeight: '10rem' }}>
          <p className='m-0 w-full text-center text-white'>
            {memberSelected ? memberSelected.description : 'Select a team member to view their profile'}
          </p>
        </div>
      </div>


      <Dialog
        header={memberSelected ? memberSelected.fullName : ''}
        visible={visible}
        contentClassName="bg-blue-dark text-white"
        headerClassName="bg-blue-dark text-pop-gold"
        className="border-1 border-js-yellow w-11"
        dismissableMask={true}
        modal={true}
        closable={true}
        onHide={() => { setVisible(false); setMember(null) }}
      >
        <p className="m-0 text-xs font-light">{memberSelected ? memberSelected.description : ''}</p>
      </Dialog>
    </div >
  );
};