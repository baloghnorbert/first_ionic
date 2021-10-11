export interface Player
{
	id: number;
    name: string;
    imageLink: string;
    club: string;
    birthday: string;
    birthPlace: string;
    weight: number;
    height: number;
    description: string
}

export const playersData: Player[] = 
[
    {
		id: 1,
        name: "Nikola Radosová",
        imageLink: "https://t.aimg.sk/magaziny/jQg6qSKSS-6QkmTfMGAKDg~Volejbalistka-Nikola-Radosov.jpg?t=LzB4ODU6MTA2N3g2ODUvZml0LWluLzE2MDB4OTAw&h=Wga6PqMq3hI4_zELe2x9rA&e=2145916800&v=3",
        club: "FATUM Nyíregyháza",
        birthday: "1992.05.03",
        birthPlace: "Bojnice, Czechoslovakia",
        weight: 66,
        height: 1.86,
        description: "Nikola Radosová (born 3 May 1992) is a Slovak female volleyball player. She is part of the Slovakia women's national volleyball team. She competed at the 2019 Women's European Volleyball Championship."
    },
    {
		id: 2,
        name: "Tanja Matic",
        imageLink: "https://1mcmvolley.hu/wp-content/uploads/2020/09//2019.10.24-2.jpg",
        club: "1. MCM-Diamant",
        birthday: "1983.03.21",
        birthPlace: "Subotica, Szerbia",
        weight: 57,
        height: 179,
        description: "Tanja Matic több száz szerb élvonalbeli mérkőzéssel a háta mögött, a patinás Szpartak Szabadka korábbi csapatkapitányaként 2015 nyarán érkezett hazánkba, és előbb két éven át játszott Békéscsabán, majd két szezont húzott le Nyíregyházán. A csabaiakkal mindent megnyert, amit csak itthon lehetett: a bajnokságban és a Magyar Kupában is két-két elsőséggel gazdagodott, emellett egy Közép-európai Liga elsőséget is begyűjtött. A nyíregyháziakkal két alkalommal hódította el a Magyar Kupa-trófeát, és 2018-ban, illetve 2019-ben is bejutott a bajnokság döntőjébe, ahol végül ezüstéremmel zárt. A tapasztalt röplabdázó ezek után, pályafutásának újabb állomásaként Kaposvárt választotta, így újra együtt dolgozhatott korábbi edzőjével, Sasa Nedeljkoviccsal. A 2019/2020-as évadban elért eredményekre mindenki büszke lehet, de mivel az ismert okok miatt váratlanul félbeszakadt, majd véget is ért a pontvadászat, mindenki kettőzött erővel szeretne majd újra munkába állni"
    },
    {
		id: 3,
        name: "Katarzyna Skowrońska-Dolata",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBrypz5TGmd6zLI19niR_UwuO_uYOKmBbRxg&usqp=CAU",
        club: "Barueri",
        birthday: "1983.06.30",
        birthPlace: "Varsó, Lengyelország",
        weight: 75,
        height: 188,
        description: "Katarzyna Ewa Skowrońska-Dolata egykori lengyel röplabdázó, a lengyel női röplabda-válogatott és az olasz Foppapedretti Bergamo klub tagja, kettős Európa-bajnok, olasz, török, kínai és azeri nemzeti bajnokság aranyérmese."
    },
    {
		id: 4,
        name: "Anna Werblińska",
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/6/68/Anna_Werbli%C5%84ska_%2812194794495%29.jpg",
        club: "KPS Chemik Police",
        birthday: "1984.05.14",
        birthPlace: "Świdnica, Lengyelország",
        weight: 69,
        height: 1.78,
        description: "Anna Werblińska lengyel röplabdázó, a lengyel női röplabda-válogatott tagja 2006–2016-ban, a Pekingi Olimpiai Játékok résztvevője, a 2009-es Európa-bajnokság bronzérmese és négyszeres lengyel bajnok."
    },
    {
		id: 5,
        name: "Agnieszka Bednarek-Kasza",
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bednarek-Pekin_2008.jpg/800px-Bednarek-Pekin_2008.jpg",
        club: "KPS Chemik Police",
        birthday: "1986.02.20",
        birthPlace: "Złotów, Poland",
        weight: 69,
        height: 1.85,
        description: "Agnieszka Bednarek-Kasza lengyel röplabdázó, a lengyel női röplabda-válogatott és a lengyel KPS Chemik Police klub tagja, a Peking 2008 olimpiai játékok résztvevője, a 2009-es Európa-bajnokság bronzérmese, Lengyel bajnok."
    },
    {
		id: 6,
        name: "Eleonora Dziękiewicz",
        imageLink: "https://dl.siatkarskaliga.pl/68831/inline/scalecrop=400x800/9c119d/Eleonora-Dziekiewicz.jpg",
        club: "MKS Dąbrowa Górnicza",
        birthday: "1978.10.25",
        birthPlace: "Gdańsk, Poland",
        weight: 78,
        height: 1.85,
        description: "Eleonora Dziękiewicz lengyel röplabdázó, a lengyel női röplabda-válogatott és a lengyel Tauron MKS Dąbrowa Górnicza klub tagja, a 2009-es Európa-bajnokság bronzérmese, háromszoros lengyel bajnok"
    },
    {
		id: 7,
        name: "Francesca Piccinini",
        imageLink: "https://i.ytimg.com/vi/LjRmWzwz-nk/hqdefault.jpg",
        club: "Futura Volley Busto Arsizio",
        birthday: "1979.01.10",
        birthPlace: "Massa, Italy",
        weight: 62,
        height: 1.84,
        description: "Francesca Piccinini olasz röplabdázó, aki négyszer képviselte Olaszországot a nyári olimpián. Tagja volt a női válogatottnak, amely aranyérmet nyert a 2002-es németországi világbajnokságon. 1995. június 10-én debütált Olaszországban az Egyesült Államok ellen."
    },
    {
		id: 8,
        name: "Jaqueline Carvalho",
        imageLink: "https://alchetron.com/cdn/jaqueline-carvalho-12811a8c-5f68-4099-8345-7d8a58f65dd-resize-750.jpeg",
        club: "Osasco Audax",
        birthday: "1983.12.31",
        birthPlace: "Recife, Brazil",
        weight: 70,
        height: 1.86,
        description: "Jaqueline Maria Pereira de Carvalho Endres brazil röplabdázó, a brazil csapat tagja, amely megnyerte az olimpiai játékokat Pekingben 2008 és London 2012-ben"
    },
    {
		id: 9,
        name: "Yelyzaveta Samadova",
        imageLink: "https://s21466.pcdn.co/wp-content/uploads/2018/10/YelyzavetaSamadovaofAzerbaijanspikesthebal-e1539604875126.jpg",
        club: "Leningradka Saint-Petersburg",
        birthday: "1995.03.03",
        birthPlace: "Kiev, Ukraine",
        weight: 71,
        height: 1.85,
        description: "Yelyzaveta Samadova-Ruban ukrán születésű azerbajdzsáni röplabdázó, aki jelenleg az olasz Pallavolo Scandicci és az azerbajdzsáni női röplabda-válogatottban játszik külső spikerként."
    },
    {
		id: 10,
        name: "Eda Erdem Dündar",
        imageLink: "https://i.ytimg.com/vi/EU3075haQeA/maxresdefault.jpg",
        club: "Beshiktas",
        birthday: "1987.06.22",
        birthPlace: "İstanbul, Turkey",
        weight: 73,
        height: 1.88,
        description: "Eda Erdem Dündar török ​​röplabdázó. 190 cm magas, és középső blokkolóként játszik. Erdem tömbmagassága 302 cm, tüske magassága 308 cm. Jelenleg a Fenerbahçe SK csapatában játszik, és mind a klub, mind a török ​​röplabda -válogatott kapitánya"
    },
	{
		id: 11,
        name: "Jamie Robbins",
        imageLink: "https://i1.wp.com/tstreetvolleyball.com/wp-content/uploads/2019/05/web-18-Shawn-Robbins-Jaime-8-HL5A8412-118-250x350.jpg?fit=250%2C350&ssl=1",
        club: "UCLA",
        birthday: "1998.02.19.",
        birthPlace: "",
        weight: 61,
        height: 1.85,
        description: "Jamie Robbins is one of the most beautiful volleyball players. She plays on the UCLA volleyball team. Her position is an outside hitter. Although we can’t consider her as a professional volleyball player, she is pretty popular with over 120k Instagram followers. "
    },
	{
		id: 12,
        name: "Zehra Güneş",
        imageLink: "https://s.yimg.com/ny/api/res/1.2/rzzeYSjj.dK9f9Sj_JHBnQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xMzMz/https://s.yimg.com/os/creatr-uploaded-images/2021-08/beb34af0-f434-11eb-bd5d-8a19df83047c",
        club: "Vakıfbank Istanbul",
        birthday: "1999.07.07",
        birthPlace: "Kartal, Törökország",
        weight: 88,
        height: 1.97,
        description: "Zehra Güneş török ​​röplabdázó. 1,97 m magas, 88 kg, középső blokkoló pozícióban játszik. Jelenleg a Vakıfbank Istanbul csapatában játszik, és a török ​​női röplabda-válogatott tagja."
    },
	{
		id: 13,
		name: "Klara Perić",
		imageLink: "https://volleybox.net/media/upload/players/1564002065lHm7A.png",
		club: "HAOK Mladost Zagreb",
		birthday: "1998.03.30",
		birthPlace: "Vinkovci, Croatia",
		weight: 71,
		height: 1.85,
		description: "Klara Perić horvát röplabdázó. Szetterként játszik a horvát HAOK Mladost klubban."
	},
	{
		id: 14,
		name: "Maria Stenzel",
		imageLink: "https://ocdn.eu/pulscms-transforms/1/yqXk9kqTURBXy8yYWQxYWVjMzQ2MWQ5OTkxZjE3YmNmMjFhMjFlYjhkMC5qcGVnk5UDAcyBzQu3zQaWkwmmZTk5N2EyBpMFzQSwzQJ2gaEwAQ/maria-stenzel.jpg",
		club: "Grot Budowlani Łódź",
		birthday: "1998.11.25",
		birthPlace: "Kościan, Poland",
		weight: 63,
		height: 167,
		description: "Maria Stenzel lengyel röplabdázó. A lengyel női röplabda -válogatott tagja. Részt vett a 2015 -ös FIVB röplabda lányok U18 -as világbajnokságán, a 2017 -es FIVB röplabda női U20 -as világbajnokságon és a 2018 -as FIVB röplabda Női Nemzetek Ligájában. Klubszinten a Grot Budowlani Łódź csapatában játszott."
	},
	{
		id: 15,
		name: "Mariana Costa",
		imageLink: "https://i.redd.it/smql3twwyxf61.jpg",
		club: "Olympiakos CFP",
		birthday: "1987.07.30",
		birthPlace: "Brazil",
		weight: 75,
		height: 1.81,
		description: "Mariana Andrade Costa, más néven Mari Paraíba brazil női röplabdázó. A brazíliai női röplabda-válogatott tagja. Klubszinten az Osasco Voleibol Clube, az EC Pinheiros és a Minas Tênis Clube csapatában játszott. Jelenleg az Olympiakos CFP-nél játszik"
	},
	{
		id: 16,
		name: "Samantha Bricio",
		imageLink: "https://www.ilawjournals.com/wp-content/uploads/2021/07/Samantha-Bricio.jpg",
		club: "Fenerbahçe",
		birthday: "1994.11.22",
		birthPlace: "Guadalajara, Mexikó",
		weight: 58,
		height: 1.88,
		description: "Mariana Andrade Costa, más néven Mari Paraíba brazil női röplabdázó. A brazíliai női röplabda-válogatott tagja. Klubszinten az Osasco Voleibol Clube, az EC Pinheiros és a Minas Tênis Clube csapatában játszott. Jelenleg az Olympiakos CFP-nél játszik"
	},
	{
		id: 17,
		name: "Winifer Fernández",
		imageLink: "https://www.ilawjournals.com/wp-content/uploads/2021/07/Samantha-Bricio.jpg",
		club: "Telekom Baku",
		birthday: "1995.01.06",
		birthPlace: "Santiago De Los Caballeros, Dominikai Köztársaság",
		weight: 62,
		height: 1.69,
		description: "Winifer María Fernández Pérez (born 6 January 1995) is a Dominican female volleyball player. With her club Mirador she competed at the 2015 FIVB Club World Championship. She became well known after a video and later some photos of her playing and training, and personal photos of her--some of them fake--went viral in July 2016. "
	},
	{
		id: 18,
		name: "Nataliya Goncharova",
		imageLink: "https://worldofvolley.com/wp-content/uploads/2021/05/unnamed-file-12921.jpg",
		club: "ROC",
		birthday: "1989.06.01",
		birthPlace: "Skole, Ukrajna",
		weight: 75,
		height: 1.89,
		description: "Nataliya Olegovna Goncharova, 2012 és 2016 között Obmochaeva, orosz női röplabdázó. 2010 -ig az ukrán női röplabda -válogatottban játszott, amikor az orosz női röplabda -válogatott tagja lett."
	},
	{
		id: 19,
		name: "Louisa Lippmann",
		imageLink: "https://i.pinimg.com/736x/5c/2a/29/5c2a2996ce6e78d5d97245411c15caef.jpg",
		club: "Lokomotiv Kaliningrad",
		birthday: "1994.09.23",
		birthPlace: "Herford, Németország",
		weight: 74,
		height: 1.91,
		description: "Louisa-Christin Lippmann német női röplabdázó. Külső ütőként vagy ellentétesen játszik, és több mint 100 alkalommal szerepel a német női röplabda-válogatottban. Klubszinten jelenleg a Kalinyingrádi Lokomotiv csapatában játszik."
	},
	{
		id: 20,
		name: "Vilmarie Mojica",
		imageLink: "https://volleybox.net/media/upload/players/1430051555SFXh6.jpg",
		club: "Bayamón",
		birthday: "1995.08.13",
		birthPlace: "Toa Baja, Puerto Rico",
		weight: 63,
		height: 1.80,
		description: "Vilmarie Mojica Puerto Rico-i röplabdázó, aki a női válogatott csapatkapitánya volt a 2008-as japán olimpiai kvalifikációs tornán. Ott a csapat a nyolcadik és az utolsó helyen végzett, miután vadkártyát kapott az eseményre, miután Peru és Kenya visszalépett."
	}

]