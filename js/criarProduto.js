const productsData = [
    {categoria: "box", SKU: 'box001',nome: "Box maternidade", preco: "R$330,00", imagem: "/imgs/produtos/FotosSite1.jpg", 
    description:"A Box contém: caixa MDF com tampa decorada e personalizada, balão bubble decorado e personalizado, pelúcia, lenço umedecido, sabonete barra, shampoo, condicionador (todos da marca Granado) e cartão personalizado.",
    imagensSecundarias:["/imgs/produtos/FotosSite1.jpg", "/imgs/produtos/FotosSite1-1.jpg","/imgs/produtos/FotosSite1-2.jpg"] },
    {categoria: "box", SKU: 'box002',nome: "Box Aniversário", preco: "R$199,00", imagem: "/imgs/produtos/FotosSite2.jpg", 
     description:"A Box contém: caixa MDF com tampa decorada e personalizada, balão bubble decorado e personalizado, flores, 2 chocolates talento, garrafa de água plástica personalizada em vinil com nome e cartão personalizado."
    },
    {categoria: "box", SKU: 'box003',nome: "Box Envelope", preco: "R$150,00", imagem: "/imgs/produtos/FotosSite3.jpg",
    description:"A box contém: Caixa de papel em formato carta decorada e personalizada, balão metalizado pequeno decorado e personalizado, flores, caneca e cartão personalizado."
    },
    {categoria: "box", SKU: 'box004',nome: "Box dia das mães", preco: "R$165,00", imagem: "/imgs/produtos/FotosSite4.jpg",
    description:"Caixa MDF ou papel cartão decorada e personalizada, balão bubble decorado e personalizado, mini balão metalizado estrela, espumante baby, taça de vidro, 4 bombons Ferrero Rocher ou mini cookies e cartão personalizado."
    },
    {categoria: "box", SKU: 'box005',nome: "Box Prata", preco: "R$270,00", imagem: "/imgs/produtos/FotosSite5.jpg",
    description:"A Box contém: caixa MDF com tampa decorada e aplique em MDF com tema escolhido, balão bubble decorado e personalizado, garrafa alumínio personalizada, caneca louça personalizada, 2 camisas personalizadas (feminina e masculina) e cartão personalizado."
    },
    {categoria: "ballon", SKU: 'bb006',nome: "Balão médio melancia", preco: "R$65,00", imagem: "/imgs/produtos/FotosSite6.jpg",
    description:"Balão de aproximadamente 60 cm de altura e 40 cm de diâmetro. Base 2 andares."
    },
    {categoria: "box", SKU: 'box007',nome: "Box Aniversário", preco: "R$280,00", imagem: "/imgs/produtos/FotosSite7.jpg",
    description:"A Box contém: caixa MDF com tampa decorada e personalizada, balão bubble decorado e personalizado, garrafinha com flores,  par de xícaras com pires, sachet de capuccino e de café com leite,  biscoito artesanal doce e cartão personalizado.",
    imagensSecundarias:["/imgs/produtos/FotosSite7.jpg", "/imgs/produtos/FotosSite7-1.jpg","/imgs/produtos/FotosSite7-2.jpg","/imgs/produtos/FotosSite7-3.jpg"] },
    {categoria: "box", SKU: 'box008',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite8.jpg",
    description:"A Box contém: Caixa MDF crua decorada e personalizada, balão bubble decorado e personalizado, flores, foto polaroide, bolo de cenoura com chocolate, pão integral fatiado, croassant, financier, geléia, nutella, salada de frutas, suco Prats ou Natural, sache cappuccino, provolone desidratado, cartão personalizado."
    },
    {categoria: "box", SKU: 'box009',nome: "Box Aniversário", preco: "R$220,00", imagem: "/imgs/produtos/FotosSite9.jpg" ,
    description:"A box contém: caixa papel cartão redonda decorada e personalizada, balão bubble decorado e personalizado, flores, biscoitos artesanais, sache de capuccino e café com leite, polenguinho e cartão personalizado."
    },
    {categoria: "box", SKU: 'box010',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite10.jpg",
    description:"A Box contém: Caixa MDF crua decorada e personalizada, balão bubble decorado e personalizado, flores, decorativo coração vazado, salada de frutas, frios fatiados, pães, croassant, ciabatta de azeitona, financier, Nutella, geléia, suco Natural, sachê capuccino tradicional, sachê capucino doce de leite e cartão personalizado."
    },
    {categoria: "box", SKU: 'box011',nome: "Box dia das mães", preco: "R$250,00", imagem: "/imgs/produtos/FotosSite11.jpg",
    description:"A box contém: caixa papel cartão redonda decorada e personalizada, balão bubble decorado e personalizado, flores, barra chocolate lindt, chocolates Rafaello e cartão personaliado.",
    imagensSecundarias:["/imgs/produtos/FotosSite11.jpg", "/imgs/produtos/FotosSite11-1.jpg","/imgs/produtos/FotosSite11-2.jpg"] },
    {categoria: "mugs", SKU: 'mug012',nome: "duo de xícaras com suporte", preco: "R$110,00", imagem: "/imgs/produtos/FotosSite12.jpg" },
    {categoria: "box", SKU: 'box013',nome: "Box envelope", preco: "R$120,00", imagem: "/imgs/produtos/FotosSite13.jpg",
    description:"A box contém: Caixa de papel em formato carta decorada e personalizada, balão metalizado pequeno decorado e personalizado, cerveja especial Blue Moon, caixa de Ferrero Rocher, taca de vidro e cartão personalizado."
    },
    {categoria: "box", SKU: 'box014',nome: "Box dia das mães", preco: "R$189,00", imagem: "/imgs/produtos/FotosSite14.jpg",
    description:"A Box contém: Caixa MDF crua decorada e personalizada, balão bubble decorado e personalizado, garrafinha personalizada com flores, caneca personalizada, macarrons e cartão personalizado."
    },
    {categoria: "box", SKU: 'box015',nome: "Box love", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite15.jpg",
    description:"Arranjo de rosa com decorativo vasado de coração, Ferrero Focher e balão metalizado decorado e personalizado."
    },
    {categoria:"box", SKU:'box016', nome:"Box Aniversário", preco:"R$310,00", imagem: "/imgs/produtos/FotosSite16.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite16.jpg","/imgs/produtos/FotosSite16-1.jpg","/imgs/produtos/FotosSite16-2.jpg","/imgs/produtos/FotosSite16-3.jpg"]},
    {categoria: "box", SKU: 'box017',nome: "Box dia das mães", preco: "R$280,00", imagem: "/imgs/produtos/FotosSite17.jpg",
    description:"A Box contém: caixa MDF com tampa decorada e personalizada, balão bubble decorado e personalizado, garrafinha com flores,  par de xícaras com pires, sachet de capuccino e de café com leite, suco Prats ou Natural, biscoito artesanal doce e cartão personalizado."
    },
    {categoria: "box", SKU: 'box018',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite18.jpg",
    description:"A Box contém: Caixa MDF crua decorada e personalizada, balão bubble decorado e personalizado, flores, pão fatiado, biscoitos caseiros, iogurtes, saladas de frutas, frios fatiados, nutella, bolo de cenoura, sucos Prats, polenguinhos e cartão personalizado."
    },
    {categoria: "box", SKU: 'box019',nome: "caixa acrílica com balão", preco: "R$115,00", imagem: "/imgs/produtos/FotosSite19.jpg",
    description:"Caixa acrílica decorada e personalizada com caneca personalizada, bombons Ferrero Rocher e balão metalizado personalizado."
    },
    {categoria: "box", SKU: 'box020',nome: "caixa acrílica", preco: "R$90,00", imagem: "/imgs/produtos/FotosSite20.jpg" ,
    description:"Caixa acrílica decorada e personalizada com caneca personalizada e bombons Ferrero Rocher."
    },
    {categoria: "ballon", SKU: 'bb021',nome: "bubble de mesa grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite21.jpg",
    description:"Balão de aproximadamente 60 cm de altura e 60 cm de diâmetro. Base 2 andares."
    },
    {categoria: "box", SKU: 'box022',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite22.jpg",
    description:"A Box contém: Caixa MDF crua decorada e personalizada, balão bubble decorado e personalizado, flores, suco Prats, capuccino, água de côco, fatias de bolo cenoura com chocolate, pão ciabatta rústica de azeitonas, pão fatiado especial rústico, croassant, biscoitos artesanais, presunto e mussarela, geleia de damasco, Nutella, salada de frutas, Donuts, foto Polaroid e cartão personalizado."
    },
    {categoria: "ballon", SKU: 'bb024',nome: "Bubble de mesa pequeno", preco: "R$45,00", imagem: "/imgs/produtos/FotosSite24.jpg",
    description:"Balão de aproximadamente 40 cm de altura e 30 cm de diâmetro. Base 1 andar."
    },
    {categoria: "box", SKU: 'box025',nome: "Box Aniversário", preco: "R$210,00", imagem: "/imgs/produtos/FotosSite25.jpg",
    description:"A box contém: caixa papel cartão redonda decorada e personalizada, balão bubble decorado e personalizado, biscoitos artesanais, 2 barras de chocolate, mini cuador de café com mini xícara esmaltada e cartão personalizado."
    },
    {categoria: "ballon", SKU: 'bb026',nome: "bubble de mesa grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite26.jpg", 
    description:"Balão de aproximadamente 60 cm de altura e 60 cm de diâmetro. Base 2 andares e 3 clusters."
    },
    {categoria: "box", SKU: 'box027',nome: "Box Aniversário", preco: "R$189,00", imagem: "/imgs/produtos/FotosSite27.jpg" },
    {categoria: "ballon", SKU: 'bb028',nome: "Bubble médio", preco: "R$65,00", imagem: "/imgs/produtos/FotosSite28.jpg" },
    {categoria: "box", SKU: 'box029',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite29.jpg" },
    {categoria: "box", SKU: 'box030',nome: "caixa acrílica", preco: "R$105,00", imagem: "/imgs/produtos/FotosSite30.jpg" },
    {categoria: "ballon", SKU: 'bb031',nome: "Bubble grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite31.jpg" },
    {categoria: "box", SKU: 'box032',nome: "box romântica", preco: "R$410,00", imagem: "/imgs/produtos/FotosSite32.jpg" },
    {categoria: "box", SKU: 'box033',nome: "box coorporativo", preco: "R$199,00", imagem: "/imgs/produtos/FotosSite33.jpg" },
    {categoria: "box", SKU: 'box034',nome: "box Minnie", preco: "R$240,00", imagem: "/imgs/produtos/FotosSite34.jpg" },
    {categoria: "box", SKU: 'box035',nome: "box Orquídea", preco: "R$190,00", imagem: "/imgs/produtos/FotosSite35.jpg" },
    {categoria: "box", SKU: 'box036',nome: "Box coração", preco: "R$220,00", imagem: "/imgs/produtos/FotosSite36.jpg" },
    {categoria: "box", SKU: 'box037',nome: "Envelope Heineken", preco: "R$90,00", imagem: "/imgs/produtos/FotosSite37.jpg" },
    {categoria: "box", SKU: 'box038',nome: "Box corona", preco: "R$320,00", imagem: "/imgs/produtos/FotosSite38.jpg" },
    {categoria: "box", SKU: 'box039',nome: "Envelope cerveja especial", preco: "R$90,00", imagem: "/imgs/produtos/FotosSite39.jpg" },
    {categoria: "box", SKU: 'box040',nome: "Box bubble coração", preco: "R$140,00", imagem: "/imgs/produtos/FotosSite40.jpg" },
    {categoria: "box", SKU: 'box041',nome: "Balde Casal", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite41.jpg" },
    {categoria: "box", SKU: 'box042',nome: "Balde cervejeiro", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite42.jpg" },
    {categoria: "box", SKU: 'box043',nome: "Box grande amor", preco: "R$340,00", imagem: "/imgs/produtos/FotosSite43.jpg" },
    {categoria: "box", SKU: 'box044',nome: "Box vinho", preco: "R$120,00", imagem: "/imgs/produtos/FotosSite44.jpg" },
    {categoria: "box", SKU: 'box045',nome: "Box Florida Aniversário", preco: "R$240,00", imagem: "/imgs/produtos/FotosSite45.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite45.jpg", "/imgs/produtos/FotosSite45-1.jpg","/imgs/produtos/FotosSite45-2.jpg","/imgs/produtos/FotosSite45-3.jpg"] },
    {categoria: "box", SKU: 'box046',nome: "Box fechada com Visor", preco: "R$140,00", imagem: "/imgs/produtos/FotosSite46.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite46.jpg", "/imgs/produtos/FotosSite46-1.jpg","/imgs/produtos/FotosSite46-2.jpg"] },
    {categoria: "ballon", SKU: 'bb047',nome: "Balão Aniversário tamanho P", preco: "R$45,00", imagem: "/imgs/produtos/FotosSite47.jpg" },
    {categoria: "ballon", SKU: 'bb048',nome: "Balão Aniversário tamanho P", preco: "R$45,00", imagem: "/imgs/produtos/FotosSite48.jpg" },
    {categoria: "ballon", SKU: 'bb049',nome: "Topo de bolo grande", preco: "R$25,00", imagem: "/imgs/produtos/FotosSite49.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite49.jpg", "/imgs/produtos/FotosSite49-1.jpg"] },
    {categoria:"box", SKU:'box050', nome:"Box café da manhã", preco:"R$350,00", imagem: "/imgs/produtos/FotosSite50.jpg"},
    {categoria:"outros", SKU:'box051', nome:"tubolatas unidade", preco:"R$12,00", imagem: "/imgs/produtos/FotosSite51.jpg"},
    {categoria:"ballon", SKU:'bb052', nome:"Balão Bubble joaninha", preco:"R$65,00", imagem: "/imgs/produtos/FotosSite52.jpg"},
    {categoria:"box", SKU:'box053', nome:"Box café da manhã", preco:"R$280,00", imagem: "/imgs/produtos/FotosSite53.jpg"},
    {categoria:"box", SKU:'box054', nome:"Box Aniversário", preco:"R$210,00", imagem: "/imgs/produtos/FotosSite54.jpg"},
    {categoria: "box", SKU: 'box055',nome: "Box Sucesso", preco: "R$230,00", imagem: "/imgs/produtos/FotosSite55.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite55.jpg", "/imgs/produtos/FotosSite55-1.jpg","/imgs/produtos/FotosSite55-2.jpg","/imgs/produtos/FotosSite55-3.jpg"] },
    {categoria:"box", SKU:'box056', nome:"Box namorados vinho", preco:"R$250,00", imagem: "/imgs/produtos/FotosSite56.jpg"},
    {categoria:"ballon", SKU:'bb057', nome:"Bubble tamanho G", preco:"R$75,00", imagem: "/imgs/produtos/FotosSite57.jpg"},
    {categoria:"box", SKU:'box058', nome:"Box Guloseimas", preco:"R$190,00", imagem: "/imgs/produtos/FotosSite58.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite58.jpg","/imgs/produtos/FotosSite58-1.jpg","/imgs/produtos/FotosSite58-2.jpg"]},
    {categoria:"box", SKU:'box059', nome:"Box temática Harry Potter", preco:"R$150,00", imagem: "/imgs/produtos/FotosSite59.jpg"},
    {categoria:"box", SKU:'box060', nome:"Box de Vinho", preco:"R$290,00", imagem: "/imgs/produtos/FotosSite60.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite60.jpg","/imgs/produtos/FotosSite60-1.jpg","/imgs/produtos/FotosSite60-2.jpg","/imgs/produtos/FotosSite60-3.jpg"]},
    {categoria:"box", SKU:'box061', nome:"Box futebol - Galo", preco:"R$280,00", imagem: "/imgs/produtos/FotosSite61.jpg"},
    {categoria:"box", SKU:'box062', nome:"Box Cerveja Heineken", preco:"R$220,00", imagem: "/imgs/produtos/FotosSite62.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite62.jpg","/imgs/produtos/FotosSite62-1.jpg"]},
    {categoria:"box", SKU:'box063', nome:"Box Formatura", preco:"R$260,00", imagem: "/imgs/produtos/FotosSite63.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite63.jpg","/imgs/produtos/FotosSite63-1.jpg","/imgs/produtos/FotosSite63-2.jpg"]},
    {categoria: "ballon", SKU: 'bb064',nome: "Balão dourado", preco: "R$65,00", imagem: "/imgs/produtos/FotosSite64.jpg" },
    {categoria: "box", SKU: 'box065',nome: "Box Aniversário", preco: "R$170,00", imagem: "/imgs/produtos/FotosSite65.jpg" },
    {categoria:"ballon", SKU:'bb066', nome:"Balão Florido", preco:"R$45,00", imagem: "/imgs/produtos/FotosSite66.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite66.jpg","/imgs/produtos/FotosSite66-1.jpg"]},
    {categoria:"box", SKU:'box067', nome:"Box biscoitos artesanais", preco:"R$190,00", imagem: "/imgs/produtos/FotosSite67.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite67.jpg","/imgs/produtos/FotosSite67-1.jpg","/imgs/produtos/FotosSite67-2.jpg","/imgs/produtos/FotosSite67-3.jpg"]},
    {categoria:"box", SKU:'box068', nome:"Box café da manhã", preco:"R$380,00", imagem: "/imgs/produtos/FotosSite68.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite68.jpg","/imgs/produtos/FotosSite68-1.jpg","/imgs/produtos/FotosSite68-2.jpg","/imgs/produtos/FotosSite68-3.jpg"]},
    {categoria:"box", SKU:'box069', nome:"Box Aniversário", preco:"R$230,00", imagem: "/imgs/produtos/FotosSite69.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite69.jpg","/imgs/produtos/FotosSite69-1.jpg","/imgs/produtos/FotosSite69-2.jpg","/imgs/produtos/FotosSite69-3.jpg"]},
    {categoria:"box", SKU:'box070', nome:"Box Aniversário", preco:"R$270,00", imagem: "/imgs/produtos/FotosSite70.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite70.jpg","/imgs/produtos/FotosSite70-1.jpg","/imgs/produtos/FotosSite70-2.jpg"]},
    {categoria:"box", SKU:'box071', nome:"Box café da manhã", preco:"R$390,00", imagem: "/imgs/produtos/FotosSite71.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite71.jpg","/imgs/produtos/FotosSite71-1.jpg","/imgs/produtos/FotosSite71-2.jpg","/imgs/produtos/FotosSite71-3.jpg"]},
    {categoria:"mugs", SKU:'mug072', nome:"Caneca coração + (chocolate ou cookies) + foto", preco:"R$94,00", imagem: "/imgs/produtos/FotosSite72.jpg"},
    {categoria:"mugs", SKU:'mug073', nome:"Caneca branca personalizada com cookies", preco:"R$75,00", imagem: "/imgs/produtos/FotosSite73.jpg"},
    {categoria:"box", SKU:'box074', nome:"Box Envelope Raffaelo", preco:"R$120,00", imagem: "/imgs/produtos/FotosSite74.jpg"},
    {categoria:"box", SKU:'box075', nome:"Box Aniversário", preco:"R$230,00", imagem: "/imgs/produtos/FotosSite75.jpg"},
    {categoria:"box", SKU:'box076', nome:"Balde cerveja", preco:"R$250,00", imagem: "/imgs/produtos/FotosSite76.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite76.jpg","/imgs/produtos/FotosSite76-1.jpg","/imgs/produtos/FotosSite76-2.jpg","/imgs/produtos/FotosSite76-3.jpg"]},
    {categoria:"ballon", SKU:'bb077', nome:"Balão de Mesa M", preco:"R$65,00", imagem: "/imgs/produtos/FotosSite77.jpg"},
    {categoria:"box", SKU:'box078', nome:"Box Coorporativo", preco:"R$270,00", imagem: "/imgs/produtos/FotosSite78.jpg"},
    {categoria:"box", SKU:'box079', nome:"Box Café da manhã", preco:"R$350,00", imagem: "/imgs/produtos/FotosSite79.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite79.jpg","/imgs/produtos/FotosSite79-1.jpg"]},
    {categoria:"ballon", SKU:'bb080', nome:"Balão de mesa P", preco:"R$45,00", imagem: "/imgs/produtos/FotosSite80.jpg"},
    {categoria:"box", SKU:'box081', nome:"Box Romântica", preco:"R$245,00", imagem: "/imgs/produtos/FotosSite81.jpg"},
    {categoria:"box", SKU:'box082', nome:"Box aniversário", preco:"R$200,00", imagem: "/imgs/produtos/FotosSite82.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite82.jpg","/imgs/produtos/FotosSite82-1.jpg"]},
    {categoria:"box", SKU:'box083', nome:"Box aniversário", preco:"R$220,00", imagem: "/imgs/produtos/FotosSite83.jpg"},
    {categoria:"ballon", SKU:'bb084', nome:"Balão de Mesa M", preco:"R$65,00", imagem: "/imgs/produtos/FotosSite84.jpg"},
    {categoria:"box", SKU:'box085', nome:"Box aniversário", preco:"R$330,00", imagem: "/imgs/produtos/FotosSite85.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite85.jpg","/imgs/produtos/FotosSite85-1.jpg"]},
    {categoria:"box", SKU:'box086', nome:"Box Gin", preco:"R$210,00", imagem: "/imgs/produtos/FotosSite86.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite86.jpg","/imgs/produtos/FotosSite86-1.jpg"]},
    {categoria:"ballon", SKU:'bb087', nome:"Balão de Mesa P", preco:"R$45,00", imagem: "/imgs/produtos/FotosSite87.jpg"},
    {categoria:"ballon", SKU:'bb088', nome:"Topo de bolo", preco:"R$25,00", imagem: "/imgs/produtos/FotosSite88.jpg"},
    {categoria:"ballon", SKU:'bb089', nome:"Balão de Mesa G", preco:"R$75,00", imagem: "/imgs/produtos/FotosSite89.jpg"},
    {categoria:"ballon", SKU:'bb090', nome:"Balão de Mesa numérico", preco:"R$45,00", imagem: "/imgs/produtos/FotosSite90.jpg"},
    {categoria:"box", SKU:'box091', nome:"Mini box", preco:"R$180,00", imagem: "/imgs/produtos/FotosSite91.jpg"},
    {categoria:"ballon", SKU:'bb092', nome:"Balão de Mesa M", preco:"R$65,00", imagem: "/imgs/produtos/FotosSite92.jpg"},
    {categoria:"box", SKU:'box093', nome:"Box aniversário", preco:"R$270,00", imagem: "/imgs/produtos/FotosSite93.jpg"},
    {categoria:"box", SKU:'box094', nome:"Box aniversário", preco:"R$260,00", imagem: "/imgs/produtos/FotosSite94.jpg"},
    {categoria:"box", SKU:'box095', nome:"Box dia das mães", preco:"R$230,00", imagem: "/imgs/produtos/FotosSite95.jpg"},
    {categoria:"ballon", SKU:'bb096', nome:"Balão de Mesa M", preco:"R$65,00", imagem: "/imgs/produtos/FotosSite96.jpg"},
    {categoria:"box", SKU:'box097', nome:"Box aniversário", preco:"R$250,00", imagem: "/imgs/produtos/FotosSite97.jpg"},
    {categoria:"ballon", SKU:'bb098', nome:"Torre de balões", preco:"R$80,00", imagem: "/imgs/produtos/FotosSite98.jpg"},
    {categoria:"box", SKU:'box099', nome:"Balde de cerveja", preco:"R$180,00", imagem: "/imgs/produtos/FotosSite99.jpg"},
    {categoria:"box", SKU:'box100', nome:"Box Café da manhã", preco:"R$320,00", imagem: "/imgs/produtos/FotosSite100.jpg"},
    {categoria:"box", SKU:'box101', nome:"Box envelope", preco:"R$120,00", imagem: "/imgs/produtos/FotosSite101.jpg"},
    {categoria:"box", SKU:'box102', nome:"Box orquídea", preco:"R$270,00", imagem: "/imgs/produtos/FotosSite102.jpg"},
    {categoria:"box", SKU:'box103', nome:"Mini Box", preco:"R$170,00", imagem: "/imgs/produtos/FotosSite103.jpg"},
    {categoria:"ballon", SKU:'bb104', nome:"Balão de Mesa M", preco:"R$75,00", imagem: "/imgs/produtos/FotosSite104.jpg"},
    {categoria:"ballon", SKU:'bb105', nome:"Balão de Mesa M", preco:"R$65,00", imagem: "/imgs/produtos/FotosSite105.jpg"},
    {categoria:"box", SKU:'box106', nome:"Box envelope", preco:"R$130,00", imagem: "/imgs/produtos/FotosSite106.jpg"},
    {categoria:"box", SKU:'box107', nome:"Box coorporativo", preco:"R$340,00", imagem: "/imgs/produtos/FotosSite107.jpg"},
    {categoria:"ballon", SKU:'bb108', nome:"Balão no palito", preco:"R$45,00", imagem: "/imgs/produtos/FotosSite108.jpg"},
    {categoria:"box", SKU:'box109', nome:"Box aniversário", preco:"R$190,00", imagem: "/imgs/produtos/FotosSite109.jpg"},
    {categoria:"box", SKU:'box110', nome:"Box aniversário", preco:"R$250,00", imagem: "/imgs/produtos/FotosSite110.jpg"},
    {categoria:"box", SKU:'box111', nome:"Box aniversário", preco:"R$180,00", imagem: "/imgs/produtos/FotosSite111.jpg"},
    {categoria:"box", SKU:'box112', nome:"Box maternidade", preco:"R$330,00", imagem: "/imgs/produtos/FotosSite112.jpg"},
    {categoria:"box", SKU:'box113', nome:"Box Café da manhã", preco:"R$350,00", imagem: "/imgs/produtos/FotosSite113.jpg"},
    {categoria:"box", SKU:'box114', nome:"Box aniversário", preco:"R$270,00", imagem: "/imgs/produtos/FotosSite114.jpg"},
    {categoria:"box", SKU:'box115', nome:"Box envelope", preco:"R$90,00", imagem: "/imgs/produtos/FotosSite115.jpg"},
    {categoria:"box", SKU:'box116', nome:"Box aniversário", preco:"R$330,00", imagem: "/imgs/produtos/FotosSite116.jpg"},
    {categoria:"ballon", SKU:'bb117', nome:"Balão de Mesa M", preco:"R$50,00", imagem: "/imgs/produtos/FotosSite117.jpg"},
    {categoria:"box", SKU:'box118', nome:"Mini Box dia das mães ", preco:"R$130,00", imagem: "/imgs/produtos/FotosSite118.jpg"},
    {categoria:"box", SKU:'box119', nome:"Box Café da manhã", preco:"R$350,00", imagem: "/imgs/produtos/FotosSite119.jpg"},

    // Adicionar produtos
];

