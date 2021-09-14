import React from "react";
import { MainConteo } from "./MainConteo";
import { MainHistoria } from "./MainHistoria";
import { MainNosotros } from "./MainNosotros";
import { MainTestimonio } from "./MainTestimonio";
export const Main = () => {
    return (
        <>
            <MainNosotros />
            <MainConteo />
            <MainHistoria />
            <MainTestimonio />
        </>
    );
};
