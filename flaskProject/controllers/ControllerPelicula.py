from flask import Blueprint, request, render_template, flash, url_for, redirect
from model.model_pelicula import *
pelicula_blueprint = Blueprint('pelicula', __name__, url_prefix='/pelicula')

@pelicula_blueprint.route('/') #localhost:5000/pelicula/
def ver_peliculas_bp():
    peliculas = obtener_peliculas()
    return render_template('ver_peliculas.html', peliculas=peliculas)

@pelicula_blueprint.route('/agregar', methods=['GET', 'POST'])
def agregar_pelicula_bp():
    if request.method == 'GET':
        return render_template('agregar_pelicula.html')
    nombre = request.form.get('nombre')
    genero = request.form.get('genero')
    duracion = request.form.get('duracion')
    inventario = request.form.get('inventario')
    if not all([nombre, genero, duracion, inventario]):
        flash('Llene todos los campos para agregar', 'error')
        return redirect(url_for('pelicula.agregar_pelicula_bp'))
    pelicula = agregar_pelicula(nombre, genero, duracion, inventario)
    if pelicula is None:
        flash('Hubo un error al agregar la película', 'error')
        return redirect(url_for('pelicula.agregar_pelicula_bp'))
    flash('Película agregada correctamente', 'success')
    return redirect(url_for('pelicula.ver_peliculas_bp'))

# @usuario_blueprint.route('/eliminar<int:idUsuario>', methods=['POST'])
# def eliminar_usuario_bp(idUsuario):
#     eliminado = eliminar_usuario(idUsuario)
#     if eliminado:
#         flash('Se eliminó con éxito al usuario', 'success')
#     else:
#         flash('Hubo un error al eliminar el usuario', 'error')
#     return redirect(url_for('usuario.ver_usuarios'))

# @usuario_blueprint.route('/actualizar/<int:idUsuario>', methods=['GET','POST'])
# def actualizar_usuario_bp(idUsuario):
#     usuario = obtener_usuario_por_id(idUsuario)
#     if not usuario:
#         flash('No se encontró el usuario', 'error')
#         return redirect(url_for('usuario.ver_usuarios'))  # Corrected redirection

#     if request.method == 'POST':
#         nombre = request.form.get('nombre')
#         apPat = request.form.get('apPat')
#         apMat = request.form.get('apMat')
#         password = request.form.get('password')
#         email = request.form.get('email')
#         if not all([nombre, apPat, apMat, password, email]):
#             flash('Llene todos los campos para agregar', 'error')
#             return render_template('actualizar_usuario.html', usuario=usuario)
#         actualizar_usuario_por_id(idUsuario, nombre, apPat, apMat, password, email)
#         flash('Datos de usuario actualizados correctamente', 'success')
#         return redirect(url_for('usuario.ver_usuarios'))

#     return render_template('actualizar_usuario.html', usuario=usuario)