function filtrarProdutos() {
  const categoriaSelecionada = document.querySelector('input[name="category"]:checked').value;
  const productsContainer = document.querySelector('#products-container');
  const produtos = productsContainer.querySelectorAll('.row');

  produtos.forEach(produto => {
    const categoriaProduto = produto.querySelector('.product-categoria').textContent;

    if (categoriaSelecionada === 'all' || categoriaSelecionada === categoriaProduto) {
      produto.style.display = 'grid';
    } else {
      produto.style.display = 'none';
    }
  });
}

const radios = document.querySelectorAll('input[name="category"]');
radios.forEach(radio => {
  radio.addEventListener("change", filtrarProdutos);
});

function createProducts() {
    const productsContainer = document.querySelector('#products-container');
    const productTemplate = document.querySelector('#product-template');

    productsData.forEach(product => {
        const productElement = productTemplate.content.cloneNode(true);

        productElement.querySelector(".product-categoria").textContent = product.categoria;
        productElement.querySelector(".product-name").textContent = product.nome;
        productElement.querySelector(".product-price").textContent = product.preco;
        productElement.querySelector(".product-sku").textContent = product.SKU;
        const productImage = productElement.querySelector("img");
        productImage.src = product.imagem;
        // // Abrir modal
        // productImage.addEventListener ("click", () =>{
        //     const modalImage = document.querySelector('#modal-img');
        //     modalImage.src = product.imagem;
        //     const modal = document.querySelector(".modal");
        //     modal.classList.add("modal-active");
        // });
        // // Fechar modal
        // const modalCloseButton = document.querySelector('#bt-close');
        // modalCloseButton.addEventListener("click", () => {
        // const modal = document.querySelector(".modal");
        // modal.classList.remove("modal-active");
        // });     

        // Adiciona evento de clique ao produto
        productElement.querySelector(".row").addEventListener("click", () => {
            // Armazena as informações do produto clicado em sessionStorage
            sessionStorage.setItem("productDetails", JSON.stringify(product));
            // Redireciona para a página "detalhes.html"
            window.location.href = "detalhes.html";
        });  

        productsContainer.appendChild(productElement);
    });
}
createProducts();

const productDetails = JSON.parse(sessionStorage.getItem("productDetails"));
const productImages = document.querySelector('#productImage');
const smallImg = document.getElementsByClassName('small-imgs');

// Define a imagem principal
productImages.src = productDetails.imagem;

// Adicione os eventos de clique para as miniaturas de imagem
for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        productImages.src = smallImg[i].src;
    }
}

