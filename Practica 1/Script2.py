def cuenta_valles(cadena: str):
    """
    Cuenta el número de valles en una cadena.

    Args:
        cadena (str): La cadena únicamente con caracteres `U` y `D`.
    """
    contador = 0
    valles = 0
    for caracter in cadena:
        if caracter == 'U':
            contador += 1
            if contador == 0:
                valles += 1
        else:
            contador -= 1

    return valles

CADENA_PRUEBA_VALLES = "DDDDUUUUUUUDDDDDDUUUUDU"
print(f"Prueba de cuenta valles con cadena: {CADENA_PRUEBA_VALLES}")
print(f"Resultado: {cuenta_valles(CADENA_PRUEBA_VALLES)}")

class Arbol:
    def __init__(self, valor):
        """
        Inicializa el árbol.
        """
        self.valor = valor
        self.izquierda = None
        self.derecha = None
        self.padre = None

    def insertar(self, valor):
        """
        Inserta un valor en el árbol.
        """
        if valor <= self.valor:
            if not self.izquierda:
                self.izquierda = Arbol(valor)
                self.izquierda.padre = self
            else:
                self.izquierda.insertar(valor)
        else:
            if not self.derecha:
                self.derecha = Arbol(valor)
                self.derecha.padre = self
            else:
                self.derecha.insertar(valor)

    def pre_orden_aux(self, lista):
        """
        Realiza un recorrido pre-orden.
        """
        lista.append(self.valor)
        if self.izquierda:
            self.izquierda.pre_orden_aux(lista)
        if self.derecha:
            self.derecha.pre_orden_aux(lista)

    def pre_orden(self):
        """
        Realiza un recorrido pre-orden.
        """
        lista = []
        self.pre_orden_aux(lista)
        return lista

    def in_orden_aux(self, lista):
        """
        Realiza un recorrido in-orden.
        """
        if self.izquierda:
            self.izquierda.in_orden_aux(lista)
        lista.append(self.valor)
        if self.derecha:
            self.derecha.in_orden_aux(lista)

    def in_orden(self):
        """
        Realiza un recorrido in-orden.
        """
        lista = []
        self.in_orden_aux(lista)
        return lista

    def post_orden_aux(self, lista):
        """
        Realiza un recorrido post-orden.
        """
        if self.izquierda:
            self.izquierda.post_orden_aux(lista)
        if self.derecha:
            self.derecha.post_orden_aux(lista)
        lista.append(self.valor)

    def post_orden(self):
        """
        Realiza un recorrido post-orden.
        """
        lista = []
        self.post_orden_aux(lista)
        return lista

arbol = Arbol(10)
arbol.insertar(2)
arbol.insertar(4)
arbol.insertar(6)
arbol.insertar(9)
arbol.insertar(12)
arbol.insertar(1432)
arbol.insertar(-321)
arbol.insertar(0)

print("Recorrido pre-orden de árbol:")
print(arbol.pre_orden())

print("Recorrido in-orden de árbol:")
print(arbol.in_orden())


print("Recorrido post-orden de árbol:")
print(arbol.post_orden())
