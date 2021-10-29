
const RequestHandler = function (req, res) {

    const url = req.url;
    const method = req.method;

    if (url === "/" && method == "GET") {
        res.setHeader("Content-type", "text/html");
        res.write(`<!DOCTYPE html>
    <html lang="es">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Personal Site</title>
    </head>
    
    <body>
        <main>
    
            <div>
                <nav>
                    <a href="/aboutMe">
                        <p>About Me</p>
                    </a>
                    <a href="skills">
                        <p>Skills</p>
                    </a>
                    <a href="myProyects">
                        <p>My Proyects</p>
                    </a>
                    <a href="contact">
                        <p>Contact</p>
                    </a>
                </nav>
            </div>
    
            <h1>My Personal Site</h1>
    
            <p>Ronald Cadiz</p>
    
            <p>Saludos, mi nombre completo es Ronald Alfredo Cadiz Moris, soy estudiante del tecnólogo de Software.
                <br>Actualmente me encuentro en mi quinto cuatrimestre, y voy a sacarle el máximo provecho a esta grandios
                asignatura.
            </p>
            <p>Yo soy una persona responsable, amable y determinada; me encanta el mundo de la tecnología y decidí optar por
                la carrera de software <br> porque me gusta bastante programar, sobretodo cuando se trata de Desarrollo Web
                porque es el área en la cual me quiero especializar,
                <br> por lo que me esforzaré al máximo para superarme y aprender mucho más de lo que se tiene planeado, y
                mantenerme practicando cada
                <br>día para no olvidar lo aprendido.
            </p>
        </main>
    </body>
    
    </html>`);

        res.end();
    }

    else if (url === "/aboutMe" && method == "GET") {

        res.setHeader("Content-type", "text/html");
        res.write(`<!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About Me</title>
        </head>
        
        <body>
        
        <div>
        <nav>
            <a href="/aboutMe">
                <p>About Me</p>
            </a>
            <a href="skills">
                <p>Skills</p>
            </a>
            <a href="myProyects">
                <p>My Proyects</p>
            </a>
            <a href="contact">
                <p>Contact</p>
            </a>
        </nav>
    </div>
        
            <h2>About Me</h3>
        
            <h3>Valores que me definen como persona</h3>
        
                    <ul>
                        <li>Paciencia</li>
                        <li>Sinceridad</li>
                        <li>Humildad</li>
                        <li>Responsabilidad</li>
                        <li>Empatía</li>
                    </ul>
        
                    <a href="/">
                        <p>Home</p>
                    </a>
        </body>
        
        </html>`);

        res.end();
    }

    else if (url === "/skills" && method == "GET") {
        
        res.setHeader("Content-type", "text/html");
        res.write(`<!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Skills</title>
        </head>
        
        <body>
        <div>
        <nav>
            <a href="/aboutMe">
                <p>About Me</p>
            </a>
            <a href="skills">
                <p>Skills</p>
            </a>
            <a href="myProyects">
                <p>My Proyects</p>
            </a>
            <a href="contact">
                <p>Contact</p>
            </a>
        </nav>
    </div>
        
            <h1>Programation Skills</h1>
        
            <table border="10">
        
                <tr>
                    <th>Skills</th>
                    <th>Valoration</th>
                </tr>
        
                <tr>
                    <td>Poo</td>
                    <td>4</td>
                </tr>
        
                <tr>
                    <td>C#</td>
                    <td>3</td>
                </tr>
                
                <tr>
                    <td>SQL Server</td>
                    <td>3</td>
                </tr>
        
                <tr>
                    <td>HTML</td>
                    <td>4</td>
                </tr>
        
                <tr>
                    <td>CSS</td>
                    <td>2</td>
                </tr>
        
                <tr>
                    <td>Javascript</td>
                    <td>1</td>
                </tr>
        
            </table>
        
            <a href="/">
                <p>Home</p>
            </a>
        </body>
        
        </html>`);

        res.end();

    }
    

    else if (url === "/myProyects" && method == "GET") {
        
        res.setHeader("Content-type", "text/html");
        res.write(`<!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Proyects</title>
        </head>
        
        <body>
        <div>
        <nav>
            <a href="/aboutMe">
                <p>About Me</p>
            </a>
            <a href="skills">
                <p>Skills</p>
            </a>
            <a href="myProyects">
                <p>My Proyects</p>
            </a>
            <a href="contact">
                <p>Contact</p>
            </a>
        </nav>
    </div>
        
            <h1>Todos Mis Proyectos Realizados</h1>
        
            <h2>App para registrar info acerca de ciclistas</h2>
            <p>Este es un proyecto realizado en Python para registrar información de los ciclistas tales como:</p>
            <ul>
                <li>Agregar, modificar y eliminar ciclistas</li>
                <li>Agregar, modificar y eliminar actividades de los ciclistas registrados</li>
                <li>Obtener un listado de todos los ciclistas, todas las actividades y el mapa con la ubicación hacia donde
                    fueron</li>
            </ul>
            <br>
            <br>
        
            <h2>App para Vender productos de Salón</h2>
            <p>Éste es un proyecto realido en Java en el cual te permite registrar los servicios y/o productos que se vendan en un determinado sal&oacute;n y tener un informe de todos los movimientos que hallan.</p>
            <br>
            <br>
        
            <h2>Sistema de Facturación</h2>
            <p>Este es un proyecto Web realizado con la tecnolog&iacute;a ASP.NET para poder hacer cualquier activiades relacionado con la venta de productos.</p>
        
        
            
            <br>
            <br>
        
            <a href="/">
                <p>Home</p>
            </a>
        
        </body>
        
        </html>`);
        res.end();

    }


    else if (url === "/contact" && method == "GET") {
        
        res.setHeader("Content-type", "text/html");
        res.write(`<!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact</title>
        </head>
        
        <body>
        <div>
        <nav>
            <a href="/aboutMe">
                <p>About Me</p>
            </a>
            <a href="skills">
                <p>Skills</p>
            </a>
            <a href="myProyects">
                <p>My Proyects</p>
            </a>
            <a href="contact">
                <p>Contact</p>
            </a>
        </nav>
    </div>
        
            <h1>Contact Me</h1>
        
            <div>
            <form method='POST' action='/contact'>
                    <label>Nombre:
                        <input type="text" required placeholder="Escriba su nombre" name="nombre">
                        <br>
                        <br>
                    </label>
        
                    <label>Apellido:
                        <input type="text" required placeholder="Escriba su apellido" name="apellido" >
                        <br>
                        <br>
                    </label>
                    <label>Correo:
                        <input type="email" required placeholder="Escriba su correo electrónico" name="correo" size="22">
                        <br>
                        <br>
                    </label>
                    <label>Descripción:
                        <br>
                        <textarea name="descripcion" rows="4" cols="60" required ></textarea>
                        <br>
                        <br>
                    </label>
        
                    <label>
                        <button type="submit">Enviar</button>
                    </label>
                </form>
            </div>
        
            <br>
            <br>
        
            <a href="/">
                <p>Home</p>
            </a>
        </body>
        
        </html>`);

        res.end();
    
    }

    else if (url === "/contact" && method == "POST") {

        res.setHeader("Content-type", "text/html");
        res.write(`<!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About Me</title>
        </head>
        
        <body>
        
          
        
            <h2>Formulario enviado exit&oacute;samente</h3>
        
            
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
                    <a href="/">
                        <p>Home</p>
                    </a>
        </body>
        
        </html>`);

        res.end();
    }
    else {

        res.statusCode = 404;
        res.end();
    }
}

module.exports = RequestHandler;