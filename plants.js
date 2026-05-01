// ============================================================
//  BANCO DE DADOS DE PLANTAS MEDICINAIS
// ============================================================

const plants = [
    {
    name: "Alecrim",
    scientific: "Salvia rosmarinus",
    tags: ["Circulatório", "Estimulante", "Antimicrobiano"],
    shortUse: "Estimula a memória, melhora a circulação e alivia dores musculares.",
    uses: "O alecrim é um estimulante do sistema nervoso central, reconhecido por melhorar a memória e a concentração. Melhora a circulação sanguínea periférica, sendo útil em casos de hipotensão leve. Possui potente ação antimicrobiana e antioxidante. Usado externamente em forma de banhos e massagens para aliviar dores musculares e reumatismo.",
    how: "Chá: 1 colher de chá das folhas para 200ml de água quente. Infusão por 10 minutos. Tomar 1 a 2 xícaras ao dia. Para uso externo: ferver os galhos em água e usar a infusão morna para banhos nos membros ou compressas.",
    warning: "⚠️ Contraindicado durante a gravidez em doses medicinais elevadas. Hipertensos devem usar com cautela. Não confundir com quantidade culinária.",
    photo: "https://safraviva.com.br/wp-content/uploads/2022/04/alecrim0.jpg"
  },
    {
    name: "Boldo",
    scientific: "Plectranthus barbatus",
    tags: ["Digestivo", "Hepático", "Colerético"],
    shortUse: "Protege o fígado, combate indigestão, ressaca e má digestão de gorduras.",
    uses: "O boldo-do-brasil é uma das plantas mais populares para problemas hepáticos e digestivos. Estimula a produção e o fluxo de bile, facilitando a digestão de gorduras. Auxilia na recuperação do fígado após ingestão excessiva de álcool ou alimentos gordurosos. Tem ação antiespasmódica e alivia gases e cólicas intestinais.",
    how: "Chá: 2 folhas médias frescas (ou 1 colher de chá das secas) para 200ml de água quente. Infusão de 5 a 8 minutos. Tomar 1 xícara antes das refeições principais ou após excesso alimentar. Não ferver as folhas — apenas infusionar.",
    warning: "⚠️ Uso prolongado pode ser hepatotóxico. Não usar durante a gravidez. Pessoas com cálculos biliares devem consultar médico. Usar por no máximo 3 semanas seguidas.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Plectranthus_barbatus2.jpg/800px-Plectranthus_barbatus2.jpg"
  },
  {
    name: "Hortelã",
    scientific: "Mentha piperita",
    tags: ["Digestivo", "Descongestionante", "Analgésico"],
    shortUse: "Alivia dores de cabeça, náuseas, sinusite e problemas digestivos.",
    uses: "A hortelã-pimenta tem múltiplos usos. Internamente, alivia náuseas, gases, cólicas intestinais e diarreia. O mentol presente em suas folhas tem ação analgésica e descongestionante, sendo útil em casos de sinusite, gripe e dores de cabeça tensionais (aplicação tópica nas têmporas). Também refresca o hálito e estimula a produção de bile.",
    how: "Chá: 1 colher de sobremesa das folhas para 150ml de água quente. Infusão de 5 minutos, tampar. Tomar após as refeições para digestão. Para dor de cabeça: aplique óleo essencial ou folhas amassadas diluídas nas têmporas e testa.",
    warning: "⚠️ Não usar o óleo essencial puro na pele ou mucosas. Evitar dar chá de hortelã-pimenta a crianças menores de 2 anos.",
    photo: "https://ciclovivo.com.br/wp-content/uploads/2020/06/mint-5229226_1280-1024x680.jpg"
  },
  {
    name: "Marcela",
    scientific: "Achyrocline satureioides",
    tags: ["Digestivo", "Anti-inflamatório", "Calmante"],
    shortUse: "Alivia problemas digestivos, cólicas, gripes e age como calmante suave.",
    uses: "A marcela é uma das plantas medicinais mais tradicionais do sul do Brasil. É amplamente usada para aliviar cólicas intestinais, gases, indigestão e náuseas. Possui ação anti-inflamatória, antiespasmódica e calmante suave. Também é utilizada no tratamento de gripes, resfriados e bronquite, além de auxiliar na redução da febre.",
    how: "Chá das flores secas: 1 colher de sopa para 200ml de água quente. Infusão de 10 minutos, tampar e coar. Tomar 2 a 3 xícaras ao dia, de preferência após as refeições. Pode ser combinada com erva-doce para potencializar o efeito digestivo.",
    warning: "⚠️ Contraindicada durante a gravidez. Pessoas com alergia a plantas da família Asteraceae devem evitar. Não usar por períodos prolongados sem orientação.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Achyrocline_satureioides_-_Marcela.jpg/800px-Achyrocline_satureioides_-_Marcela.jpg"
  },
  {
    name: "Erva-cidreira",
    scientific: "Melissa officinalis",
    tags: ["Calmante", "Digestivo", "Antiviral"],
    shortUse: "Reduz ansiedade, insônia leve e distúrbios digestivos nervosos.",
    uses: "A erva-cidreira (melissa) é uma das plantas calmantes mais tradicionais da medicina popular brasileira. Age no sistema nervoso central, reduzindo ansiedade, irritabilidade e promovendo um sono tranquilo. Também auxilia na digestão quando os problemas têm origem emocional (gastrite nervosa, cólicas por tensão). Possui ação antiviral comprovada contra o vírus do herpes labial.",
    how: "Chá das folhas frescas ou secas: 2 colheres de sopa para 200ml de água quente. Infusão por 8 minutos, tampar para não perder os óleos essenciais. Tomar 1 a 3 xícaras ao dia, de preferência à noite.",
    warning: "⚠️ Pode potencializar o efeito de medicamentos sedativos. Gestantes devem consultar um médico antes do uso.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Melissa_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-092.jpg/800px-Melissa_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-092.jpg"
  },
  {
    name: "Camomila",
    scientific: "Matricaria chamomilla",
    tags: ["Calmante", "Digestivo", "Anti-inflamatório"],
    shortUse: "Acalma o sistema nervoso, alivia cólicas e melhora a digestão.",
    uses: "A camomila é amplamente usada para acalmar a ansiedade, aliviar o estresse e melhorar a qualidade do sono. Também é eficaz contra cólicas intestinais, gases, gastrite leve e processos inflamatórios. Usada topicamente, alivia irritações de pele e conjuntivite.",
    how: "Chá das flores secas: 1 colher de sopa para 200ml de água quente. Deixar em infusão por 10 minutos, tampar e coar. Tomar 2 a 3 xícaras ao dia. Para uso na pele, usar a infusão fria como compressas.",
    warning: "⚠️ Pessoas alérgicas a plantas da família Asteraceae (como crisântemo) podem ter reações. Evitar uso prolongado sem orientação.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Matricaria_IMG_4553.jpg/800px-Matricaria_IMG_4553.jpg"
  },
  {
    name: "Gengibre",
    scientific: "Zingiber officinale",
    tags: ["Anti-inflamatório", "Digestivo", "Imunidade"],
    shortUse: "Combate náuseas, fortalece a imunidade e tem ação anti-inflamatória.",
    uses: "O gengibre é uma das plantas medicinais mais pesquisadas do mundo. É altamente eficaz contra náuseas (inclusive as da gravidez e do enjoo de movimento), melhora a digestão, combate inflamações e fortalece o sistema imunológico. Estudos mostram benefícios no alívio de dores osteoarticulares e na redução de marcadores inflamatórios.",
    how: "Chá: ferver 3 a 4 rodelas de gengibre fresco (ou 1 colher de chá do seco) em 300ml de água por 5 minutos. Coar, adoçar com mel e acrescentar limão a gosto. Tomar 2 a 3 vezes ao dia, principalmente em gripes e resfriados.",
    warning: "⚠️ Pode interagir com anticoagulantes (varfarina). Em doses altas pode causar refluxo. Gestantes devem limitar a 1g/dia e consultar médico.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fresh_Ginger_001.jpg/800px-Fresh_Ginger_001.jpg"
  },
  {
    name: "Babosa (Aloe Vera)",
    scientific: "Aloe vera",
    tags: ["Cicatrizante", "Anti-inflamatório", "Pele"],
    shortUse: "Cicatriza queimaduras, hidrata a pele e alivia irritações cutâneas.",
    uses: "A babosa é amplamente usada externamente para tratar queimaduras solares, pequenas feridas, dermatites e acne. O gel de suas folhas tem propriedades cicatrizantes, hidratantes e anti-inflamatórias comprovadas. Internamente (sumo diluído), é usada para gastrite e como laxante suave, embora o uso interno requeira mais cautela.",
    how: "Uso externo: cortar uma folha, retirar o gel translúcido do interior e aplicar diretamente na área afetada 2 a 3 vezes ao dia. Para queimaduras solares: refrigerar o gel antes de aplicar para efeito refrescante adicional.",
    warning: "⚠️ O látex amarelo da casca (aloína) é irritante e não deve ser usado. Uso interno deve ser feito apenas com produtos padronizados e por curtos períodos. Evitar uso interno na gravidez.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/800px-Aloe_vera_flower_inset.png"
  },
  {
    name: "Calêndula",
    scientific: "Calendula officinalis",
    tags: ["Cicatrizante", "Anti-inflamatório", "Pele"],
    shortUse: "Cicatriza feridas, alivia inflamações da pele e mucosas.",
    uses: "A calêndula é uma das melhores plantas para cuidados com a pele. Suas flores possuem potente ação cicatrizante, anti-inflamatória e antifúngica. É usada em feridas, escaras, dermatites, candidíase de pele, assaduras em bebês e irritações das mucosas bucal e vaginal. Internamente, auxilia em úlceras gástricas e inflamações do trato digestivo.",
    how: "Uso externo: preparar um chá concentrado das flores (2 colheres para 200ml de água), deixar esfriar e usar em compressas ou lavagens. Cremes e pomadas de calêndula são amplamente disponíveis em farmácias e lojas de produtos naturais.",
    warning: "⚠️ Pessoas alérgicas à família Asteraceae devem fazer teste na pele antes do uso. Evitar uso interno durante a gravidez.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Calendula_officinalis-2009-03-08.jpg/800px-Calendula_officinalis-2009-03-08.jpg"
  },
  {
    name: "Capim-limão",
    scientific: "Cymbopogon citratus",
    tags: ["Calmante", "Digestivo", "Analgésico"],
    shortUse: "Reduz ansiedade, alivia dores de cabeça e problemas digestivos.",
    uses: "O capim-limão (ou capim-santo) é muito usado na medicina popular brasileira como calmante suave, auxiliando no controle da ansiedade e na melhora do sono. Alivia dores de cabeça, cólicas intestinais e gases. Possui ação antiespasmódica, anti-inflamatória leve e antimicrobiana.",
    how: "Chá: 2 colheres de sopa das folhas frescas picadas (ou 1 colher das secas) para 200ml de água quente. Infusão de 10 minutos, tampar. Tomar 2 a 3 xícaras ao dia. Combina bem com hortelã e erva-cidreira.",
    warning: "⚠️ Em doses muito elevadas pode ter efeito hipotensivo. Uso durante gravidez deve ser moderado e sempre consultando o médico.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cymbopogon_citratus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-193.jpg/800px-Cymbopogon_citratus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-193.jpg"
  },
  {
    name: "Eucalipto",
    scientific: "Eucalyptus globulus",
    tags: ["Respiratório", "Descongestionante", "Antimicrobiano"],
    shortUse: "Alivia gripes, resfriados, bronquite e congestão nasal.",
    uses: "O eucalipto é excelente para problemas do sistema respiratório. Suas folhas contêm eucaliptol (cineol), um potente expectorante e descongestionante. Indicado para gripes, resfriados, sinusite, bronquite e asma leve. A inalação do vapor alivia imediatamente a congestão das vias aéreas. Possui também forte ação antimicrobiana.",
    how: "Inalação: ferver 1 litro de água com um punhado de folhas frescas ou 5 gotas de óleo essencial. Inalar o vapor por 10 a 15 minutos, cobrindo a cabeça com uma toalha. Repetir 2 vezes ao dia. Chá: 3 folhas para 200ml de água quente, infusão de 10 minutos.",
    warning: "⚠️ Não usar inalação ou óleo essencial diretamente em crianças menores de 6 anos (pode causar espasmo laríngeo). Pessoas com asma severa devem usar com cautela.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Eucalyptus_globulus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-057.jpg/800px-Eucalyptus_globulus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-057.jpg"
  },
  {
    name: "Espinheira-santa",
    scientific: "Maytenus ilicifolia",
    tags: ["Digestivo", "Hepático", "Antiúlcera"],
    shortUse: "Trata gastrite, úlceras gástricas e problemas do fígado.",
    uses: "A espinheira-santa é uma planta nativa brasileira com uso secular no tratamento de problemas gástricos. Tem comprovada ação antiácida, cicatrizante de mucosas e protetora do estômago. É indicada para gastrite, úlcera péptica, azia e má digestão. Também auxilia na saúde do fígado e possui leve ação diurética.",
    how: "Chá: 1 colher de sopa das folhas secas para 200ml de água quente. Infusão de 10 a 15 minutos. Tomar 1 xícara 30 minutos antes das refeições, 3 vezes ao dia. Tratamentos prolongados devem ter acompanhamento profissional.",
    warning: "⚠️ Contraindicada durante a gravidez e amamentação. Uso contínuo por mais de 60 dias deve ser monitorado.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Maytenus_ilicifolia_2.jpg/800px-Maytenus_ilicifolia_2.jpg"
  },
  {
    name: "Erva-doce",
    scientific: "Pimpinella anisum",
    tags: ["Digestivo", "Respiratório", "Cólica"],
    shortUse: "Alivia cólicas, gases, tosse e problemas digestivos em geral.",
    uses: "A erva-doce (anis) é muito usada para aliviar gases intestinais, cólicas em adultos e bebês (com cuidado nas doses), espasmos digestivos e náuseas. No sistema respiratório, atua como expectorante e suaviza a irritação da garganta. Também é usada para estimular a produção de leite materno (galactagoga).",
    how: "Chá: 1 colher de chá das sementes (levemente amassadas) para 200ml de água quente. Infusão de 10 minutos, tampar. Tomar após as refeições para gases e digestão. Para bebês com cólica, usar dose reduzida (1 colher de chá) — sempre consultar pediatra.",
    warning: "⚠️ Não confundir com erva-doce de jardim (funcho). Alérgicos ao anis devem evitar. Doses excessivas podem ser tóxicas. Não usar em bebês sem orientação médica.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Pimpinella_anisum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-232.jpg/800px-Pimpinella_anisum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-232.jpg"
  }
];
