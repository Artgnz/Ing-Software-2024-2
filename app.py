from flask import Flask
from sqlalchemy import and_, or_

from alchemyClasses import db
from alchemyClasses.Alumno import Alumno
from cryptoUtils.CryptoUtils import cipher
from hashlib import sha256

from model.model_usuario import *
from model.model_pelicula import *
from model.model_renta import *
from datetime import datetime

#mysql+pymysql://ferfong:Developer123!@localhost:3306/ing_soft
#<dialecto>+<driver>://<usuario>:<passwd>@localhost:3306/<db>
#mysql+pymysql://lab:Developer123!@localhost:3306/lab_ing_soft
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://lab:Developer123!@localhost:3306/lab_ing_software'
app.config.from_mapping(
    SECRET_KEY='dev'
)
db.init_app(app)

def leer_entero_en_rango(inicio: int, fin: int):
    while True:
        try:
            entero = int(input(f"Ingrese un entero entre {inicio} y {fin}: "))
            if inicio <= entero <= fin:
                return entero
            print("Ingrese una opción valida.")
        except ValueError:
            print("Ingrese una opción valida.")

def leer_id_tabla(tabla: str):
    while True:
        try:
            id = int(input(f"Ingrese el id de la {tabla}: "))
            if id >= 0:
                return id
            print("Ingrese un id valido.")
        except ValueError:
            print("Ingrese un id valido.")

def escoger_tabla():
    print("Escoja la tabla")
    print("1. Usuarios")
    print("2. Peliculas")
    print("3. Rentas")
    return leer_entero_en_rango(1, 3)

def filtrar_por_id():
    tabla = escoger_tabla()
    if tabla == 1:
        id_usuario = leer_id_tabla("usuario")
        usuario = obtener_usuario_por_id(id_usuario)
        if usuario:
            print(usuario)
        else:
            print("Usuario no encontrado.")
    elif tabla ==  2:
         id_pelicula = leer_id_tabla("pelicula")
         pelicula = obtener_pelicula_por_id(id_pelicula)
         if pelicula:
            print(pelicula)
         else:
            print("Pelicula no encontrada.")
    elif tabla == 3:
         id_renta = leer_id_tabla("renta")
         renta = obtener_renta_por_id(id_renta)
         if renta:
            print(renta)
         else:
            print("Renta no encontrada.")

def mostrar_tabla():
    tabla = escoger_tabla()
    if tabla == 1:
        usuarios = obtener_usuarios()
        for usuario in usuarios:
            print(usuario)
            print()
    elif tabla == 2: 
        peliculas = obtener_peliculas()
        for pelicula in peliculas:
            print(pelicula)
            print()
    elif tabla == 3:
        rentas = obtener_rentas()
        for renta in rentas:
            print(renta)
            print()

def actualizar_columna_nombre():
    tabla = escoger_tabla()

    if tabla == 1:
        id_usuario = leer_id_tabla("usuario")
        nuevo_nombre = input("Ingrese el nuevo nombre de usuario: ")
        if cambiar_nombre_usuario(id_usuario, nuevo_nombre):
            print("Operación exitosa")
        else:
            print("ID inválido.")
    elif tabla == 2:
        id_pelicula = leer_id_tabla("pelicula")
        nuevo_nombre = input("Ingrese el nuevo nombre de la pelicula: ")
        if cambiar_nombre_pelicula(id_pelicula, nuevo_nombre):
            print("Operación exitosa")
        else:
            print("ID inválido.")
    elif tabla == 3:
        id_renta = leer_id_tabla("renta")
        while True:
            try:
                fecha_cadena = input("Ingrese una fecha (YYYY-MM-DD): ")
                fecha = datetime.strptime(fecha_cadena, "%Y-%m-%d")
                break
            except ValueError:
                print("Ingrese una fecha valida.")
        if cambiar_fecha_renta(id_renta, fecha):
            print("Operación exitosa.")
        else:
            print("ID inválido")

def eliminar_registros():
    print("1. Eliminar registro por id.")
    print("2. Eliminar todos los registros.")
    opcion = leer_entero_en_rango(1,2)
    if opcion == 1:
        tabla = escoger_tabla()
        if tabla == 1:
            id_usuario = leer_id_tabla("usuario")
            if eliminar_usuario(id_usuario):
                print("Operación exitosa.")
            else:
                print("ID inválido.")

        elif tabla == 2:
            id_pelicula = leer_id_tabla("pelicula")
            if eliminar_pelicula(id_pelicula):
                print("Operación exitosa.")
            else:
                print("ID inválido.")
        elif tabla == 3:
            id_renta = leer_id_tabla("renta")
            if eliminar_renta(id_renta):
                print("Operación exitosa.")
            else:
                print("ID inválido.")
    elif opcion == 2:
        tabla = escoger_tabla()
        if tabla == 1:
            eliminar_todos_usuarios()
            print("Usuarios eliminados con éxito.")
        elif tabla == 2:
            eliminar_todas_peliculas()
            print("Películas eliminadas con éxito.")
        elif tabla == 3:
            eliminar_todas_rentas()
            print("Rentas eliminadas con éxito.")

def menu():
    print("1. Mostar registros de una tabla.")
    print("2. Filtrar los registros de una tabla por id.")
    print("3. Actualizar la columna nombre de un registro, para el caso de la tabla Renta, ",end="")
    print("modificar la fecha de la renta.")
    print("4. Eliminar un registro por id o todos los registros de una tabla.")
    opcion = leer_entero_en_rango(1, 4)
    if opcion == 1:
        mostrar_tabla()
    elif opcion == 2:
        filtrar_por_id()
    elif opcion == 3:
        actualizar_columna_nombre()
    elif opcion == 4:
        eliminar_registros()        

if __name__ == '__main__':
    with app.app_context():
        menu()

