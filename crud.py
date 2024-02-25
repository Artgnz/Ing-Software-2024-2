import datetime
import pymysql.cursors
import random

connection = pymysql.connect(host='localhost',
                             user='lab',
                             password='Developer123!',
                             db='lab_ing_software',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

NOMBRES = ["Alan", "Asahel", "Arturo", "Arsenio", "Pedro", "Uziel", "Sofia", "Laura", "Valeria", "Lizbeth", "Luis", "Gerardo", "Andre", "Stephanie", "Armando", "Emiliano", "Elliot",
           "Alejandro", "Mauricio", "Alejandra", "Ximena", "Karla", "Natalia", "Brenda", "Julieta", "Martha"]
APELLIDOS = ["Raudry", "Rico", "Vacheron", "Balleza", "Mijangos", "Quiroz", "Urrutia", "Main", "Garrido", "Cruz", "Vitaly", "Shamash", "Meza", "Morales", "Estrada", "Vidal", "Noriega",
             "Rosas", "Anaya", "Paramo", "Sanchez"]
PELICULAS = ["2001: Una odisea del espacio", "El padrino", "Cantando bajo la lluvia", "Pulp fiction", "El club de la pelea", "El viaje de chihiro", "Todo a la vez en todas partes",
             "El origen", "Blade Runner", "Interstellar"]
GENEROS = ["Accion", "Aventura", "Comedia", "Drama", "Ciencia ficcion", "Fantasía", "Terror", "Suspenso", "Romance", "Animación", "Crimen", "Misterio", "Musical",
           "Familia", "Thriller"]

def genera_correo(nombre: str, apellido: str):
    dominios = ["@gmail.com", "@hotmail.com", "@yahoo.com", "@outlook.com"]
    return nombre + str(random.randint(0,100)) + apellido + random.choice(dominios) 

def genera_contrasena(nombre: str):
    variacion = 5
    return ''.join(chr((ord(caracter) + variacion ) % 128) for caracter in nombre)

# 1. Una función que inserte al menos 1 registro en cada tabla cada vez que sea ejecutada,
# como se tiene una tabla con llaves foráneas, se tiene que tener en cuenta que existan
# los registros en las otras dos tablas.
def insertar_registro():
    with connection.cursor() as cursor:
        query_usuario = "INSERT INTO `usuarios` (`nombre`, `apPat`,  `apMat`, `password`, `email`, `superuser`) VALUES (%s, %s, %s, %s, %s, %s)"
        nombre = random.choice(NOMBRES)
        ap_pat = random.choice(APELLIDOS)
        ap_mat = random.choice(APELLIDOS)
        datos_usuario = (nombre, ap_pat, ap_mat, genera_contrasena(nombre), genera_correo(nombre, ap_pat), 0)
        cursor.execute(query_usuario, datos_usuario)
        id_usuario = cursor.lastrowid

        query_pelicula = "INSERT INTO `peliculas` (`nombre`, `genero`,  `duracion`, `inventario`) VALUES (%s, %s, %s, %s)"
        titulo = random.choice(PELICULAS)
        genero = random.choice(GENEROS)
        duracion = random.randint(60, 180)
        inventario = random.randint(1,10)
        datos_pelicula = (titulo, genero, duracion, inventario)
        cursor.execute(query_pelicula, datos_pelicula)
        id_pelicula = cursor.lastrowid

        query_rentar = "INSERT INTO rentar (idUsuario, idPelicula, fecha_renta, dias_de_renta, estatus) VALUES (%s, %s, %s, %s, %s)"
        fecha_renta = datetime.datetime.today().date() - datetime.timedelta(days = random.randint(15, 365))
        datos_renta = (id_usuario, id_pelicula, fecha_renta, random.randint(5,14), random.randint(0, 1))
        cursor.execute(query_rentar, datos_renta)

        connection.commit()
# Una función que filtre a la tabla Usuario a todos los usuarios
# cuyo apellido termine en alguna cadena especificada por el usuario.
def filtrar(cadena: str):
    with connection.cursor() as cursor:
        query = "SELECT * FROM `usuarios` WHERE `apPat` LIKE %s OR `apMat` LIKE %s"
        cursor.execute(query, ("%" + cadena, "%" + cadena))
        usuarios = cursor.fetchall()
        for usuario in usuarios:
            print(usuario)
        return usuarios

# 2. Una función que dado el nombre de una pelı́cula (entrada de función o entrada
# de usuario) y un género, si dicha pelı́cula existe, se le cambie el género a
# dicha pelı́cula. (1.25pts)
def cambiar_genero_pelicula(pelicula: str, genero: str):
    with connection.cursor() as cursor:
        query = "UPDATE `peliculas` SET `genero` = %s WHERE `nombre` = %s"
        if cursor.execute(query, (genero, pelicula)) == 0:
            print("Operación no exitosa.")
        else:
            print("Operación exitosa.")
    connection.commit()

# 3. Una función que elimine todas las rentas anteriores a 3 dı́as a la fecha en
# que se ejecuta la función, ejemplo
def eliminar_rentas():
    with connection.cursor() as cursor:
        query = "DELETE FROM `rentar` WHERE `fecha_renta` < %s"
        fecha_limite = datetime.datetime.now() - datetime.timedelta(days=3)
        cursor.execute(query, (fecha_limite,))
    connection.commit()
