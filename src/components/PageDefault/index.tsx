import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default PageDefault;
