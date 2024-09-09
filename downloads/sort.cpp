#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <iostream>
#include <new>

using namespace std;

void lista_elementos(int *v, int t){
	for(int i = 0; i < t; i++){
		printf("-");
		printf("|%d|", v[i]);
		printf("-");
	}
	printf("\n\n");
}

int* alocaVetor(int t){

    int *aux;

    aux = (int *) calloc(t, sizeof(int));

    return aux;
}

void insere_valores(int t, int *v){
    	for(int i = 0; i < t; i++){
            printf("Entre com o valor %d : ", i);
            scanf("%d", &v[i]);
    	}


}

void shell_sort(int t, int *v){
    int i, j, atual, h = 1;

    while(h < t){
        h = 3 * h + 1;
    }


    while (h > 1){

        h = h / 3;
        for (i = h; i < t; i++){
            atual = v[i];

            j = i - h;

            while((j >= 0) && (atual < v[j])){

                v[j + h] = v [j];

                j = j - h;
            }
            v[j + h] = atual;
            lista_elementos(v, t);
        }
    }
}

void bubble_sort(int t, int *v){
    int x, y, aux;

    for (x = 0; x < t; x++){
        for (y  = x + 1; y < t; y++){

            if(v[x] > v[y]){
                aux = v[x];
                v[x] = v[y];
                v[y] = aux;
            }
            lista_elementos(v, t);
        }
    }
}

void insertion_sort(int t, int *v){
    int i, j, atual;

    for (i = 1; i < t; i++){
        atual = v[i];

        j = i - 1;

        while((j >= 0) && (atual < v[j])){

            v[j + 1] = v [j];

            j = j - 1;
        }
        v[j + 1] = atual;
        lista_elementos(v, t);
    }
}

void merge(int *v, int e, int m, int d){

    int te = m - e + 1;
    int td = d - m;
    int i, j, k;
    int vAuxE[te], vAuxD[td];

    for (i = 0; i < te; i++){
        vAuxE[i] = v[e + i];
    }
    for (j = 0; j < td; j++){
        vAuxD[j] = v[m + 1 + j];
    }

    i = 0;
    j = 0;
    k = e;

    while(i < te && j < td){
        if(vAuxE[i] <= vAuxD[j]){
            v[k] = vAuxE[i];
            i++;
        }else{
            v[k] = vAuxD[j];
            j++;
        }
        k++;
    }
    while(i < te){
        v[k] = vAuxE[i];
        i++;
        k++;
    }
    while(j < td){
        v[k] = vAuxD[j];
        j++;
        k++;
    }
}

void merge_sort(int t, int *v, int e, int d){
    if(e < d){
        int m = e + (d - e) / 2;

        merge_sort(t, v, e, m);
        merge_sort(t, v, m + 1, d);

        lista_elementos(v, t);

        merge(v, e, m, d);
    }



}

void quick_sort(int *v, int inicio, int fim, int t){
    int pivo, esq, dir, meio, aux;

    esq = inicio;
    dir = fim;

    meio = div((esq + dir), 2).quot;
    pivo = v[meio];

    while (dir >= esq){

        while(v[esq] < pivo){
            esq = esq + 1;
        }

        while(v[dir] > pivo){
            dir = dir -1;
        }

        if (esq <= dir){

            aux = v[esq];
            v[esq] = v[dir];
            v[dir] = aux;

            esq = esq + 1;
            dir = dir - 1;

        }

        lista_elementos(v, t);

    }

    if(inicio < dir){
        quick_sort(v, inicio, dir, t);
    }

    if(esq < fim){
        quick_sort(v, esq, fim, t);
    }

}

void selection_sort(int t, int *v){
    int i, j, aux, pMnrVlr;

    for (i = 0; i < t; i++){
        pMnrVlr = i;


    for (j = i + 1; j < t; j++){

        if(v[j] < v[pMnrVlr]){

            pMnrVlr = j;
        }
    }
    if (pMnrVlr != i){
        aux = v[i];
        v[i] = v[pMnrVlr];
        v[pMnrVlr] = aux;
    }
    lista_elementos(v, t);
    }
}

int main(){

    string a;
    char b;

    setlocale(LC_ALL,"");

    do{
    cout << "-------------------------------------------------------------------------------------\n";
    cout << "|                                Olá, seja bem vindo                                |\n";
    cout << "|Este é um programa que demonstra como funcionam diferentes técnicas de ordenação   |\n";
    cout << "|Entre com um vetor a ser ordenado                                                  |\n";
    cout << "|Depois selecione a forma de ordenação de acordo com a tabela abaixo:               |\n";
    cout << "|Para bubble sort, digite 'b'                                                       |\n";
    cout << "|Para insertion sort, digite 'i'                                                    |\n";
    cout << "|Para merge sort, digite 'm'                                                        |\n";
    cout << "|Para quick sort, digite 'q'                                                        |\n";
    cout << "|Para selection sort, digite 's'                                                    |\n";
    cout << "|Para shell sort, digite 'h'                                                        |\n";
    cout << "-------------------------------------------------------------------------------------\n";

    int *v, t;
	printf("Entre com o tamanho do vetor: ");
	fflush(stdout);
	fflush(stdin);
	scanf("%d", &t);
	v = alocaVetor(t);
	insere_valores(t, v);
	cout << "Entre com a forma de ordenação: ";
    cin >> b;

    switch(b){
    case 'b':
        cout << "Buuble sort:\n";
        bubble_sort(t, v);
        break;
    case 'i':
        cout << "Insertion sort:\n";
        insertion_sort(t, v);
        break;
    case 'm':
        cout << "Merge sort:\n";
        merge_sort(t, v, 0, t-1);
        break;
    case 'q':
        cout << "Quick sort:\n";
    	quick_sort(v, 0, t - 1, t);
        break;
    case 's':
        cout << "Selection sort:\n";
    	selection_sort(t, v);
        break;
    case 'h':
        cout << "Shell sort:\n";
        shell_sort(t, v);
        break;
    default:
        printf("Nenhuma opcao selecionada");
    }




        do{
            cout << "\n" << "Deseja fazer novamente? 'sim' ou 'nao': ";
            cin >> a;
        }while((a != "sim") && (a != "nao"));
        system("CLS");

    }while(a == "sim");





	return 0;
}
