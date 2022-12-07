const data = [
    {
        id: 1,
        question: "Cand spuneti petrol va ganditi la:",
        options: [
            { answer: "O imagine de un anumit fel, de exemplu, o masina, o statie de benzina?", answerType: 'visual' },
            { answer: "Un sunet, de exemplu, sunetul petrolului curgand in cisterna?", answerType: 'audio' },
            { answer: "O atingere, de exemplu, senzatia in momentul in care tineti in mana furtunul de benzina? ", answerType: 'kinestezic' },
            { answer: "Un miros, de exemplu, mirosul petrolului", answerType: 'smell' },
            { answer: "Un gust, de exemplu gustul de petrol (presupunand ca il cunoasteti)", answerType: 'taste' },
        ],
    },
    {
        id: 2,
        question: "Cand spuneti cel mai bun prieten al dvs va ganditi la:",
        options: [
            { answer: "Un sunet, de exemplu, sunetul vocii lui?", answerType: 'audio' },
            { answer: "O emotie, de exemplu, sentimentul fata de el? ", answerType: 'kinestezic' },
            { answer: "Un miros, de exemplu, mirosul parfumului acestuia? ", answerType: 'smell' },
            { answer: "Un gust, de exemplu, gustul unei mese luate impreuna? ", answerType: 'taste' },
            { answer: "O imagine, de exemplu, felul cum arata sau un loc in care ati fost impreuna?", answerType: 'visual' },
        ],
    },
    // {
    //   id: 3,
    //   question: "Felul in care v-ar placea cel mai mult sa va petreceti timpul:",
    //   answers: [
    //     { answer: "Sunetele asociate cu acest tip de activitate, de exemplu, sunetul vocilor oamenilor sau sunetul mediului inconjurator?", isAudio: true },
    //     { answer: "Un gust, de exemplu, gustul mancarii favorite?  ", isTaste: true },
    //     { answer: "Un miros, de exemplu, mirosul din mediul inconjurator? ", isSmell: true },
    //     { answer: "O atingere sau o emotie, de exemplu, cum va simtiti cand va ganditi sa va petreceti timpul in acest fel, senzatia pe care o aveti? ", isKinestezic : true },
    //     { answer: "O imagine, de exemplu, unde ati vrea sa fiti sau cel cu care ati vrea sa fiti? ", isVisual: true },
    //   ],
    // },
    // {
    //   id: 4,
    //   question: "Cand va ganditi la ce ati facut ieri:",
    //   answers: [
    //     { answer: "Un gust de anumit fel, de exemplu, a ceea ce ati mancat?", isTaste: true },
    //     { answer: "O imagine, de exemplu, a locului unde va aflati?", isVisual: true },
    //     { answer: "Un sunet, de exemplu, al unei conversatii?", isAudio: true },
    //     { answer: "O atingere, o senzatie sau o emotie? ", isKinestezic : true },
    //     { answer: "Un miros, de exemplu, al mediului in care ati fost? ", isSmell: true },
    //   ],
    // },
    // {
    //   id: 5,
    //   question: "Cand va ganditi la un moment in timp care nu v-a placut prea mult:",
    //   answers: [
    //     { answer: "Un miros, de exemplu, a ceva dezagreabil? ", isSmell: true },
    //     { answer: "Un sunet, de exemplu, ceea ce ati auzit sau ceea ce v-ati spus dvs. insiva? ", isAudio: true },
    //     { answer: "Un gust, de exemplu, al unei mancaruri rele? ", isTaste: true },
    //     { answer: "O imagine?  ", isVisual : true },
    //     { answer: "O emotie sau cum v-ati simtit in acel moment?  ", isKinestezic: true },
    //   ],
    // },
    // {
    //   id: 6,
    //   question: "Cand va ganditi la restaurantul preferat:",
    //   answers: [
    //     { answer: "Un miros, de exemplu, mirosul care vine de la bucatarie?", isSmell: true },
    //     { answer: "Ce auziti, de exemplu, conversatie, muzica?", isAudio: true },
    //     { answer: "Un gust, de exemplu, al mancarii?", isTaste: true },
    //     { answer: "Ce ati vazut, de exemplu, oamenii cu care erati, ce era imprejur?", isVisual : true },
    //     { answer: "O atingere sau o emotie, de exemplu, felul in care v-ati simtit acolo?", isKinestezic: true },
    //   ],
    // },
    // {
    //   id: 7,
    //   question: "Cand va ganditi la copilarie:",
    //   answers: [
    //     { answer: "O imagine?", isVisual: true },
    //     { answer: "Sunete sau voci?", isAudio: true },
    //     { answer: "O atingere sau o emotie?", isKinestezic: true },
    //     { answer: "Un miros, o aroma, un parfum?", isSmell: true },
    //     { answer: "Un gust?", isTaste: true },
    //   ],
    // },
    // {
    //   id: 8,
    //   question: "Cand va ganditi la munca dvs:",
    //   answers: [
    //     { answer: "Un gust?", isTaste: true },
    //     { answer: "O imagine, de exemplu, imaginea dvs facand ceva?", isVisual: true },
    //     { answer: "Un sunet, de exemplu, al unor echipamente de lucru sau al unor voci?", isAudio: true },
    //     { answer: "O atingere sau o emotie, de exemplu, textura a ceea ce atingeti sau sentimentul dvs. legat de slujba?", isKinestezic : true },
    //     { answer: "Un miros, de exemplu, cel dimprejur? ", isSmell: true },
    //   ],
    // },
    // {
    //   id: 9,
    //   question: "Cand va ganditi unde ati putea fi maine prima oara aveti:",
    //   answers: [
    //     { answer: "Un gust?", isTaste: true },
    //     { answer: "O imagine?", isVisual: true },
    //     { answer: "Un sunet?", isAudio: true },
    //     { answer: "O atingere sau o emotie?", isKinestezic : true },
    //     { answer: "Un miros sau o aroma? ", isSmell: true },
    //   ],
    // },
    // {
    //   id: 10,
    //   question: "Cand ceva ce vi se pare dificil va ganditi la:",
    //   answers: [
    //     { answer: "O imagine sau un cadru?", isVisual: true },
    //     { answer: "Un sunet sau o conversatie?", isAudio: true },
    //     { answer: "O emotie combinata sau o atingere?  ", isKinestezic: true },
    //     { answer: "Un miros?", isSmell: true },
    //     { answer: "Un gust?", isTaste: true },
    //   ],
    // },
    // {
    //   id: 11,
    //   question: "Cand aveti o rasplata va ganditi la:",
    //   answers: [
    //     { answer:"O emotie, de exemplu,  sentimentul de satisfactie, sau o atingere, cum ar fi senzatia fizica atunci cand faceti sport?", isKinestezic: true},
    //     { answer: "Un gust?", isTaste: true },
    //     { answer: "Un miros?", isSmell: true },
    //     { answer:"Un sunet, de exemplu,  ceea ce va spuneti dvs insiva sau sunetul vocilor din jurul dvs. ?", isAudio: true },
    //     { answer: "O imagine, de exemplu, despre cum se infatiseaza rasplata?", isVisual: true },
    //   ],
    // },
    // {
    //   id: 12,
    //   question: "Cand va ganditi la ceva amuzant:",
    //   answers: [
    //     { answer: "O imagine, de exemplu, ceva sau cineva pe care-l vedeti? ", isVisual: true },
    //     { answer: "Un sunet, de exemplu,  ceea ce spune  cineva sau ceva ce auziti?", isAudio: true },
    //     { answer: "O emotie, de exemplu, senzatia de amuzament, sau o senzatie de atingere fizica?", isKinestezic: true },
    //     { answer: "Un miros?", isSmell: true },
    //     { answer: "Un gust?", isTaste: true },
    //   ],
    // },
    // {
    //   id:13,
    //   question: "Cand va ganditi la un scop pentru viitor?:",
    //   answers: [
    //     { answer: "Ceea ce vedeti?", isVisual: true },
    //     { answer: "Ceea ce auziti?", isAudio: true },
    //     { answer: "Ceea ce simtiti?", isKinestezic: true },
    //     { answer: "Ceea ce mirositi?", isSmell: true },
    //     { answer: "Ceea ce gustati?", isTaste: true },
    //   ],
    // },
    // {
    //   id: 14,
    //   question: "Cand va ganditi la asteptarile dvs pentru urmatoarele zile, prima oara aveti:",
    //   answers: [
    //     { answer: "Un gust?", isTaste: true },
    //     { answer: "Imaginea a ceea ce vedeti intamplandu-se?", isVisual: true },
    //     { answer: "Ceea ce va spuneti?", isAudio: true },
    //     { answer: "Emotiile care insotesc asteptarile?", isKinestezic : true },
    //     { answer: "Un miros sau o aroma? ", isSmell: true },
    //   ],
    // },
    // {
    //   id: 15,
    //   question: "Cand va ganditi la ceea ce faceti in acest moment:",
    //   answers: [
    //     { answer: "Mirositi ceva?", isSmell: true },
    //     { answer: "Auziti ceva?", isAudio: true },
    //     { answer: "Gustati ceva?", isTaste: true },
    //     { answer: "Vedeti ceva?", isVisual : true },
    //     { answer: "Simtiti ceva?", isKinestezic: true },
    //   ],
    // },
];