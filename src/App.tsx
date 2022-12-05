import Banner from "./assets/Banner.pdf";
import Monografia from "./assets/Monografia.pdf";
import PressRelease from "./assets/PressRelease.pdf";
import Navbar from "./Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />

            <h1 className="text-center p-5">
                AUMENTO DA LIQUIDEZ DE ATIVOS IMOBILIÁRIOS EM APLICAÇÕES DE
                EMPRÉSTIMOS E ALUGUÉIS POR MEIO DA TOKENIZAÇÃO
            </h1>

            <div className="container-fluid px-5" id="about">
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

            <div className="container-fluid px-5" id="motivation">
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

            <div className="container-fluid px-5" id="objective">
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

            <div className="container-fluid px-5" id="results">
                <h2 className="col-md text-center m-auto py-3">Resultados</h2>
                <div className="col-md py-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsum cupiditate maiores sed cum accusantium magnam fuga
                    adipisci nesciunt eius fugit! Maxime quisquam autem odit
                    fugit fuga? Amet porro natus earum!
                </div>
            </div>

            <div className="container-fluid px-5" id="documentation">
                <h2 className="col-md text-center m-auto py-3">Documentação</h2>
                <div className="col-md py-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsum cupiditate maiores sed cum accusantium magnam fuga
                    adipisci nesciunt eius fugit! Maxime quisquam autem odit
                    fugit fuga? Amet porro natus earum!
                </div>
            </div>

            <div className="d-flex gap-3 p-md-3">
                <object
                    data={Banner}
                    type="application/pdf"
                    width="1000"
                    height="1000"
                >
                    Banner <a href="#"></a>
                </object>

                <object
                    data={Monografia}
                    type="application/pdf"
                    width="1000"
                    height="1000"
                >
                    Monografia <a href="#"></a>
                </object>

                <object
                    data={PressRelease}
                    type="application/pdf"
                    width="1000"
                    height="1000"
                >
                    Press Release <a href="#"></a>
                </object>
            </div>
        </div>
    );
}

export default App;
