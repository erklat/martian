"use client";

import React, { useEffect } from "react";

type PropsWithConsoleMessage = {
  consoleMessage?: string;
};

type MergedProps<P> = PropsWithConsoleMessage & P;

const withLogger = <P extends object>(
  WrappedComponent: React.FC<MergedProps<P>>
) => {
  const WrappedWithLogger: React.FC<MergedProps<P>> = (props) => {
    useEffect(() => {
      console.log(
        props?.consoleMessage
          ? `${props.consoleMessage} ${
              WrappedComponent.displayName || WrappedComponent.name
            }`
          : `Component "${
              WrappedComponent.displayName || WrappedComponent.name
            }" mounted`
      );
    }, [props?.consoleMessage]);

    return <WrappedComponent {...props} />;
  };

  WrappedWithLogger.displayName = `WithLogger(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return WrappedWithLogger;
};

export default withLogger;
