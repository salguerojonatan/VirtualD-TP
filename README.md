# VirtualD-TP
Trabajo para Virtual Dreams

Ejercicio 2.
1.	¿Qué es un servidor HTTP? 
Un servidor HTTP es un programa que procesa una aplicación del lado del servidor para realizar conexiones con el cliente. Este servidor se encarga de enviar peticiones desde la  conexión del cliente hasta el sistema que gestiona las peticiones para transmitir una respuesta al cliente a través de una conexión TCP.

2.	¿Qué son los verbos HTTP? Mencionar los más conocidos
Son métodos de solicitudes especificas que utilizan el servicio de integración de datos en el mensaje de solicitud. Estos verbos/métodos permiten comunicar al servidor lo que se requiere realizar con un recurso mediante una URL. Los más importantes (sobre todo para hacer aplicaciones REST) son los siguientes:
-GET: Se emplea para leer y recuperar representaciones de recursos específicos del servidor, en el caso de una respuesta exitosa devuelve la representación en un formato concreto con el cuerpo de la respuesta: HTML, XML, JSON, imágenes, JavaScript, etc. Las peticiones que usan este método sólo deben recuperar datos. También se puede llegar a utilizar para enviar datos, pero tiene limitaciones. La información es mostrada en la URL. Además, es un método idempotente.
-POST: Este método se utiliza para enviar datos a un servidor, es utilizado para la creación de recursos. Este método no muestra ninguna información en la URL, ya que esta oculta. Llamar este método varias veces puede causar efectos secundarios en el servidor, como enviar la misma orden varias veces.
-PUT: Se utiliza para actualizar y crear contenidos, reemplazando la anterior representación del elemento de destino con los datos de la nueva petición, siendo un método idempotente. Almacena la entidad suministrada en la URL indicado. Si la entidad no existe, se crea. Si la entidad existe, se actualiza.
-DELETE: Este método se utiliza para eliminar un recurso específico de una ubicación dada por la URL.
-HEAD: Este método se utiliza para obtener una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta. El servidor responde con líneas y headers (únicamente los metadatos de la cabecera).

3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers? 
Un request es un mensaje/petición enviado por un cliente para iniciar una acción en el servidor.
Un response es la respuesta del servidor hacia el cliente habiendo recibido un request previo.
Los headers son la parte central de los HTTP request y response, ya que transmiten información acerca del navegador del cliente, la página solicitada, del servidor, etc. La primera línea del header (request) es el request y el resto son headers HTTP, mientras que en un header (response) la primera línea es el Status Code y el resto es información de la respuesta del servidor. De esta forma, los headers permiten al cliente enviar información adicional junto con una petición o respuesta.

4.	¿Qué es un queryString? (En el contexto de una url)
Es una cadena de consulta, son los datos que se envían a través de la URL al realizar un request a una página web. Esto para que el servidor web pueda acceder y manejar la información.

5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
Los responseCode o Status Code, son una serie de códigos de tres cifras estandarizados y que dependen de la respuesta HTTP, indican si se ha completado satisfactoriamente la solicitud o no. Los posibles valores devueltos:

100 - 199: Respuestas informativas
200 - 299: Respuestas satisfactorias
300 - 399: Redirecciones
400 - 499: Errores de los clientes
500 - 599: Errores de los servidores

6.	¿Cómo se envía data en un Get y cómo en un POST? 
GET: Lleva los datos de forma "visible" al cliente (navegador web). El medio de envío es la URL. Los datos los puede ver cualquiera. 
POST: Consiste en datos "ocultos" enviados por un formulario cuyo método de envío es post. Es adecuado para formularios. Los datos no son visibles. Con el método HTTP POST también se codifica la información, pero ésta se envía a través del body del HTTP Request, por lo que no aparece en la URL.

7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?
El método/verbo GET para regresar la página que solicite el cliente o en definitiva un error.

8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
JSON (JavaScript Object Notation): Es un formato texto del tipo clave: valor para el almacenamiento estructurado e intercambio de datos principalmente entre un servidor y un cliente. Es muy similar a un XML, pero con una sintaxis mas clara y acortada y por lo tanto es más liviano. JSON está constituido por dos estructuras:

Una colección de pares de nombre/valor: En varios lenguajes esto es conocido como un objeto, registro, estructura, diccionario, tabla hash, lista de claves o un array asociativo.
Una lista ordenada de valores: En la mayoría de los lenguajes, esto se implementa como arrays, vectores, listas o secuencias.

Ejemplos:


    { "persona": {"nombre":"Jonatan", "apellido":"Salguero", "dni":"3434054"}}

XML:
XML (Extensible Markup Language): Es un metalenguaje, un estándar que estructura el intercambio de información entre las diferentes plataformas, que define un conjunto de reglas para la codificación de documentos.

Ejemplo:

{<?xml version="1.0" encoding="ISO-8859-1"?>
<dato>
     <Nombre>Jonatan</Nombre>
     <Apellido>Salguero</Apellido>
     <dni>34340544</dni>
</dato>}

9.	Explicar brevemente el estándar SOAP
SOAP es un estándar basado en XML para la transmisión de mensajes en HTTP y otros protocolos de Internet. Es un protocolo ligero para el intercambio de información en un entorno descentralizado y distribuido. Se basa en XML y consta de tres partes:

Un sobre que define una infraestructura para describir el contenido del mensaje y cómo procesarlo.
Un conjunto de normas de codificación para expresar instancias de tipos de datos definidos por la aplicación.
Una convención para representar llamadas y respuestas a procedimiento remoto.

SOAP permite el enlace y la utilización de servicios Web encontrados definiendo una ruta de mensaje para el direccionamiento de mensajes. Se puede utilizar SOAP para consultar UDDI para servicios Web.

10.	Explicar brevemente el estándar REST Full

Es una arquitectura para aplicaciones basadas en redes (como Internet), sus siglas significan Representational State Transfer. Los servicios Web RESTful se basan en recursos. Un recurso es una entidad, la cual se almacena principalmente en un servidor y el cliente solicita el recurso utilizando servicios Web RESTful. Sus principales características:

Tiene cinco operaciones típicas: listar, crear, leer, actualizar y borrar
Cada operación requiere de dos cosas: El método URI y HTTP
El URI es un sustantivo que contiene el nombre del recurso
El método HTTP es un verbo

21.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
Los headers en un request, son los parámetros que se envían en una petición o respuesta HTTP al cliente o al servidor para proporcionar información esencial sobre la transacción en curso. Estas cabeceras proporcionan información mediante la sintaxis 'Cabecera: Valor' y son enviadas automáticamente por el navegador o el servidor Web.
Content-Type es la propiedad del header que se usa para indicar el media type del recurso, dice al cliente que tipo de contenido será retornado.

Ejercicio 3.
En la carpeta Imagenes, se encuentran 3 archivos.
GET1: se baja la informacion de la BD
POST: se suben datos, nombre: Jonatan | apellido: Salguero | dni: 34340544
GET2: se comprueba que esos datos se subieron correctamente.

Ejercicio 4.
Se ejecuta el script node mostrarPersonas.js desde la terminal, en la carpeta imagenes se encuentra la resolucion con el nombre Ejercicio4.

Ejercicio 5.
Antes de ejecutar el servidor, se deben instalar las librerias que se van a usar para eso se hace uso del comando node install, luego se ejecuta el servidor mediante el comando node server

Ejercicio 6.
Se abre el archivo crearPersonas.html, completar los datos y luego dar boton ENVIAR. RECUERDE: ANTES DE DAR ENVIAR DEBE CORRER EL SERVIDOR REALIZADO EN EL PUNTO 5.

