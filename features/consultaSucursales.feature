Feature: Consulta de sucursales

A fin de consultar la sucursal, siendo cliente de tottus yo quiero validar el contenido de una receta
 
  Scenario: Validacion de receta
    Given Yo abro la web de google
    When Yo escribo en el campo de busqueda "tottus sucursales"
    Then Yo presiono tecla "enter" en google
    Then Yo presiono texto "Tottus Nataniel"
    Then Yo presiono boton Sitio Web
    Then Yo presiono boton Recetas y mas
    Then Yo selecciono Dificultad "ALTA"
    Then Yo Presiono "CORONA DE ROLLITOS DE CANELA"
	Then Yo valido ingredientes "azúcar rubia" y "canela"

