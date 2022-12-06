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
                    <p style={{ textIndent: "50px" }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ipsum cupiditate maiores sed cum accusantium
                        magnam fuga adipisci nesciunt eius fugit! Maxime
                        quisquam autem odit fugit fuga? Amet porro natus earum!
                    </p>
                </div>
            </div>

            <div className="container px-5" id="motivation">
                <div className="row p-3 gap-5">
                    <h2 className="col-md text-center m-auto">Motivação</h2>
                    <div className="col-md">
                        <p style={{ textIndent: "50px" }}>
                            Atualmente, ativos imobiliários possuem liquidez
                            muito reduzida devido à dificuldade de transferência
                            entre os proprietários resultante de diversos
                            procedimentos legais no processo e de altos valores
                            envolvidos. Dentro deste contexto, como uma
                            alternativa para ganho de liquidez, surge a proposta
                            de utilizar frações destes ativos em diferentes
                            cenários, como garantias de empréstimos e
                            comercialização, por meio da tecnologia de
                            blockchain, para garantir segurança, auditabilidade
                            e transparência das operações envolvendo estes
                            ativos.
                        </p>
                    </div>
                </div>
            </div>

            <hr />

            <div className="container px-5" id="objective">
                <div className="row p-3 gap-5 flex-row-reverse">
                    <h2 className="col-md text-center m-auto ">Objetivo</h2>
                    <div className="col-md">
                        <p style={{ textIndent: "50px" }}>
                            O objetivo deste projeto foi desenvolver uma
                            plataforma digital (web app) que associa ativos
                            imobiliários a tokens numa blockchain Ethereum
                            (processo conhecido como tokenização) e que se
                            propõe a fornecer funcionalidades que viabilizam o
                            aumento da liquidez dos ativos imobiliários
                            tokenizados, sendo as principais delas:
                        </p>
                        <li>
                            Transacionar imóveis de forma fracionada ou completa
                            por meio de um marketplace;
                        </li>
                        <li>
                            Registrar porcentagens de imóveis como garantia de
                            um ou mais empréstimos;
                        </li>
                        <li>
                            Registrar pagamentos de aluguéis dos imóveis, que
                            serão distribuídos de forma proporcional à
                            porcentagem de posse de cada um dos proprietários
                        </li>
                        <br />
                        <p style={{ textIndent: "50px" }}>
                            Através da utilização do blockchain Ethereum para a
                            tokenização e o registro das operações realizadas
                            com o imóvel, a plataforma confere imutabilidade,
                            auditabilidade e transparência aos ativos
                            imobiliários tokenizados.
                        </p>
                    </div>
                </div>
            </div>

            <hr />

            <div className="container px-5" id="results">
                <h2 className="col-md text-center m-auto py-3">Resultados</h2>
                <div className="col-md py-3">
                    <p style={{ textIndent: "50px" }}>
                        Como resultado final, foi obtida com sucesso uma
                        plataforma digital que envia smart contracts para a
                        blockchain para tokenizar ativos imobiliários e que
                        viabiliza posse e operações com porcentagens destes
                        ativos, podendo ser expandida para abranger outras
                        funcionalidades como, por exemplo, cenários de
                        financiamento de imóveis, crowdfunding e outras diversas
                        aplicações.
                    </p>
                </div>
            </div>

            <hr />

            <div className="container px-5" id="documentation">
                <h2 className="col-md text-center m-auto py-3">Documentação</h2>
                <div className="col-md">
                    <p style={{ textIndent: "50px" }}>
                        Esta seção contém os documentos desenvolvidos ao longo
                        do projeto.
                    </p>
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
