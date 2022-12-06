import { useState } from "react";
import Banner from "./assets/Banner.pdf";
import Monografia from "./assets/Monografia.pdf";
import PressRelease from "./assets/PressRelease.pdf";

interface PDFsProps {
    selectedPDF: number;
}

const PDFs: React.FC<PDFsProps> = ({ selectedPDF }) => {
    const pdfs = [
        <object data={Banner} type="application/pdf" width="100%" height={800}>
            Banner <a href="#"></a>
        </object>,
        <object
            data={Monografia}
            type="application/pdf"
            width="100%"
            height={800}
        >
            Monografia <a href="#"></a>
        </object>,
        <object
            data={PressRelease}
            type="application/pdf"
            width="100%"
            height={800}
        >
            Press Release <a href="#"></a>
        </object>,
    ];

    return <div className="container">{pdfs[selectedPDF]}</div>;
};

export default PDFs;
