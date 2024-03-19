from flask import Blueprint, request, render_template, flash, url_for, redirect
from model.model_renta import *
from datetime import datetime
renta_blueprint = Blueprint('renta', __name__, url_prefix='/renta')

@renta_blueprint.route('/') #localhost:5000/usuario/
def ver_rentas_bp():
    rentas = obtener_rentas()

    return render_template('ver_rentas.html', rentas=rentas, hoy=datetime.now())

@renta_blueprint.route('/agregar', methods=['GET', 'POST'])
def agregar_renta_bp():
    if request.method == 'GET':
        return render_template('agregar_renta.html')
    idUsuario = request.form.get('idUsuario')
    idPelicula = request.form.get('idPelicula')
    fecha_renta = request.form.get('fecha_renta')
    dias_de_renta = request.form.get('dias_de_renta')

    if not all([idUsuario, idPelicula, fecha_renta, dias_de_renta]):
        flash('Llene todos los campos para agregar', 'error')
        return redirect(url_for('renta.agregar_renta_bp'))
    renta = crear_renta(idUsuario, idPelicula, fecha_renta, dias_de_renta)
    if renta is None:
        flash('Hubo un error al agregar la renta', 'error')
        return redirect(url_for('renta.agregar_renta_bp'))
    flash('Renta agregada correctamente', 'success')
    return redirect(url_for('renta.ver_rentas_bp'))

@renta_blueprint.route('/actualizar/<int:idRentar>', methods=['GET','POST'])
def actualizar_renta_bp(idRentar):
    renta = obtener_renta_por_id(idRentar)
    if not renta:
        flash('No se encontró la renta', 'error')
        return redirect(url_for('renta.ver_rentas_bp'))

    if request.method == 'POST':
        estatus = request.form.get('estatus') == 'True'
        print(request.form.get('estatus'))
        actualizar_estatus_renta(idRentar, estatus)
        flash('Datos de pelicula actualizados correctamente', 'success')
        return redirect(url_for('renta.ver_rentas_bp'))

    return render_template('actualizar_renta.html', renta=renta)
