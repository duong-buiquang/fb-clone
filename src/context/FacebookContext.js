import React from "react";

const FacebookContext = React.createContext();

export const FacebookProvider = FacebookContext.Provider;
export const FacebookConsumer = FacebookContext.Consumer;
export default FacebookContext;
