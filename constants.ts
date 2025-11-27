import { Member, Project, Translation } from './types';

export const translations: Record<string, Translation> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Quem Somos',
      projects: 'Projetos',
      team: 'Equipa',
      events: 'Eventos',
      contact: 'Contacto',
    },
    hero: {
      title: 'Tecnologia que transforma',
      subtitle: 'Grupo de estudantes de Engenharia Informática & Tecnologia da UMUM desenvolvendo soluções reais para Moçambique.',
      ctaPrimary: 'Ver Projetos',
      ctaSecondary: 'Conhecer a Equipa',
    },
    about: {
      title: 'Quem Somos',
      description: 'A Ku Kula Devz é um grupo de estudantes da UMUM dedicado a desenvolver soluções digitais inovadoras para problemas reais em Moçambique.',
      mission: 'Desenvolver tecnologia acessível e impactante.',
      vision: 'Ser referência em inovação tecnológica universitária em Moçambique.',
      values: 'Inovação, Colaboração, Impacto Social, Excelência.',
    },
    projects: {
      title: 'Nossos Projetos',
      viewDetails: 'Ver Detalhes',
    },
    stats: {
      farmers: 'Agricultores Beneficiados',
      members: 'Membros Ativos',
      projects: 'Projetos Desenvolvidos',
    },
    team: {
      title: 'Nossa Equipa',
      role: 'Função',
    },
    events: {
      title: 'Galeria & Eventos',
    },
    contact: {
      title: 'Fale Connosco',
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      projects: 'Projects',
      team: 'Team',
      events: 'Events',
      contact: 'Contact',
    },
    hero: {
      title: 'Technology that transforms',
      subtitle: 'A group of Computer Engineering & Technology students from UMUM developing real solutions for Mozambique.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Meet the Team',
    },
    about: {
      title: 'About Us',
      description: 'Ku Kula Devz is a group of UMUM students dedicated to developing innovative digital solutions for real-world problems in Mozambique.',
      mission: 'Develop accessible and impactful technology.',
      vision: 'To be a reference in university technological innovation in Mozambique.',
      values: 'Innovation, Collaboration, Social Impact, Excellence.',
    },
    projects: {
      title: 'Our Projects',
      viewDetails: 'View Details',
    },
    stats: {
      farmers: 'Farmers Impacted',
      members: 'Active Members',
      projects: 'Projects Developed',
    },
    team: {
      title: 'Our Team',
      role: 'Role',
    },
    events: {
      title: 'Gallery & Events',
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
    },
  },
};

export const teamMembers: Member[] = [
  {
    name: "Anselmo Dora Bistiro",
    year: "2º Ano",
    role: "Programador Sênior / Segurança / Web",
    bio: "Especialista em segurança da informação e arquitetura web robusta.",
    image: "https://picsum.photos/300/300?random=1",
  },
  {
    name: "André Augusto Júnior",
    year: "2º Ano",
    role: "Desenvolvimento Web",
    bio: "Focado em criar experiências web modernas e responsivas.",
    image: "https://picsum.photos/300/300?random=2",
  },
  {
    name: "Anselma Tiburcio",
    year: "3º Ano",
    role: "Front-end / Mobile",
    bio: "Paixão por UI/UX e desenvolvimento de aplicações móveis intuitivas.",
    image: "https://picsum.photos/300/300?random=3",
  },
  {
    name: "Aquilivio Maria",
    year: "3º Ano",
    role: "Redes / Infraestrutura",
    bio: "Garante que nossas soluções estejam sempre conectadas e seguras.",
    image: "https://picsum.photos/300/300?random=4",
  },
  {
    name: "Edson Crimilido",
    year: "2º Ano",
    role: "Back-end",
    bio: "O motor por trás das nossas aplicações, lidando com dados complexos.",
    image: "https://picsum.photos/300/300?random=5",
  },
  {
    name: "Edilson Ricardo Cuamba",
    year: "2º Ano",
    role: "Mobile / Web",
    bio: "Versátil em plataformas cruzadas, unindo web e mobile.",
    image: "https://picsum.photos/300/300?random=6",
  },
  {
    name: "Isidro Helder Guiamba",
    year: "2º Ano",
    role: "Algoritmos / Lógica",
    bio: "Resolve problemas complexos com lógica eficiente e limpa.",
    image: "https://picsum.photos/300/300?random=7",
  },
  {
    name: "Shelton Tomas",
    year: "2º Ano",
    role: "Desenvolvimento de Sistemas",
    bio: "Focado na arquitetura geral e integração de sistemas.",
    image: "https://picsum.photos/300/300?random=8",
  }
];

export const projects: Project[] = [
  {
    id: "iagromoz",
    title: "IAGROMOZ",
    description: "Plataforma inteligente de apoio ao agricultor. Conecta produtores rurais a recursos tecnológicos para maximizar colheitas.",
    tags: ["AgriTech", "AI", "Mobile"],
    image: "https://picsum.photos/800/600?random=10",
    featured: false
  },
  {
    id: "moz-services",
    title: "Moz Services",
    description: "Plataforma que conecta trabalhadores autônomos a oportunidades de emprego, facilitando a empregabilidade em Moçambique.",
    tags: ["Marketplace", "Web", "Social"],
    image: "https://picsum.photos/800/600?random=11",
    featured: false
  }
];
