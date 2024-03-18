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

@pelicula_blueprint.route('/eliminar<int:idPelicula>', methods=['POST'])
def eliminar_pelicula_bp(idPelicula):
    eliminado = eliminar_pelicula(idPelicula)
    if eliminado:
        flash('Se eliminó con éxito a la película', 'success')
    else:
        flash('Hubo un error al eliminar la película', 'error')
    return redirect(url_for('pelicula.ver_peliculas_bp'))
