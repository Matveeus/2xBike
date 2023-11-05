import React from 'react';
import HeaderAccount from '../components/header/AccountHeader';
import Footer from '../components/footer/Footer';
import ContactsAccount from '../components/contacts/ContactsAccount';
import useCheckUser from '../hooks/useCheckUser';

export default function UserAccountContacts() {
  useCheckUser();
  return (
    <>
      <HeaderAccount />
      <ContactsAccount />
      <Footer />
    </>
  );
}
