import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Error: {error.message}</h2>
      <p>
        {error.status} - {error.statusText}
      </p>
    </div>
  );
};

export default Error;
