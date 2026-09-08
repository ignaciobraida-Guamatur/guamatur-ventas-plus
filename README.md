# Ventas+ · Seguimiento semanal

App interna de Guamatur para el seguimiento del **Plan Ventas+**: lo que se le pidió a cada vendedor
contra lo que efectivamente hizo, semana a semana.

Estructura tomada de la planilla `Seguimiento_Ventas_Mas.xlsx`: ciclos de 5 semanas (S1..S5), y la
«Acción acordada» de una semana es la «Acción para esta semana» de la anterior.

## Qué hay acá

Solo el frente: **una página, sin datos**. Todo viene de Supabase (schema `ventasplus`) y está gateado
por RLS: cada responsable ve el plan completo pero edita solo a sus vendedores, y quien no es responsable
del plan no lee nada, aunque tenga cuenta de Guamatur.

- Login: Google, restringido a `@guamatur.com` por un hook de la base.
- La `anon key` del config es pública por diseño: quien manda son la RLS y el hook.

Las migraciones, el seed y la documentación del modelo viven fuera de este repo, en el workspace interno.

## Correr local

```
node servir.js     # → http://localhost:3000
```
