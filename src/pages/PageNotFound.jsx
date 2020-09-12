import React, { PureComponent } from 'react'
import { withRouter, Link } from 'react-router-dom'

import '../assets/css/PageNotFound.css'

class PageNotFound extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        document.title = "404 | Página não encontrada | Sobre Ansiedade";
        
        document.body.classList.add('antialiased');
        document.body.classList.add('font-sans');
    }

    render() {
        return (
            <div class="md:flex min-h-screen">
                <div class="w-full md:w-1/2 bg-white flex items-center justify-center">
                    <div class="max-w-sm m-8">
                        <div class="text-black text-5xl md:text-15xl font-black">
                            404
                        </div>

                        <div class="w-16 h-1 bg-purple-light my-3 md:my-6"></div>

                        <p class="text-grey-darker text-2xl md:text-3xl font-light mb-8 leading-normal">
                            Ooops! Esta página não existe.
                        </p>

                        <Link to="/">
                            <button class="bg-transparent text-grey-darkest font-bold uppercase tracking-wide py-3 px-6 border-2 border-grey-light hover:border-grey rounded-lg">
                                IR PARA PÁGINA INICIAL
                            </button>
                        </Link>
                    </div>
                </div>

                <div class="relative md:flex md:pb-0 md:min-h-screen w-full md:w-1/2 items-center justify-center">
                    <img src="" alt=""></img>
                </div>
            </div>
        );
    }

}

export default withRouter(PageNotFound);