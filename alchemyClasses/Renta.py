from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean
from alchemyClasses import db
from sqlalchemy.orm import relationship
from alchemyClasses.Usuario import Usuario
from alchemyClasses.Pelicula import Pelicula

class Renta(db.Model):

    __tablename__ = 'rentar'
    idRentar = Column(Integer, primary_key=True)
    idUsuario = Column(Integer, ForeignKey(Usuario.idUsuario))
    idPelicula = Column(Integer, ForeignKey(Pelicula.idPelicula))
    fecha_renta = Column(DateTime)
    dias_de_renta = Column(Integer, nullable=True, default=4)
    estatus = Column(Boolean, nullable=True, default=0)

    # usuario = relationship("Usuario", back_populates="rentas")
    # pelicula = relationship("Pelicula", back_populates="rentas")

    def __init__(self, id_usuario, id_pelicula, fecha_renta, dias_de_renta=5, estatus=0):
        self.idUsuario = id_usuario
        self.idPelicula = id_pelicula
        self.fecha_renta = fecha_renta
        self.dias_de_renta = dias_de_renta
        self.estatus = estatus

    def __str__(self):
        cadena = f'ID Usuario: {self.idUsuario}\nID Pelicula: {self.idPelicula}\nFecha renta: {self.fecha_renta}\n'
        cadena += f'Dias de renta: {self.dias_de_renta}\nEstatus: {self.estatus}'
        return cadena
