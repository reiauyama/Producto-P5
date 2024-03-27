export function Main(){

    document.getElementById("main").innerHTML=
    `

   


    <div class = "container1">
        <div class = "articleContainer">
            <h1>Patrones de diseño de JavaScript</h1>
            <img src="/app/assets/javascript-736400_1280.png" alt="hola">
            <article>
                <h2>CREACIONALES </h2>
                <p>
                Los patrones de diseño creacionales son los que ayudan a resolver problemas relacionados con la creación y gestión de nuevas instancias de objetos en JavaScript. Puede ser tan sencillo como limitar una clase a tener un solo objeto o tan complejo como definir un intrincado método de selección y adición manual de cada característica en un objeto de JavaScript.

                Algunos ejemplos de patrones de diseño de creación son Singleton, Factory, Abstract Factory y Builder, entre otros.
                </p>
            </article>
            <article>
            <h2>ESTRUCTURALES </h2>
                <p>
                Los patrones de diseño estructurales son los que ayudan a resolver problemas relacionados con la gestión de la estructura (o esquema) de los objetos JavaScript. Estos problemas pueden incluir la creación de una relación entre dos objetos distintos o la abstracción de algunas características de un objeto para usuarios específicos.

                Algunos ejemplos de patrones de diseño estructural son Adapter, Bridge, Composite, and Facade.
                </p>
            
            </article>
            <article>
            <h2>ARQUITECTONICOS </h2>
                <p>
                Los patrones de diseño arquitectónico son los que ayudan a resolver problemas relacionados con el diseño de software en sentido amplio. Por lo general, están relacionados con la forma de diseñar tu sistema y garantizar una alta disponibilidad, mitigar los riesgos y evitar los cuellos de botella en el rendimiento.

                Dos ejemplos de patrones de diseño arquitectónico son MVC y MVVM.
                </p>
            
            </article>
        </div>
        <div class = "asideContainer">
            <a href="https://kinsta.com/es/blog/patrones-de-diseno-javascript/">
                <aside > 
                <img src="/app/assets/technology-1283624_640.jpg" alt="fuente Kinsta">
                <h3> Fuente de informacion:Kinsta </h3>
                <p>https://kinsta.com/es/blog/patrones-de-diseno-javascript/</p>
                </aside>
            </a>
            <a href="https://chat.openai.com/">
                <aside > 
                <img src="/app/assets/ai-7977960_1280.jpg" alt="ChatGpt">
                <h3> Fuente de informacion:Chat GPT </h3>
                <p>https://chat.openai.com/</p>
                </aside>
            
            </a>
        </div>
        
    </div>
    
    `
}