# Angular #

## Instalação ##

&xrArr; Para utilizar o Angular, deve estar instalado na máquina a Angular CLI, processo que pode ser feito através do NPM (Node Package Manager), um recurso do Node.js

&xrArr; Para instalar o Node.js devem ser executados os comandos abaixo:

``` shell
# instala a nvm (Node Version Manager, ou Gestor de Pacote de Node)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# descarregar e instalar a Node.js (podemos precisar de reiniciar o terminal)
nvm install 20
# verifica se a versão correta da Node.js está no ambiente
node -v # deve imprimir `v20.17.0`
# verifica se a versão correta da npm está no ambiente
npm -v # deve imprimir `10.8.2`
```

<https://nodejs.org/pt/download/package-manager>

> As versões indicadas são relativas à 09/24.

A versão dos recursos podem ser vistas através do comando `nvm list`.

&xrArr; Com o Node.js instalado, é possível executar o seguinte comando através do NPM:

`$ npm install -g @angular/cli`

A versão do Angular pode ser vista através do comando `ng version`.

---

## Iniciando o projeto ##

&xrArr; Para iniciar o projeto, o seguinte comando deve ser executado na pasta onde o front será armazenado:

`$ ng new <nome_projeto>`

&xrArr; Os projetos Angular são trabalhados através de componentes, que são acessados, originalmente, através do arquivo index.html, presente na pasta src. Neste arquivo, os demais componentes podem ser acessados como partes da página. No arquivo main.ts, estão os códigos em TypeScript e no arquivo styles.scss estão os códigos em Scss. Estes arquivos trabalham em conjunto através do arquivo angular.json, que faz com que o projeto em TS e Scss, além dos componentes Angular, sejam processados para HTML, CSS e JS puros. 
O funcionamento dos componentes ocorre de forma similar, assim, todos componentes devem ter um HTML, um SCSS e um JS. 

---

## Testando o Projeto ##

&xrArr; Para testar o projeto localmente, pode ser rodado o seguinte comando no terminal:

`$ ng serve`

---

## Componentes ##

&xrArr; Com o projeto iniciado, a construção pode ser feita através de componentes já existentes, importados de pacotes externos, ou através de componentes criados dentro do projeto. 

&xrArr; Ao utilizar um componente externo, o pacote deve ser instalado no projeto e no arquivo TS do componente onde será feita a utilização, um import deve ser realizado. 

&xrArr; Para componentes criados, o import no arquivo TS deve ser realizado através do caminho relativo do componente a ser utilizado.

&xrArr; O import dos componentes deve ser feito no arquivo TS do componente que irá referenciar outro. 

``` typescript
import { Component } from '@angular/core';
import { ExemploDeImportComponent } from "../exemplo-de-import/exemplo-de-import.component";

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [ExemploDeImportComponent],
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.scss']
})
export class ExemploComponent {

}
```

&xrArr; Componentes podem ser criados através do comando:

`$ ng g c <nome_componente>`

&xrArr; Dentro do arquivo TS do component também é possível determinar o seletor para o component em HTML, definir qual arquivo HTML será usado para o component e definir arquivos de estilo para referência. Pode ser utilizado mais de um arquivo de estilo para um mesmo component, recurso que é possível ao trocar a propriedade padrão de `styleUrl`, que recebe apenas um arquivo, por padrão o arquivo do component, para a propriedade `styleUrls`, a qual recebe um vetor de strings, onde cada string é o caminho de cada arquivo. 

---

## Routes ##

&xrArr; Para acessar outros componentes através de navegação entre páginas, é necessário configurar as rotas da aplicação. 

&xrArr; Este processo pode ser feito no arquivo app.routes.ts, presente na pasta app do projeto.

&xrArr; É necessário realizar o import do componente Routes, do próprio Angular, e também dos componentes a serem utilizados. 

&xrArr; Na função export do arquivo devem ser indicados os objetos de destino das rotas, onde em um vetor, os objetos devem indicar o caminho a ser usado como referência e o component relacionado a este caminho. 

``` typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
];
```

> Ao declarar um path vazio, será considerado o caminho padrão da aplicação.

&xrArr; No arquivo HTML do component onde as rotas foram declaradas, deve ser incluída a propriedade `router-outlet` e as rotas podem ser utilizadas através da propriedade `routerLink`.

``` html
<main>
  <nav>
    <li class="nav-item">
      <a class="nav-link active" routerLink="" >Home</a>
    </li>
  </nav>
  <router-outlet></router-outlet>
</main>
```

&xrArr; Também é necessário que sejam realizados import dos componentes `RouterLink`, `RouterLinkActive`, `RouterOutlet` no arquivo TS do componente.

``` typescript
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
...
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
...
})
```

---

## Carousel ##

&xrArr; Carousel de imagens podem ser criados através de componentes personalizados. 

&xrArr; O módulo `@ng-bootstrap/ng-bootstrap` pode ser utilizado, porém é necessário instalação no projeto.

&xrArr; Instalações podem ser feitas através do comando: 

`$ ng add <modulo>`

&xrArr; O carousel pode ser feito de diferentes maneiras, que podem ser vistas no link do módulo.

> <https://ng-bootstrap.github.io/#/components/carousel/examples>