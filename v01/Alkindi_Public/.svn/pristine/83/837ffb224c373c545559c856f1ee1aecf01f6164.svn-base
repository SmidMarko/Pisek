def transposer(texte):
    permutation=[3,2,0,1]       # 0->3 1->2 2->0 2->1 
    n=len(texte)                # longueur du texte
    residue= n % 4              # reste de n a la division par 4
    texte=texte+'x'*(4-residue) # on rajoute des 'x' a la fin du texte
    i=0
    chiffre=''
    while i + 4 <= n:                             # boucle 'tant que "
        chiffre=chiffre + texte[i+permutation[0]] # ajout a la fin de 'chiffre'
        chiffre=chiffre + texte[i+permutation[1]] 
        chiffre=chiffre + texte[i+permutation[2]] 
        chiffre=chiffre + texte[i+permutation[3]] 
        i=i+4
    return chiffre
