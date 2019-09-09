Vue.component('tarjeta', {
    template: //html
    `
    <div class="container">
       <section v-if="!leerMas">
            <ul class="row d-flex justify-content-center">
                <li v-for= "(nota, index) of notasd" class="card col-11 col-md-6 col-lg-4 col-xl-3">
                    <article>
                        <div class="row autor">
                            <img src="./imgs/images.jpg" alt="foto" class="foto col-1 img-responsive">
                            <h6 class="nombre-small col-8">{{nota.autor}}</h6>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{nota.titulo}}</h5>
                            <p class="card-text collapse">{{nota.texto}}</p>
                            <button class="btn btn-primary " @click="checkLeerMas(index)">Leer más</button> 
                        </div>
                    </article>
                </li>
            </ul> 
        </section>
      
        <template v-else>
            <button class="btn btn-primary ml-4" @click="checkLeerMas(index)">Volver</button>
            <section class="row d-flex justify-content-center mt-5">
                <article class="card col-11 ">
                    <div class="row autor">
                        <img src="./imgs/images.jpg" alt="foto" class="foto col-1 img-responsive">
                        <h6 class="nombre-big col-8">{{notasd[i].autor}}</h6>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{notasd[i].titulo}}</h5>
                        <p class="card-text"> {{notasd[i].texto}}</p>
                    </div>
                    <div class="card-footer">
                        <h6 class="text-mute">Comentarios</h6>
                        <ul>
                            <li v-for="comentario of notasd[0].comentarios">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="card-text">{{comentario.textoComentario}}</p>
                                    </div>
                                    <div class="card-footter text-muted pl-5">{{comentario.autor}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
        
        </template>
    </div>
    `,

    data() {
        return {
            leerMas: false
        }
    },

    props: ['notasd'],

    methods: {
         checkLeerMas(index) {
             this.leerMas = !this.leerMas;
             this.i = index
         }
    }
})