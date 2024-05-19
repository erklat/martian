"use client";
import { useEffect } from "react";

const withLogger = (WrappedComponent) => {
  const WrappedWithLogger = (props) => {
    useEffect(() => {
      console.log(props);
      console.log(
        `Component "${
          WrappedComponent.displayName || WrappedComponent.name
        }" mounted`
      );
    }, []);

    return <WrappedComponent {...props} />;
  };

  // Assigning display name to the wrapped component (optional)
  WrappedWithLogger.displayName = `WithLogger(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return WrappedWithLogger;
};

export default withLogger;
