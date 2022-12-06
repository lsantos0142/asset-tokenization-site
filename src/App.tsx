import { useState } from "react";
import Navbar from "./Navbar";
import PDFs from "./PDFs";

function App() {
    const [selectedPDF, setSelectedPDF] = useState<number>(0);

    return (
        <div className="App">
            <Navbar />

            <h1 className="text-center p-5">
                AUMENTO DA LIQUIDEZ DE ATIVOS IMOBILIÁRIOS EM APLICAÇÕES DE
                EMPRÉSTIMOS E ALUGUÉIS POR MEIO DA TOKENIZAÇÃO
            </h1>

            <div className="container px-5" id="about">
                <h2 className="col-md text-center m-auto py-3">
                    Sobre o Projeto
                </h2>
                <div className="col-md py-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsum cupiditate maiores sed cum accusantium magnam fuga
                    adipisci nesciunt eius fugit! Maxime quisquam autem odit
                    fugit fuga? Amet porro natus earum!
                </div>
            </div>

            <div className="container px-5" id="motivation">
                <div className="row p-3 gap-5">
                    <h2 className="col-md text-center m-auto">Motivação</h2>
                    <div className="col-md">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ipsum cupiditate maiores sed cum accusantium
                        magnam fuga adipisci nesciunt eius fugit! Maxime
                        quisquam autem odit fugit fuga? Amet porro natus earum!
                    </div>
                </div>
            </div>

            <hr />

            <div className="container px-5" id="objective">
                <div className="row p-3 gap-5 flex-row-reverse">
                    <h2 className="col-md text-center m-auto ">Objetivo</h2>
                    <div className="col-md">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ipsum cupiditate maiores sed cum accusantium
                        magnam fuga adipisci nesciunt eius fugit! Maxime
                        quisquam autem odit fugit fuga? Amet porro natus earum!
                    </div>
                </div>
            </div>

            <hr />

            <div className="container px-5" id="results">
                <h2 className="col-md text-center m-auto py-3">Resultados</h2>
                <div className="col-md py-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsum cupiditate maiores sed cum accusantium magnam fuga
                    adipisci nesciunt eius fugit! Maxime quisquam autem odit
                    fugit fuga? Amet porro natus earum!
                </div>
            </div>

            <hr />

            <div className="container px-5" id="documentation">
                <h2 className="col-md text-center m-auto py-3">Documentação</h2>
                <div className="col-md py-3">
                    Esta seção contém os documentos desenvolvidos ao longo do
                    projeto.
                </div>
            </div>

            <div className="d-flex justify-content-center gap-5 pb-3">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        setSelectedPDF(0);
                    }}
                >
                    Banner
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        setSelectedPDF(1);
                    }}
                >
                    Monografia
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        setSelectedPDF(2);
                    }}
                >
                    Press Release
                </button>
            </div>

            <PDFs selectedPDF={selectedPDF} />
        </div>
    );
}

export default App;
