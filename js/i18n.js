// ============================================================
// TamaWhere Website — Internationalization (i18n) Module
// Languages: pt (Português do Brasil) & en (English)
// ============================================================

const translations = {
  pt: {
    // Nav
    nav_features: "Recursos",
    nav_screenshots: "Telas",
    nav_creatures: "TamaDex",
    nav_tamapacks: "TamaPacks",
    nav_downloads: "Download Pack",
    nav_custom_pet: "Pet Real no Jogo",
    nav_download_app: "Baixar o Jogo",

    // Hero
    hero_badge: "🐾 O PRIMEIRO TAMAGOTCHI REAL NO SEU PULSO E SMARTPHONE",
    hero_title: "Seu Tamagotchi. Sua Aventura. Sempre com Você!",
    hero_desc: "Uma engine viva de bichinhos virtuais com pixel art nostálgica, sistema profundo de evolução, minigames e sincronização total entre Wear OS e Android.",
    hero_cta_play: "Disponível no Google Play",
    hero_cta_dex: "Conhecer Criaturas",
    stat_creatures: "90+ Criaturas",
    stat_moddable: "100% Modificável",
    stat_devices: "Wear OS & Mobile",
    stat_fair: "Zero Pay-to-Win",

    // Features
    features_tag: "RECURSOS DO JOGO",
    features_title: "Nostalgia dos Anos 90 com a Tecnologia de Hoje",
    features_subtitle: "Toda a magia clássica dos bichinhos virtuais, reinventada para funcionar no seu pulso e no seu bolso.",
    feat_care_title: "Cuide & Alimente",
    feat_care_desc: "Alimente com comidas gostosas, dê banho, limpe as sujeiras e cure doenças. Monitore fome, humor, energia e peso em tempo real com lembretes inteligentes.",
    feat_games_title: "Minigames Interativos",
    feat_games_desc: "Jogue Pedra-Papel-Tesoura ou colete comidinhas no minigame de queda. Seu companheiro se diverte, ganha experiência e sobe de nível.",
    feat_evo_title: "Linhas Evolutivas",
    feat_evo_desc: "O modo como você cuida determina o destino! Cada criatura possui estágios de crescimento até alcançar formas adultas espetaculares ou lendárias.",
    feat_wear_title: "Wear OS + Celular",
    feat_wear_desc: "Jogue direto na tela redonda do seu smartwatch com tiles e gestos rápidos, ou abra o app no celular para gerenciar seu TamaDex e estatísticas completas.",

    // Screenshots
    screenshots_tag: "INTERFACE DO JOGO",
    screenshots_title: "Design Retrô Cuidadosamente Lapidado",
    screenshots_subtitle: "Veja como a interface foi desenhada tanto para telas grandes de smartphones quanto para mostradores redondos de smartwatches.",
    tab_mobile: "📱 Smartphone",
    tab_wear: "⌚ Smartwatch (Wear OS)",
    sc_mobile_home: "Tela Principal (Cuidado & Status)",
    sc_mobile_tamadex: "TamaDex Completo",
    sc_mobile_selecao: "Seleção de Companheiro",
    sc_mobile_statcard: "Card de Status & Atributos",
    sc_mobile_pupilo: "Interação Direta & Sons",
    sc_mobile_details: "Ficha Técnica da Criatura",
    sc_wear_home: "Visão Geral no Mostrador",
    sc_wear_pupilo: "Alimentando no Pulso",
    sc_wear_tamadex: "TamaDex Otimizado para Relógio",
    sc_wear_selecao: "Troca Rápida de Pet",
    sc_wear_statcard: "Atributos Circulares",
    sc_wear_details: "Detalhes com Gestos de Toque",

    // TamaDex
    tamadex_tag: "CRIATURAS",
    tamadex_title: "Conheça os Astros do TamaWhere",
    tamadex_subtitle: "Apresentamos uma seleção das 33 criaturas mais icônicas do jogo. De companheiros fiéis a lendas mitológicas!",
    filter_all: "Todos",
    filter_normal: "Normal",
    filter_fire: "Fogo",
    filter_water: "Água",
    filter_grass: "Planta",
    filter_psychic: "Psíquico",
    filter_dragon: "Dragão",
    filter_legendary: "Lendários",
    rarity_common: "Comum",
    rarity_rare: "Raro",
    rarity_legendary: "Lendário",
    view_details: "Ver Detalhes",

    // TamaPacks Modding
    packs_tag: "LIBERDADE TOTAL",
    packs_title: "Uma Engine Universal: Crie seus Próprios TamaPacks",
    packs_subtitle: "O TamaWhere não se limita a um único universo. O jogo foi construído como uma engine aberta que permite à comunidade desenhar e carregar qualquer criatura!",
    pack_pillar1_title: "Sprites & Animações",
    pack_pillar1_desc: "Crie animações de repouso, alimentação, banho, alegria e tristeza com seus próprios arquivos de imagem ou GIFs animados.",
    pack_pillar2_title: "Importação em 1 Toque",
    pack_pillar2_desc: "Carregue arquivos .tamapack diretamente do armazenamento ou apenas cole uma URL da web para que o jogo instale tudo sozinho.",
    pack_pillar3_title: "Ecossistema da Comunidade",
    pack_pillar3_desc: "Compartilhe com seus amigos, distribua pacotes temáticos na internet e faça parte da evolução contínua do projeto.",

    // Downloads
    download_tag: "PACOTES OFICIAIS",
    download_title: "Baixe os TamaPacks Gratuitos",
    download_subtitle: "Experimente agora o pacote Gen 1 com todas as 90 criaturas, 540 animações completas e efeitos sonoros retrô.",
    gen1_card_title: "Generation 1 Community Pack",
    gen1_card_desc: "O pacote base completo de lançamento. Contém 90 espécies distintas com linhas evolutivas completas, minigames e compatibilidade total com Android e Wear OS.",
    gen1_badge_size: "Tamanho: ~12.3 MB",
    gen1_badge_creatures: "90 Criaturas",
    gen1_badge_animations: "540+ Animações",
    btn_download_file: "⬇️ Baixar Arquivo .tamapack",
    btn_copy_url: "📋 Copiar URL para o Jogo",
    toast_url_copied: "✅ URL copiada com sucesso! Cole na tela de importação do TamaWhere.",
    how_to_import_title: "Como importar no jogo:",
    import_step1: "1. Abra o TamaWhere no celular ou relógio.",
    import_step2: "2. Vá em Configurações > Gerenciador de TamaPacks.",
    import_step3: "3. Toque em 'Importar Arquivo' (selecione o .tamapack baixado) OU 'Importar por URL' e cole o link direto!",
    disclaimer_title: "Aviso Legal e Propriedade Intelectual:",
    disclaimer_text: "Os TamaPacks são pacotes modulares criados de fã para fãs. O aplicativo TamaWhere é uma engine de bichinhos virtuais independente e não possui filiação comercial com marcas registradas de terceiros. Todos os pacotes fornecidos gratuitamente pela comunidade respeitam os direitos autorais de seus respectivos criadores artísticos.",

    // Create pack
    create_tag: "SEJA UM CRIADOR",
    create_title: "Construa o seu Próprio Universo",
    create_subtitle: "Quer ver suas próprias criações ou um pacote personalizado ganhando vida no jogo? Nós te ajudamos com a documentação e ferramentas de exportação.",
    create_step1_num: "01",
    create_step1_title: "Desenhe os Sprites",
    create_step1_desc: "Pixel art em grades de 32x32, 48x48 ou 64x64 com as posturas básicas de repouso, alimentação e celebração.",
    create_step2_num: "02",
    create_step2_title: "Defina as Regras",
    create_step2_desc: "Configure status de fome, taxas de evolução, nomes e tipos em um arquivo JSON simples e intuitivo.",
    create_step3_num: "03",
    create_step3_title: "Empacote e Jogue",
    create_step3_desc: "Compacte os arquivos em um container .tamapack e envie para o seu aparelho ou publique na comunidade.",
    btn_contact_creator: "Falar com a Equipe de Criação",

    // Custom Pet
    custom_tag: "⭐ EXPERIÊNCIA EXCLUSIVA",
    custom_title: "Seu Bichinho Real Dentro do Jogo!",
    custom_subtitle: "Eternize seu melhor amigo de 4 patas como uma criatura jogável no TamaWhere, desenhado à mão em pixel art com 3 estágios evolutivos!",
    custom_badge_vip: "Feito sob Medida para Você",
    custom_feat1: "Pixel art personalizada fiel às características únicas do seu pet",
    custom_feat2: "Linha evolutiva completa: Filhote (Baby) ➔ Jovem (Mid) ➔ Adulto Real",
    custom_feat3: "Animações completas (idle, comendo, brincando, dormindo)",
    custom_feat4: "Disponível para colocar no seu relógio e celular para sempre!",
    custom_gallery_title: "Conheça os Pets Reais que Já Estão no Jogo:",
    custom_gallery_subtitle: "Veja a foto real ao lado da sua linha evolutiva completa em pixel art!",
    custom_stage_baby: "1º Estágio (Baby)",
    custom_stage_mid: "2º Estágio (Jovem)",
    custom_stage_final: "Forma Final (Real)",
    custom_real_photo: "Foto Real",
    custom_pixel_art: "Pixel Art",
    custom_cta_title: "Quer o seu pet imortalizado no TamaWhere?",
    custom_cta_desc: "Transformamos a foto do seu cachorrinho, gatinho ou outro animal de estimação em um personagem exclusivo com todas as animações.",
    custom_pricing_note: "Planos para inclusão em pacote público da comunidade ou arquivo exclusivo privado.",
    btn_quote_custom: "Solicitar Orçamento Personalizado",

    // Footer
    footer_tagline: "O universo nostálgico dos bichinhos virtuais, reinventado para o seu pulso e smartphone.",
    footer_quick_links: "Navegação Rápida",
    footer_legal: "Informações Legais",
    footer_privacy: "Política de Privacidade",
    footer_play_store: "Google Play Store",
    footer_contact: "Contato & Suporte",
    footer_rights: "Todos os direitos reservados. Feito com paixão por David Kalil Braga."
  },

  en: {
    // Nav
    nav_features: "Features",
    nav_screenshots: "Screenshots",
    nav_creatures: "TamaDex",
    nav_tamapacks: "TamaPacks",
    nav_downloads: "Download Pack",
    nav_custom_pet: "Real Pet in Game",
    nav_download_app: "Get the Game",

    // Hero
    hero_badge: "🐾 THE FIRST TRUE TAMAGOTCHI ON YOUR WRIST & SMARTPHONE",
    hero_title: "Your Tamagotchi. Your Adventure. Always With You!",
    hero_desc: "A living virtual pet engine featuring nostalgic pixel art, deep evolutionary paths, fun minigames, and seamless synchronization between Wear OS and Android.",
    hero_cta_play: "Get it on Google Play",
    hero_cta_dex: "Meet the Creatures",
    stat_creatures: "90+ Creatures",
    stat_moddable: "100% Moddable",
    stat_devices: "Wear OS & Mobile",
    stat_fair: "Zero Pay-to-Win",

    // Features
    features_tag: "GAMEPLAY HIGHLIGHTS",
    features_title: "90s Nostalgia Powered by Modern Tech",
    features_subtitle: "All the classic magic of virtual pets, reinvented right on your wrist and in your pocket.",
    feat_care_title: "Care & Feed",
    feat_care_desc: "Feed tasty meals, give warm baths, clean messes, and treat illnesses. Monitor hunger, mood, energy, and weight in real time with smart alerts.",
    feat_games_title: "Interactive Minigames",
    feat_games_desc: "Play Rock-Paper-Scissors or catch tasty treats in the fruit fall minigame. Your companion stays joyful, earns XP, and levels up.",
    feat_evo_title: "Evolutionary Paths",
    feat_evo_desc: "The love and care you provide shapes your pet's destiny! Each creature features multiple growth stages up to spectacular or legendary forms.",
    feat_wear_title: "Wear OS + Mobile",
    feat_wear_desc: "Play directly on your smartwatch's round display with tiles and quick swipe gestures, or open the smartphone app for full stats and your TamaDex.",

    // Screenshots
    screenshots_tag: "USER INTERFACE",
    screenshots_title: "Crafted Retro Aesthetics",
    screenshots_subtitle: "Explore how the interface was meticulously tailored for both expansive smartphone screens and compact smartwatch faces.",
    tab_mobile: "📱 Smartphone",
    tab_wear: "⌚ Smartwatch (Wear OS)",
    sc_mobile_home: "Home Screen (Care & Status)",
    sc_mobile_tamadex: "Comprehensive TamaDex",
    sc_mobile_selecao: "Companion Selection",
    sc_mobile_statcard: "Attributes & Stat Card",
    sc_mobile_pupilo: "Direct Interaction & Audio",
    sc_mobile_details: "Species Detailed Dossier",
    sc_wear_home: "Watch Face Overview",
    sc_wear_pupilo: "Feeding from your Wrist",
    sc_wear_tamadex: "Watch-Optimized TamaDex",
    sc_wear_selecao: "Quick Pet Switcher",
    sc_wear_statcard: "Circular Stat Gauges",
    sc_wear_details: "Touch Gesture Controls",

    // TamaDex
    tamadex_tag: "CREATURES",
    tamadex_title: "Meet the Stars of TamaWhere",
    tamadex_subtitle: "Explore a curated selection of 33 of the most iconic creatures in the game. From loyal early buddies to mystical legendary beasts!",
    filter_all: "All",
    filter_normal: "Normal",
    filter_fire: "Fire",
    filter_water: "Water",
    filter_grass: "Grass",
    filter_psychic: "Psychic",
    filter_dragon: "Dragon",
    filter_legendary: "Legendaries",
    rarity_common: "Common",
    rarity_rare: "Rare",
    rarity_legendary: "Legendary",
    view_details: "View Details",

    // TamaPacks Modding
    packs_tag: "UNMATCHED FREEDOM",
    packs_title: "An Open Engine: Build Your Own TamaPacks",
    packs_subtitle: "TamaWhere is not constrained to a single universe. The game is an open platform allowing the community to design and import any creature imaginable!",
    pack_pillar1_title: "Sprites & Animations",
    pack_pillar1_desc: "Create custom idle, feeding, bathing, happy, and sad animations using simple image strips or animated GIFs.",
    pack_pillar2_title: "1-Tap Import",
    pack_pillar2_desc: "Load .tamapack files straight from your device storage or paste a direct web link for the app to install automatically.",
    pack_pillar3_title: "Community Ecosystem",
    pack_pillar3_desc: "Share packs with friends, distribute thematic packs across the web, and help shape the future of this growing universe.",

    // Downloads
    download_tag: "OFFICIAL PACKS",
    download_title: "Download Free TamaPacks",
    download_subtitle: "Get started immediately with our first official community release: the complete Generation 1 Pack.",
    gen1_card_title: "Generation 1 Community Pack",
    gen1_card_desc: "The definitive launch pack. Contains 90 distinct species with complete evolutionary lines, minigames, and full compatibility across Android and Wear OS.",
    gen1_badge_size: "Size: ~12.3 MB",
    gen1_badge_creatures: "90 Creatures",
    gen1_badge_animations: "540+ Animations",
    btn_download_file: "⬇️ Download .tamapack File",
    btn_copy_url: "📋 Copy URL for App",
    toast_url_copied: "✅ URL copied to clipboard! Paste it into TamaWhere's pack importer.",
    how_to_import_title: "How to import in the game:",
    import_step1: "1. Open TamaWhere on your smartphone or watch.",
    import_step2: "2. Navigate to Settings > TamaPack Manager.",
    import_step3: "3. Tap 'Import File' (pick the downloaded .tamapack) OR 'Import from URL' and paste the link!",
    disclaimer_title: "Legal Notice & Intellectual Property:",
    disclaimer_text: "TamaPacks are community modular packs created by fans for fans. The TamaWhere application is an independent virtual pet engine and has no commercial affiliation with third-party trademarks. All freely distributed community packs respect the copyright of their respective artistic creators.",

    // Create pack
    create_tag: "BE A CREATOR",
    create_title: "Build Your Very Own Universe",
    create_subtitle: "Want to bring your artistic vision or a custom pack to life in the game? We provide full documentation and export tools.",
    create_step1_num: "01",
    create_step1_title: "Draw the Sprites",
    create_step1_desc: "Craft pixel art in 32x32, 48x48, or 64x64 grids covering basic idle, feeding, and celebration animations.",
    create_step2_num: "02",
    create_step2_title: "Define the Rules",
    create_step2_desc: "Configure hunger decay, evolution thresholds, names, and elemental types in an intuitive JSON file.",
    create_step3_num: "03",
    create_step3_title: "Pack & Play",
    create_step3_desc: "Bundle the files into a .tamapack package and transfer it to your device or distribute to the community.",
    btn_contact_creator: "Talk to the Creator Team",

    // Custom Pet
    custom_tag: "⭐ EXCLUSIVE SERVICE",
    custom_title: "Your Real-Life Pet Inside the Game!",
    custom_subtitle: "Immortalize your furry best friend as a playable companion in TamaWhere, hand-drawn in pixel art with 3 evolution stages!",
    custom_badge_vip: "Tailor-Made Just for You",
    custom_feat1: "Custom pixel art true to your pet's distinctive look and personality",
    custom_feat2: "Full evolutionary path: Puppy/Kitten (Baby) ➔ Teen (Mid) ➔ Real Adult Pet",
    custom_feat3: "Full animation suite (idle, eating, playing, sleeping)",
    custom_feat4: "Playable on both your smartwatch and phone forever!",
    custom_gallery_title: "Real Pets Already Living in the Game:",
    custom_gallery_subtitle: "Explore the real photo alongside its complete 3-stage pixel art evolution!",
    custom_stage_baby: "Stage 1 (Baby)",
    custom_stage_mid: "Stage 2 (Teen)",
    custom_stage_final: "Final Form (Real)",
    custom_real_photo: "Real Photo",
    custom_pixel_art: "Pixel Art",
    custom_cta_title: "Want your pet immortalized in TamaWhere?",
    custom_cta_desc: "We transform your dog, cat, or any pet photo into an exclusive virtual companion equipped with all animations.",
    custom_pricing_note: "Flexible options for inclusion in our public community pack or a private, exclusive file.",
    btn_quote_custom: "Request Custom Pet Quote",

    // Footer
    footer_tagline: "The nostalgic universe of virtual pets, reimagined for your wrist and smartphone.",
    footer_quick_links: "Quick Links",
    footer_legal: "Legal Information",
    footer_privacy: "Privacy Policy",
    footer_play_store: "Google Play Store",
    footer_contact: "Contact & Support",
    footer_rights: "All rights reserved. Crafted with passion by David Kalil Braga."
  }
};

