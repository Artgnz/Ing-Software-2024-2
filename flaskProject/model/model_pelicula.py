from alchemyClasses.Pelicula import Pelicula
from alchemyClasses import db

def obtener_peliculas():
    return Pelicula.query.all()

def agregar_pelicula(nombre:str, genero:str, inventario:int, duracion:int):
    try:
        pelicula = Pelicula(nombre=nombre, genero=genero, inventario=inventario, duracion=duracion)
        db.session.add(pelicula)
        db.session.commit()
        return pelicula
    except(Exception) as e:
        print(e)
        return None

def obtener_pelicula_por_id(id: int):
    return Pelicula.query.filter(Pelicula.idPelicula == id).first()

def cambiar_nombre_pelicula(id_usuario: int, nuevo_nombre: str):
    pelicula = obtener_pelicula_por_id(id_usuario)
    if not pelicula:
        return False
    pelicula.nombre = nuevo_nombre
    db.session.commit()
    return True

def eliminar_pelicula(id: int):
    pelicula = obtener_pelicula_por_id(id)
    if not pelicula:
        return False
    db.session.delete(pelicula)
    db.session.commit()
    return True

def eliminar_todas_peliculas():
    peliculas = obtener_peliculas()
    for pelicula in peliculas:
        db.session.delete(pelicula)
    db.session.commit()

def actualizar_pelicula_por_id(idPelicula: int, nombre: str, genero: str, duracion: int, inventario: int):
    pelicula = obtener_pelicula_por_id(idPelicula)

    if not pelicula:
        return False

    # Update user data
    pelicula.nombre = nombre
    pelicula.genero = genero
    pelicula.duracion = duracion
    pelicula.inventario = inventario

    # Commit the changes to the database
    db.session.commit()
    return True