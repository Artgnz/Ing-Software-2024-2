import matplotlib.pyplot as plt

coordenadas_x = range(-30, 31)
coordenadas_y = [abs(x) for x in coordenadas_x]

plt.plot(coordenadas_x, coordenadas_y)
plt.title('Gráfica de abs(x)')
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True)
plt.show()
