const Footer = () => {
  return (
    <footer className="container-lg pb-safe">
      <hr className="my-8 lg:my-10" />
      <div className="pb-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} ChaeChae Life. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
