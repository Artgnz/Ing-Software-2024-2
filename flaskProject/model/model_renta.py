from alchemyClasses.Renta import Renta
from alchemyClasses import db
from datetime import datetime

def obtener_rentas():
    return Renta.query.all()

def obtener_renta_por_id(id: int):
    return Renta.query.filter(Renta.idRentar == id).first()

def cambiar_fecha_renta(id: int, fecha: datetime):
    renta = obtener_renta_por_id(id)
    if not renta:
        return False
    renta.fecha_renta = fecha
    db.session.commit()
    return True

def eliminar_renta(id: int):
    renta = obtener_renta_por_id(id)
    if not renta:
        return False
    db.session.delete(renta)
    db.session.commit()
    return True

def eliminar_todas_rentas():
    rentas = obtener_rentas()
    for renta in rentas:
        db.session.delete(renta)
    db.session.commit()
