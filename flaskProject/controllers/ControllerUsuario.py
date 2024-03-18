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

@usuario_blueprint.route('/actualizar/<int:idUsuario>', methods=['GET','POST'])
def actualizar_usuario_bp(idUsuario):
    usuario = obtener_usuario_por_id(idUsuario)
    if not usuario:
        flash('No se encontró el usuario', 'error')
        return redirect(url_for('usuario.ver_usuarios'))

    if request.method == 'POST':
        nombre = request.form.get('nombre')
        apPat = request.form.get('apPat')
        apMat = request.form.get('apMat')
        password = request.form.get('password')
        email = request.form.get('email')
        if not all([nombre, apPat, apMat, password, email]):
            flash('Llene todos los campos para actualizar', 'error')
            return render_template('actualizar_usuario.html', usuario=usuario)
        actualizar_usuario_por_id(idUsuario, nombre, apPat, apMat, password, email)
        flash('Datos de usuario actualizados correctamente', 'success')
        return redirect(url_for('usuario.ver_usuarios'))

    return render_template('actualizar_usuario.html', usuario=usuario)