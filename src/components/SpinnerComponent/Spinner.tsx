import React from "react";
import { usePromiseTracker } from "react-promise-tracker"; //Library for tracking Fetch, Axios reqeusts
import Loader from "react-loader-spinner";

const spinneStyles = {
    width: '100%',
    height: '100%',
    position: "relative",
    bottom: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
} as React.CSSProperties;

export const Spinner: any = () => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        promiseInProgress && (
            <div style={spinneStyles}>
                <Loader type="Grid" color="#009688" height={200} width={200} />
            </div>
        )
    );
};
