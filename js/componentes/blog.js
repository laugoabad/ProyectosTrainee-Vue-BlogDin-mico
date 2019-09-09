Vue.component('blog', {
    template:   //html
    `
    <div>
        <headerd></headerd>
        <tarjeta :notasd = "notas"></tarjeta>   
    </div>      
    `  
    ,
    
    data() {
        return {
             
        notas: [
            {
                autor: "Laura González",
                foto: "./ imgs/images.jpg",
                titulo: "TITULO",
                texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit vel ridiculus justo, vulputate consequateget pulvinar euismod natoque praesent dapibus cubilia placerat integer, tempus magna ad accumsan eros risus etiamvvestibulum  Curabitur maecenas habitant nascetur venenatis class convallis feugiat odio euismod, nec ullamcorper faucibus sollicitudin nisl a suscipit ui, platea torquent congue per libero felis donec aptent.Conubia litora ligula velit facilisis maecenas mauris sed in eros consequat viverra justo eu orci, leo antevestibulum netus varius mus hendrerit purus pretium nullam sociis pellentesque gravida.",

                comentarios: [
                    {
                        textoComentario: "Lorem ipsum dolor sit amet consectetur adipiscing elit vel ridiculus justo vulputate consequat eget pulvinar euismod natoque praesent dapibus cubilia placerat integer, tempus magna ad accumsan eros risus etiam stibulum facilisi.",
                        autor: "Analía"
                    },
                    {
                        textoComentario: "Lorem ipsum dolor sit amet consectetur adipiscing elit vel ridiculus justo vulputate consequat eget pulvinar euismod natoque praesent dapibus cubilia placerat integer, tempus magna ad accumsan eros risus etiam stibulum facilisi.",
                        autor: "Marcela"
                    }
                ]
            },

            {
                autor: "Laura González",
                foto: "./ imgs/images.jpg",
                titulo: "TITULO",
                texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit vel ridiculus justo, vulputate consequateget pulvinar euismod natoque praesent dapibus cubilia placerat integer, tempus magna ad accumsan eros risus etiamvvestibulum  Curabitur maecenas habitant nascetur venenatis class convallis feugiat odio euismod, nec ullamcorper faucibus sollicitudin nisl a suscipit ui, platea torquent congue per libero felis donec aptent.Conubia litora ligula velit facilisis maecenas mauris sed in eros consequat viverra justo eu orci, leo antevestibulum netus varius mus hendrerit purus pretium nullam sociis pellentesque gravida.",
                comentarios: [
                    {
                        textoComentario: "Lorem ipsum dolor sit amet consectetur adipiscing elit vel ridiculus justo vulputate consequat eget pulvinar euismod natoque praesent dapibus cubilia placerat integer, tempus magna ad accumsan eros risus etiam stibulum facilisi.",
                        autor: "Analía"
                    },
                    {
                        textoComentario: "Lorem ipsum dolor sit amet consectetur adipiscing elit vel ridiculus justo vulputate consequat eget pulvinar euismod natoque praesent dapibus cubilia placerat integer, tempus magna ad accumsan eros risus etiam stibulum facilisi.",
                        autor: "Marcela"
                    }
                ]
            },
            {
                autor: "Laura González",
                foto: "./ imgs/images.jpg",
                titulo: "TITULO",
                texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit vel ridiculus justo, vulputate consequateget pulvinar euismod natoque praesent dapibus cubilia placerat integer, tempus magna ad accumsan eros risus etiamvvestibulum  Curabitur maecenas habitant nascetur venenatis class convallis feugiat odio euismod, nec ullamcorper faucibus sollicitudin nisl a suscipit ui, platea torquent congue per libero felis donec aptent.Conubia litora ligula velit facilisis maecenas mauris sed in eros consequat viverra justo eu orci, leo antevestibulum netus varius mus hendrerit purus pretium nullam sociis pellentesque gravida.",
            },
            {
                autor: "Laura González",
                foto: "./ imgs/images.jpg",
                titulo: "TITULO",
                texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit vel ridiculus justo, vulputate consequateget pulvinar euismod natoque praesent dapibus cubilia placerat integer, tempus magna ad accumsan eros risus etiamvvestibulum  Curabitur maecenas habitant nascetur venenatis class convallis feugiat odio euismod, nec ullamcorper faucibus sollicitudin nisl a suscipit ui, platea torquent congue per libero felis donec aptent.Conubia litora ligula velit facilisis maecenas mauris sed in eros consequat viverra justo eu orci, leo antevestibulum netus varius mus hendrerit purus pretium nullam sociis pellentesque gravida."
            },
        ]
    }
}
})