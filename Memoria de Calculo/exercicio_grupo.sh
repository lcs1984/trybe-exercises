#!/bin/bash

# #1
# echo "Sheel Scrip é demais"

# #2
# VARIAVEL="Shell Script é demais"
# echo $VARIAVEL

# #3
# echo "Este scrip está rodando no computador: `hostname`"

# #4
# FILE="/home/leonardo/Aulas/Aula5/exercicio_grupo.sh"
# if [ -e $FILE ]
#    then
#       echo "O caminho "$FILE" está habilitado"
#     else
#       echo "O caminho "$FILE" não está habilidado"
# fi 

# if [ -w $FILE ]
#     then
#     echo "Você tem permissão para editar"
#     else
#     echo "Você não tem permissão para editar"
# fi

# #5
# read -p "Digite um caminho: " CAMINHO
# GUARDAR=`ls -ld $CAMINHO`
# GUARDA=${GUARDAR:0:1}
# if [ $GUARDA = "d" ]
#    then 
#       echo "É um diretório"
# elif [ $GUARDA = "-" ]
#     then
#       echo "É um arquivo"
# else
#     echo "É alguma coisa" 
# fi

#6

GUARDARR=`find ~ -name $1`
GUARDAR=`ls -ld $GUARDARR`
GUARDA=${GUARDAR:0:1}
if [ $GUARDA = "d" ]
   then 
      echo "É um diretório"
elif [ $GUARDA = "-" ]
    then
      echo "É um arquivo"
else
    echo "É alguma coisa" 
fi

#7
GUARDARR2=`find ~ -name $1`
if [ -d $GUARDARR2 ]
    then
       echo "É um diretório!"
       QUANTIDADE=`ls -l $GUARDARR2 | wc -l`
       echo "e tem $QUANTIDADE"
else
    echo "É outra coisa!"
fi
