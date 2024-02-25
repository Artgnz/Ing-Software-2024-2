from sqlalchemy import Column, Integer, String, LargeBinary, Boolean

from alchemyClasses import db

class Usuario(db.Model):

    __tablename__ = 'usuarios'
    idUsuario = Column(Integer, primary_key=True)
    nombre = Column(String(200))
    apPat = Column(String(200))
    apMat = Column(String(200), nullable=True)
    password = Column(String(64))
    email = Column(String(500), nullable=True, unique=True)
    profilePicture = Column(LargeBinary, nullable=True)
    superUser = Column(Boolean, nullable=True)
    renta = db.relationship("Renta", cascade="all, delete-orphan")
    

    def __init__(self, nombre, ap_pat, password, ap_mat=None,
                 email=None, profile_picture=None, super_user=None):
        self.nombre = nombre
        self.apPat = ap_pat
        self.apMat = ap_mat
        self.password = password
        self.email = email
        self.profilePicture = profile_picture
        self.superUser = super_user

    def __str__(self):
        return f'Nombre: {self.nombre}\nApellido paterno: {self.apPat}\nApellido materno: {self.apMat}\nEmail: {self.email}'
