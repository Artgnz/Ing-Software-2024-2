import random
import time

# inicializa el generador aleatorio de números.
random.seed(time.time())

class Jugador:
    def __init__(self, nombre: str):
        """
        Inicializa un jugador con un nombre.
        Los demás atributos son 0 inicialmente.
        """
        self.nombre = nombre
        self.cant_sets_marcados = 0
        self.cant_juegos_marcados = 0
        self.puntos = 0

    def __str__(self):
        """
        Devuelve el nombre.
        """
        return self.nombre

    def imprimir_puntaje(self):
        """
        Imprime el puntaje.
        """
        print(f"Jugador: {self.nombre}")
        print(f"\tSets marcados: {self.cant_sets_marcados}")
        print(f"\tJuegos marcados: {self.cant_juegos_marcados}")
        valores_puntos = [0, 15, 30, 40, "Adv"]
        print(f"\tPuntos: {valores_puntos[self.puntos]}")

class PartidoTenis:
    def __init__(self, num_sets: int, jugador1: Jugador, jugador2: Jugador):
        """
        Inicializa un partido de tenis con un número específico
        de sets y con dos jugadores.
        """
        self.num_sets = num_sets
        self.jugador1 = jugador1
        self.jugador2 = jugador2
        # Se decide que jugador realiza el saque inicial.
        self.saque = self.jugador1 if random.randint(0, 1) == 1 else self.jugador2

    def jugar_partido(self):
        """
        Juega el partido.
        """
        num_set = 1

        # Se repite hasta que un jugador haya ganado la mayoría de sets.
        while max(self.jugador1.cant_sets_marcados, self.jugador2.cant_sets_marcados) < self.num_sets // 2 + 1:
            ganador = self.jugar_set(num_set)
            num_set += 1
        ganador = self.jugador1 if self.jugador1.cant_sets_marcados > self.jugador2.cant_sets_marcados else self.jugador2
        print(f"El ganador del partido es {ganador}.")

    def jugar_set(self, num_set: int):
        """
        Juega un set.
        """
        juego_actual = -1
        # Cambio de cancha cuando el número de sets jugados es impar.
        if (num_set - 1) % 2 == 1:
            print("Cambio de cancha.")
        while max(self.jugador1.cant_sets_marcados, self.jugador2.cant_sets_marcados) < num_set:
            if juego_actual < max(self.jugador1.cant_juegos_marcados, self.jugador2.cant_juegos_marcados):
                juego_actual = max(self.jugador1.cant_juegos_marcados, self.jugador2.cant_juegos_marcados)
                print(f"Saque {self.saque}")
                self.saque = self.jugador1 if self.saque == self.jugador2 else self.jugador2

            nombre_jugador = input("Introduzca el nombre del jugador que anotó:")
            # Se verifica que introduzca un nombre válido.
            try:
                
                if nombre_jugador == self.jugador1.nombre:
                    jugador = self.jugador1
                elif nombre_jugador == self.jugador2.nombre:
                    jugador = self.jugador2
                else:
                    raise Exception("Entrada inválida.")
            except Exception as e:
                print(e)
                continue
            
            self.punto(jugador)
            self.imprimir_puntajes()

    def punto(self, jugador: Jugador):
        """
        Aumenta el puntaje de un jugador.
        """
        jugador.puntos += 1
        print(f"El jugador {jugador} ha anotado un punto.")

        contrincante = self.jugador1 if jugador == self.jugador2 else self.jugador2
        if (self.jugador1.puntos == self.jugador2.puntos and self.jugador1.puntos >= 3):
            self.jugador1.puntos = 3
            self.jugador2.puntos = 3
        if max(jugador.puntos, contrincante.puntos) >= 4 and abs(jugador.puntos - contrincante.puntos) >= 2:
            jugador.cant_juegos_marcados += 1
            jugador.puntos = 0
            contrincante.puntos = 0
            print(f"El jugador {jugador} ha ganado el juego.")
            if jugador.cant_juegos_marcados >= 6 and jugador.cant_juegos_marcados - contrincante.cant_juegos_marcados >= 2:
                jugador.cant_sets_marcados += 1
                jugador.cant_juegos_marcados = 0
                contrincante.cant_juegos_marcados = 0
                print(f"El jugador {jugador} ha ganado el set.")

    def imprimir_puntajes(self):
        """
        Imprime los puntajes de los dos jugadores.
        """
        self.jugador1.imprimir_puntaje()
        self.jugador2.imprimir_puntaje()

def main():
    nombre_jugador1 = input("Introduzca el nombre del primer jugador: ")
    nombre_jugador2 = input("Introduzca el nombre del segundo jugador: ")

    NUM_SETS = 3
    jugador1 = Jugador(nombre_jugador1)
    jugador2 = Jugador(nombre_jugador2)
    partido = PartidoTenis(NUM_SETS, jugador1, jugador2)
    partido.jugar_partido()
if __name__ == "__main__":
    main()