class I18nManager {
  constructor() {
    this.currentLang = this.detectLanguage();
  }

  detectLanguage() {
    const saved = localStorage.getItem('tamawhere_lang');
    if (saved && (saved === 'pt' || saved === 'en')) {
      return saved;
    }
    const navLang = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    if (navLang.toLowerCase().startsWith('pt')) {
      return 'pt';
    }
    return 'en';
  }

  setLanguage(lang) {
    if (lang !== 'pt' && lang !== 'en') return;
    this.currentLang = lang;
    localStorage.setItem('tamawhere_lang', lang);
    this.applyTranslations();
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    
    // Dispatch custom event for dynamic components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'pt' ? 'en' : 'pt';
    this.setLanguage(nextLang);
    return nextLang;
  }

  t(key) {
    const dict = translations[this.currentLang] || translations.en;
    return dict[key] || key;
  }

  applyTranslations() {
    const dict = translations[this.currentLang] || translations.en;

    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Translate attributes
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const raw = el.getAttribute('data-i18n-attr');
      raw.split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key && dict[key]) {
          el.setAttribute(attr, dict[key]);
        }
      });
    });

    // Update banner src
    const bannerImg = document.getElementById('heroBannerImg');
    if (bannerImg) {
      bannerImg.src = this.currentLang === 'pt' 
        ? 'img/banners/banner_pt.png' 
        : 'img/banners/banner_en.png';
    }

    // Update toggle button text/flag
    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
      langToggleBtn.innerHTML = this.currentLang === 'pt'
        ? '<span class="flag-icon">🇧🇷</span> PT'
        : '<span class="flag-icon">🇺🇸</span> EN';
    }
  }
}

window.i18n = new I18nManager();
