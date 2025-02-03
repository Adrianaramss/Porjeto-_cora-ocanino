// components/BackgroundHelmet.js
import { Helmet } from "react-helmet";

const BackgroundHelmet = ({ color }) => {
  return (
    <Helmet>
      <style>{`body { background-color: ${color}; }`}</style>
    </Helmet>
  );
};

export default BackgroundHelmet;
