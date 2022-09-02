import React from "react";

const Container = ({children}) => {
    return (
        <div className="2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl sm:w-full psm:w-fit m-auto">
            {children}
        </div>
    )
}

export default Container;