from flask import Blueprint, request, render_template, flash, url_for, redirect
from model.model_renta import *
from datetime import datetime
renta_blueprint = Blueprint('renta', __name__, url_prefix='/renta')

@renta_blueprint.route('/') #localhost:5000/usuario/
def ver_rentas():
    rentas = obtener_rentas()

    return render_template('ver_rentas.html', rentas=rentas, hoy=datetime.now())