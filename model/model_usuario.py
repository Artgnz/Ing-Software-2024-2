from alchemyClasses.Usuario import Usuario
from alchemyClasses import db

def obtener_usuarios():
    return Usuario.query.all()

def obtener_usuario_por_id(id: int):
    return Usuario.query.filter(Usuario.idUsuario == id).first()

def cambiar_nombre_usuario(id_usuario: int, nuevo_nombre: str):
    usuario = obtener_usuario_por_id(id_usuario)
    if not usuario:
        return False
    usuario.nombre = nuevo_nombre
    db.session.commit()
    return True

def eliminar_usuario(id: int):
    usuario = obtener_usuario_por_id(id)
    if not usuario:
        return False
    db.session.delete(usuario)
    db.session.commit()
    return True

def eliminar_todos_usuarios():
    usuarios = obtener_usuarios()
    for usuario in usuarios:
        db.session.delete(usuario)
    db.session.commit()
