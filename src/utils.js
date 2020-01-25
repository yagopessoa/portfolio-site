export const getImageList = (folderName, qtd = 1) => {
  let imageList = [];
  for (let index = 0; index < qtd; index++) {
    imageList.push(`images/${folderName}/${index + 1}.png`);
  }
  return [...imageList];
};

export const PROJECTS = [
  {
    title: 'Fin',
    description:
      'Aplicativo de controle pessoal de finanças. Registre todos os gastos e veja uma previsão de limite de gasto diário ao longo do mês. (usuário teste: teste@teste.com / senha: 123456)',
    url: 'https://daily-finance.netlify.com/',
    imageList: getImageList('Fin', 4),
    isMobile: true
  },
  {
    title: 'Fellowship of The Game',
    description:
      'Site criado para o grupo de extensão Fellowship of The Game (FOG) da USP de São Carlos.',
    url: 'https://fog-new.netlify.com/',
    imageList: getImageList('Fog', 4)
    ,
    isMobile: false
  },
  {
    title: 'Widget de Notícias',
    description:
      'Aplicativo simples que consulta uma API pública de notícias e lista as últimas notícias do dia, com filtro por fonte.',
    url: 'https://widget-noticias.netlify.com/',
    imageList: getImageList('WidgetNoticias', 2),
    isMobile: false
  },
  {
    title: 'Very Useful Tools to Remember',
    description:
      'Site exemplo de um simples repositório de ferramentas, com filtro por texto ou tag.',
    url: 'https://yago-vuttr.netlify.com/',
    imageList: getImageList('Vuttr', 4),
    isMobile: false
  },
  {
    title: 'The Startup Fest',
    description:
      'Aplicativo mobile para avaliação e ranking de Startups em um evento de exposição, de acordo com cada critério.',
    imageList: getImageList('StartupFest', 4),
    isMobile: true
  }
];
