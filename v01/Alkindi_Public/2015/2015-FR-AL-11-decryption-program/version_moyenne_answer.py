def dechiffrer(lettre):
    rang = RangDansAlphabet(lettre)  # Rang(a)=0, Rang(b)=1, Rang(c)=2 etc.
    if rang > 10:                             # block 'si ... alors'
        nouveauRang = rang - 10
        return letterFromRank(nouveauRang) 
    else:                                     # si rang >= 16
        nouveaRang= rang + 16
        return letterFromRank(nouveauRang) 

