#include<stdio.h>
int main(int argc, char*argv[]){
    if(argc==1){
        printf("no argument provided.\n");
    }else{
        printf("arguents provided:\n");
        for(int i=1; i<argc; i++) {
            printf("%\n",argv[i]);
        }
    }
    return 0;
}
