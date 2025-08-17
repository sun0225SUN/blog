---
title: KaTeX Demostración Matemática
published: 2025-04-01
lang: es
abbrlink: katex-mathematical-demo
---

KaTeX es una biblioteca JavaScript multiplataforma que permite visualizar notación matemática en navegadores web. Destaca por su velocidad y facilidad de uso, fue desarrollada inicialmente por Khan Academy y se convirtió en uno de los cinco proyectos más populares de GitHub.

## Teoría de Grupos

El lema de Burnside, a veces también llamado teorema de conteo de Burnside, lema de Cauchy-Frobenius o teorema de conteo de órbitas.

Sea $\wedge$ una acción de grupo de un grupo finito $G$ sobre un conjunto finito $X$. Entonces el número $t$ de órbitas de la acción viene dado por la fórmula.

$$
t=\frac{1}{|G|}\sum_{g\in G}|\text{Fix}(g)|
$$

Para cada entero $n\ge2$, el grupo cociente $\mathbb{Z}/n\mathbb{Z}$ es un grupo cíclico generado por $1+n\mathbb{Z}$ y por tanto $\mathbb{Z}/n\mathbb{Z}\cong\mathbb{Z}_n$.

El grupo cociente $\mathbb{R}/\mathbb{Z}$ es isomorfo a $([0,1),+_1)$, el grupo de números reales en el intervalo $[0,1)$, bajo la adición módulo 1.

Teorema de Isomorfismo. Sea $\phi\colon(G,\circ)\to(H,*)$ un homomorfismo. Entonces la función

$$
\begin{aligned}
f\colon G/\text{Ker}(\phi)&\to\text{Im}(\phi)\\
x\text{Ker}(\phi)&\mapsto\phi(x)
\end{aligned}
$$

es un isomorfismo, así que

$$
G/\text{Ker}(\phi)\cong \text{Im}(\phi)
$$

## Teorema de Taylor

Sea la función $f$ diferenciable $(n+1)$ veces en un intervalo abierto que contiene los puntos $a$ y $x$. Entonces

$$
 f(x)=f(a)+f'(a)(x-a)+\cdots+\frac{f^{(n)}(a)}{n!}(x-a)^n+R_n(x)
$$

donde

$$
 R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1},
$$

para algún $c$ entre $a$ y $x$.

$\KaTeX$ no tiene una opción de alineación a la derecha, por lo que se utiliza una columna alineada adicional para los números de ecuación. Estos son empujados a la derecha mediante el espaciado mkern, por defecto \mkern100mu. Se pueden utilizar tanto entornos align como align*, así como \tag y \notag.

## Entorno Align

$$
\begin{align}
\frac{\pi}{4n^2} &= \frac{4^n(n!)^2}{2n^2(2n)!}n(2n-1)J_{n-1}-\frac{4^n(n!)^2}{2n^2(2n)!}2n^2J_n \tag{1} \\
&= \frac{4^n}{4(2n)!}\left(\frac{n!}{n}\right)^22n(2n-1)J_{n-1}-\frac{4^n(n!)^2}{(2n)!}J_n \tag{$\ddagger$} \\
&= \frac{4^{n-1}((n-1)!)^2}{(2n-2)!}J_{n-1}-\frac{4^n(n!)^2}{(2n)!}J_n \tag{2}
\end{align}
$$

## Entorno Align*

$$
\begin{align}
\frac{4^N(N!)^2}{(2N)!}J_N &\leq \frac{4^N(N!)^2}{(2N)!}\frac{\pi^2}{4}\frac{1}{2n+2}I_{2N} \tag{*} \\
&= \frac{\pi^2}{8(N+1)}\frac{4^N(N!)^2}{(2N)!}I_{2N} \\
&= \frac{\pi^2}{8(N+1)}\frac{\pi}{2} \tag{**} \\
&= \frac{\pi^3}{16(N+1)} \\
\frac{x}{\sin x} &\leq \frac{\pi}{2} \tag{3} \\
\text{por lo tanto} \qquad\qquad x &\leq \frac{\pi}{2}\sin x \tag{4}
\end{align}
$$

## Suma de una Serie

$$
\begin{align*}
\sum_{i=1}^{k+1}i &= \left(\sum_{i=1}^{k}i\right) +(k+1) \tag{1} \\
&= \frac{k(k+1)}{2}+k+1 \tag{2} \\
&= \frac{k(k+1)+2(k+1)}{2} \tag{3} \\
&= \frac{(k+1)(k+2)}{2} \tag{4} \\
&= \frac{(k+1)((k+1)+1)}{2} \tag{5}
\end{align*}
$$

## Notación de Producto

$$
1 + \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots
= \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},
\text{ para }\lvert q\rvert < 1.
$$

## Producto Vectorial

$$
\mathbf{V}_1 \times \mathbf{V}_2 = \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\[1ex]
\frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\[2.5ex]
\frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0
\end{vmatrix}
$$

## Ecuaciones de Maxwell

$$
\begin{align*}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &= \frac{4\pi}{c}\vec{\mathbf{j}} \\
\nabla \cdot \vec{\mathbf{E}} &= 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} &= \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} &= 0
\end{align*}
$$

## Letras Griegas

$$
\begin{align*}
&\Gamma\ \Delta\ \Theta\ \Lambda\ \Xi\ \Pi\ \Sigma\ \Upsilon\ \Phi\ \Psi\ \Omega\\
&\alpha\ \beta\ \gamma\ \delta\ \epsilon\ \zeta\ \eta\ \theta\ \iota\ \kappa\ \lambda\ \mu\ \nu\ \xi\ \omicron\ \pi\ \rho\ \sigma\ \tau\ \upsilon\ \phi\ \chi\ \psi\ \omega\ \varepsilon\ \vartheta\ \varpi\ \varrho\ \varsigma\ \varphi
\end{align*}
$$

## Flechas

$$
\begin{align*}
&\gets\ \to\ \leftarrow\ \rightarrow\ \uparrow\ \Uparrow\ \downarrow\ \Downarrow\ \updownarrow\ \Updownarrow\\
&\Leftarrow\ \Rightarrow\ \leftrightarrow\ \Leftrightarrow\ \mapsto\ \hookleftarrow\\
&\leftharpoonup\ \leftharpoondown\ \rightleftharpoons\ \longleftarrow\ \Longleftarrow\ \longrightarrow\\
&\Longrightarrow\ \longleftrightarrow\ \Longleftrightarrow\ \longmapsto\ \hookrightarrow\ \rightharpoonup\\
&\rightharpoondown\ \leadsto\ \nearrow\ \searrow\ \swarrow\ \nwarrow
\end{align*}
$$

## Símbolos

$$
\begin{align*}
&\surd\ \barwedge\ \veebar\ \odot\ \oplus\ \otimes\ \oslash\ \circledcirc\ \boxdot\ \bigtriangleup\\
&\bigtriangledown\ \dagger\ \diamond\ \star\ \triangleleft\ \triangleright\ \angle\ \infty\ \prime\ \triangle
\end{align*}
$$

*Ejemplos tomados de [KaTeX Live Demo](https://sixthform.info/katex/examples/demo.html)*
