from flask import Blueprint, request, render_template, flash, url_for, redirect
from model.model_usuario import *
usuario_blueprint = Blueprint('usuario', __name__, url_prefix='/usuario')

@usuario_blueprint.route('/') #localhost:5000/usuario/
def ver_usuarios():
    usuarios = obtener_usuarios()
    return render_template('ver_usuarios.html', usuarios=usuarios)
@usuario_blueprint.route('/agregar', methods=['GET', 'POST'])
def agregar_usuario():
    if request.method == 'GET':
        return render_template('agregar_usuario.html')
    nombre = request.form.get('nombre')
    apPat = request.form.get('apPat')
    apMat = request.form.get('apMat')
    password = request.form.get('password')
    email = request.form.get('email')
    if not all([nombre, apPat, apMat, password, email]):
        flash('Llene todos los campos para agregar', 'error')
        return redirect(url_for('usuario.agregar_usuario'))
    usuario = crear_usuario(nombre, apPat, apMat, password, email)
    if usuario is None:
        flash('Hubo un error al generar el usuario', 'error')
        return redirect(url_for('usuario.agregar_usuario'))
    flash('Usuario creado correctamente', 'success')
    return redirect(url_for('usuario.ver_usuarios'))

@usuario_blueprint.route('/eliminar<int:idUsuario>', methods=['POST'])
def eliminar_usuario_bp(idUsuario):
    eliminado = eliminar_usuario(idUsuario)
    if eliminado:
        flash('Se eliminó con éxito al usuario', 'success')
    else:
        flash('Hubo un error al eliminar el usuario', 'error')
    return redirect(url_for('usuario.ver_usuarios'))

# def agregar_alumno():
#     if request.method == 'GET':
#         return render_template('agregar_usuario.html')
#     else:
#         #Obtengo la información del método post.
#         name = request.form['name']
#         ap_pat = request.form['ap_pat']
#         ap_mat = request.form['ap_mat']
#         num_cta = request.form['num_cta']
#         passwd = request.form['passwd']
#         #Creo mi usuario.
#         #alumno = Alumno(name, ap....)
#         #Lo guardo en la DB
#         #url_for
#         #flash
#         if v == 1:
#             flash("Hello from flash!")
#             return url_for('alumno.agregar_alumno')
#         # Y regreso al flujo que me hayan especificado.
#         return render_template('user_added.html', name=name, num_cta=num_cta)


# #responde a localhost:5000/alumno/id/1
# @alumno_blueprint.route('/id/<int:id_alumno>/<string:nombre>') #<tipo:nombre_variable>
# def ver_alumno_id(id_alumno, nombre):
#     return f"Se hace el query con el id {id_alumno} y el nombre {nombre}"
