import { BallTriangle } from "react-loader-spinner";

const Loader = ({ loading }) => {
  return (
    <div className=" flex items-center justify-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#C778DD"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={loading}
      />
    </div>
  );
};

export default Loader;
