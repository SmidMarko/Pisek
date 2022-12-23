def chiffrer(lettre):
    rang = RangDansAlphabet(lettre)   # Rang(a)=0, Rang(b)=1, Rang(c)=2 etc
    if rang < 16:                             # block 'si ... alors'
        nouveauRang = rang + 10
        return lettreDeRang(nouveauRang) 
    else:                                     # si rang >= 16
        nouveaRang= rang - 16
        return lettreDeRang(nouveauRang) 

