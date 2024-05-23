"use client";

import { useEffect } from "react";

const withLogger = <P extends object>(WrappedComponent: React.FC<P>) => {
  const WrappedWithLogger: React.FC<P> = (props) => {
    useEffect(() => {
      console.log(
        `Component "${
          WrappedComponent.displayName || WrappedComponent.name
        }" mounted`
      );
    }, []);

    return <WrappedComponent {...(props as P)} />;
  };

  // Assigning display name to the wrapped component (optional)
  WrappedWithLogger.displayName = `WithLogger(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return WrappedWithLogger;
};

export default withLogger;
