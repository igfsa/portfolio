# Decoradores #

## @ViewChild ##

&xrArr; Este decorador permite que um componente pai acesse propriedades de um componente filho. Desta forma no HTML será possível interagir com componente filho através do componente pai.

* Código TS componente filho
``` typescript
import {Component} from '@angular/core';

@Component({
    ...
})
export class <component-filho> {

    <acao>(){
        ...
    }

}

```

* Código TS componente pai
``` typescript
import {Component, ViewChild} from '@angular/core';
import {<componente-filho>} from '../<componente-filho>/<componente-filho>';

@Component({
    ...
})
export class <component-pai> {

@ViewChild(<componente-filho>) <filho>: <componente-filho>;

    <acao-pai>(){
        this.filho.acao();
    }
}

```

* Código HTML component pai
``` html
<button (click)="acao-pai()">Botão da ação<button>
```

---

## @ViewChildren ##

&xrArr; Este decorador permite que um componente pai acesse propriedades de múltiplos componentes filhos iguais. Ou seja, ao possuir um grupo de filhos, o componente irá interagir com cada um individualmente. Os códigos abaixo estão seguindo os exemplos de ViewChild

* Código TS componente filho
``` typescript
import {Component} from '@angular/core';

@Component({
    ...
})
export class <component-filho> {

    <acao>(){
        ...
    }

}

```

* Código TS componente pai
``` typescript
import {Component, ViewChildren} from '@angular/core';
import {<componente-filho>} from '../<componente-filho>/<componente-filho>';

@Component({
    ...
})
export class <component-pai> {
    
    @ViewChildren(<componente-filho>) <filhos>: QueryList<<componente-filho>>;

    <acao-pai>(){
        this.filhos.forEach(filho => {
            filho.acao().
        }

        );
    }
}

```

> QueryList é uma lista de itens que o Angular mantém atualizada em mudanças de estado da aplicação. No caso está sento utilizada para gerar uma lista de `<componente-filho>`

* Código HTML component pai
``` html
<button (click)="acao-pai()">Botão 1 da ação<button>
<button (click)="acao-pai()">Botão 2 da ação<button>
```

---