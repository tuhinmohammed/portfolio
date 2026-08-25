const Footer = () => {
  return (
    <footer className="border-t border-[#1a2a35] bg-[#080d12] px-6 py-8 sm:px-10 lg:px-[7.5%]">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-center font-mono text-xs tracking-[0.08em] text-[#55748c]">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-[#8fa3b8] transition-colors hover:text-[#00d4aa]">
            Mohammed Tuhin
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;