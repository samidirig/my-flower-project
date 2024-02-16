import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";

export const HEADER = {
  H_MOBILE: 64,
  H_DESKTOP: 80,
  H_DESKTOP_OFFSET: 80 - 16,
};

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-full justify-between gap-auto">
      <div className="flex-grow">
        <Header />
        <main className="my-0 py-16">{children}</main>
      </div>
      <div className="flex flex-col w-full">
        <Footer />
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
