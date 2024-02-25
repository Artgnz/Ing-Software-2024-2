from alchemyClasses.Pelicula import Pelicula
from alchemyClasses import db

def obtener_peliculas():
    return Pelicula.query.all()

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
