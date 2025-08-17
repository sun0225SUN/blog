---
title: Guía de Estilo Markdown
published: 2025-03-08
updated: 2025-03-23
tags:
  - Guía
pin: 98
toc: false
lang: es
abbrlink: markdown-style-guide
---

Aquí hay algunos ejemplos básicos de sintaxis Markdown y sus efectos estilísticos en el tema Retypeset.

## Encabezados

Para crear encabezados, agregue signos de numeral `#` delante de una palabra o frase. El número de signos de numeral debe corresponder al nivel del encabezado.

### Sintaxis

```
# Encabezado 1
## Encabezado 2
### Encabezado 3
#### Encabezado 4
##### Encabezado 5
###### Encabezado 6
```

### Resultado

# Encabezado 1
## Encabezado 2
### Encabezado 3
#### Encabezado 4
##### Encabezado 5
###### Encabezado 6

## Párrafos

Para crear párrafos, use una línea en blanco para separar una o más líneas de texto.

### Sintaxis

```
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.
```

### Resultado

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Imágenes

Para agregar imágenes, añada un signo de exclamación `!`, seguido de texto alternativo entre corchetes `[]`, y la ruta o URL de la imagen entre paréntesis `()`.

### Sintaxis

```
![Descripción de la Imagen](../_images/image-01.jpeg)

![Descripción de la Imagen](https://image.example.com/image-01.webp)
```

### Resultado

![Descripción de la Imagen](https://image.radishzz.cc/picsmaller/03.webp)

## Citas en Bloque

Para crear citas en bloque, agregue un símbolo `>` y un espacio antes del texto. Las citas en bloque pueden contener múltiples párrafos. Para citar fuentes, utilice las etiquetas `<cite>` o `<footer>`, mientras que las notas al pie pueden insertarse usando la sintaxis `[^1]` o `[^note]`.

### Cita en bloque con múltiples párrafos

#### Sintaxis

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
>
> **Nota** que puede usar _sintaxis Markdown_ dentro de una cita en bloque.
```

#### Resultado

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
>
> **Nota** que puede usar _sintaxis Markdown_ dentro de una cita en bloque.

### Cita en bloque con fuentes citadas

#### Sintaxis

```markdown
> No te comuniques compartiendo memoria, comparte memoria comunicándote.
>
> — <cite>Rob Pike[^1]</cite>

[^1]: La cita anterior está extraída de la [charla](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike durante Gopherfest, 18 de noviembre de 2015.
```

#### Resultado

> No te comuniques compartiendo memoria, comparte memoria comunicándote.
>
> — <cite>Rob Pike[^1]</cite>

[^1]: La cita anterior está extraída de la [charla](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike durante Gopherfest, 18 de noviembre de 2015.

## Tablas

Para agregar tablas, use tres o más guiones `---` para crear el encabezado de cada columna, y use barras verticales `|` para separar cada columna.

### Sintaxis

```markdown
| Cursiva   | Negrita     | Código   |
| --------- | ----------- | -------- |
| _cursiva_ | **negrita** | `código` |
| _cursiva_ | **negrita** | `código` |
```

### Resultado

| Cursiva   | Negrita     | Código   |
| --------- | ----------- | -------- |
| _cursiva_ | **negrita** | `código` |
| _cursiva_ | **negrita** | `código` |

## Bloques de Código

Para crear bloques de código, envuelva su código con tres acentos graves ```` ``` ````. Puede indicar el lenguaje de programación después de los acentos graves de apertura para indicar cómo colorear y estilizar su código, por ejemplo: html, javascript, css, markdown, etc.

### Sintaxis

````
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Ejemplo de Documento HTML5</title>
  </head>
  <body>
    <p>Prueba</p>
  </body>
</html>
```
````

### Resultado

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Ejemplo de Documento HTML5</title>
  </head>
  <body>
    <p>Prueba</p>
  </body>
</html>
```

## Tipos de Listas

### Lista Ordenada

#### Sintaxis

```markdown
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
```

#### Resultado

1. Primer elemento
2. Segundo elemento
3. Tercer elemento

### Lista No Ordenada

#### Sintaxis

```markdown
- Elemento de lista
- Elemento gráfico
- Y otro elemento
```

#### Resultado

- Elemento de lista
- Elemento gráfico
- Y otro elemento

### Lista Anidada

#### Sintaxis

```markdown
- Frutas
  - Manzana
  - Naranja
  - Plátano
- Lácteos
  - Leche
  - Queso
```

#### Resultado

- Frutas
  - Manzana
  - Naranja
  - Plátano
- Lácteos
  - Leche
  - Queso

## Otros Elementos

Incluyendo superíndice `<sup>`, subíndice `<sub>`, abreviatura `<abbr>`, tachado `<del>`, subrayado ondulado `<u>`, entrada de teclado `<kbd>`, resaltado `<mark>` y línea horizontal `<hr>`.

### Sintaxis

```html
H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> es un formato de imagen de mapa de bits.

Los buenos escritores siempre revisan la <u title="ortografía">ortografia</u>.

Presione <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Suprimir</kbd> para finalizar la sesión.

No hay <del>nada</del> ningún código que sea bueno o malo, pero ejecutarlo lo hace así.

La mayoría de las <mark>salamandras</mark> son nocturnas y cazan insectos, gusanos y otras criaturas pequeñas.

Use tres guiones `---` o la etiqueta `<hr>` para crear una línea horizontal como se muestra a continuación.

---
```

### Resultado

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> es un formato de imagen de mapa de bits.

Los buenos escritores siempre revisan la <u title="ortografía">ortografía</u>.

Presione <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Suprimir</kbd> para finalizar la sesión.

No hay <del>nada</del> ningún código que sea bueno o malo, pero ejecutarlo lo hace así.

La mayoría de las <mark>salamandras</mark> son nocturnas y cazan insectos, gusanos y otras criaturas pequeñas.

Use tres guiones `---` o la etiqueta `<hr>` para crear una línea horizontal como se muestra a continuación.

---
