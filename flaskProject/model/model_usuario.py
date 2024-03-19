from alchemyClasses.Usuario import Usuario
from alchemyClasses import db

def obtener_usuarios():
    return Usuario.query.all()

def crear_usuario(nombre:str, apPat:str, apMat:str, password:str, email:str):
    try:
        usuario = Usuario(nombre, apPat, apMat, password, email)
        db.session.add(usuario)
        db.session.commit()
        return usuario
    except:
        return None

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
    try:
        db.session.delete(usuario)
        db.session.commit()
    except:
        return False
    return True

def actualizar_usuario_por_id(idUsuario, nombre, apPat, apMat, password, email):
    usuario = obtener_usuario_por_id(idUsuario)

    if not usuario:
        return False

    # Update user data
    usuario.nombre = nombre
    usuario.apPat = apPat
    usuario.apMat = apMat
    usuario.password = password
    usuario.email = email

    # Commit the changes to the database
    db.session.commit()
    return True

def eliminar_todos_usuarios():
    usuarios = obtener_usuarios()
    for usuario in usuarios:
        db.session.delete(usuario)
    db.session.commit()
