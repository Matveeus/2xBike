import React from 'react';
import Header from '../components/header/Header';
import Introduction from '../components/introduction/Introduction';
import Overview from '../components/overview/Overview';
import RentPlans from '../components/plans/RentPlans';
import Additions from '../components/additions/Additions';
import AboutUs from '../components/aboutUs/AboutUs';
import CustomersReviews from '../components/customersReviews/CustomersReviews';
import SignUpForm from '../components/signUpFrom/SignUpForm';
import FAQ from '../components/faq/FAQ';
import Contacts from '../components/contacts/Contacts';
import Footer from '../components/footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Introduction />
      <Overview />
      <RentPlans />
      <Additions />
      <AboutUs />
      <CustomersReviews />
      <SignUpForm />
      <FAQ />
      <Contacts />
      <Footer />
    </>
  );
}
