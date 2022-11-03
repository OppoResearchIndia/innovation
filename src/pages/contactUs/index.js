import React from 'react'
import ContactUsPage from '../../components/ContactUsPage'
import PageHeader from '../../components/PageHeader'

const ContactUs = () => {
  return (
    <>
      <PageHeader heading={"Contact Us"} classname={"contactus-header-div"}/>
      <ContactUsPage/>
    </>
  )
}

export default ContactUs