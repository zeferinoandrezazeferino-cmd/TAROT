import axios from 'axios';
import 'dotenv/config';
import fs from 'fs';
import path from 'path';

// Configurações vindas do arquivo .env
const {
  META_ACCESS_TOKEN,
  IG_ACCOUNT_ID,
  GITHUB_RAW_BASE_URL, // Ex: https://raw.githubusercontent.com/usuario/repo/main
} = process.env;

// Caminho local onde as imagens estão guardadas
const imagesDir = path.resolve(process.cwd(), 'artifacts/instagram');
const API_VERSION = 'v21.0';
const BASE_URL = `https://graph.instagram.com/${API_VERSION}`;

/**
 * Função para gerar uma legenda (Pode ser conectada a uma IA depois)
 */
function generateCaption(imageName) {
  const captions = {
    'post1.jpg': `O tarot não é sentença. Não é show. Não é “o que vai acontecer com você”.

É um baralho e uma conversa. Setenta e oito cartas que ajudam a nomear o que já está atravessando o momento — o que se repete, o que trava, o que pede um próximo passo.

Na mesa, a carta não decide por você. Ela abre foco. Você fala, eu escuto, a gente lê juntas.

Leitura adulta, sem teatro e sem pressa. Presencial em São Paulo e online.

Quer agendar? Me chama no WhatsApp.

#tarot #tarotsp #andrezazeferino #leituradetarot`,
    'feed-baralho.jpg': 'Uma mesa posta é um convite à clareza. O que pede para ser visto hoje? Agende sua leitura no link da bio. 🃏✨ #tarot #tarotsp #clareza',
    'feed-mesa.jpg': 'Não leio o futuro como destino. Leio o presente com mais nitidez — e isso já muda o que vem depois. Sessões disponíveis esta semana. 🕯️ #tarot #autoconhecimento #caminho',
    'feed-leque.jpg': 'Transições exigem coragem para olhar o que está fora de foco. A sessão é uma conversa, sem pressa. Vamos abrir as cartas? 🌿 #tarotcontemporaneo #transição',
  };

  return captions[imageName] || 'O que pede para ser visto. Leituras presenciais em SP e online. Agende pelo WhatsApp. ✨ #tarot';
}

/**
 * Função principal para postar no Instagram
 */
async function postToInstagram() {
  if (!META_ACCESS_TOKEN || !IG_ACCOUNT_ID || !GITHUB_RAW_BASE_URL) {
    console.error('❌ ERRO: Faltam variáveis de ambiente (META_ACCESS_TOKEN, IG_ACCOUNT_ID, GITHUB_RAW_BASE_URL).');
    process.exit(1);
  }

  try {
    // 1. Ler as imagens disponíveis
    const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg'));
    
    if (files.length === 0) {
      console.log('Nenhuma imagem nova encontrada na pasta.');
      return;
    }

    // 2. Escolher a primeira imagem (ou aleatória)
    const selectedImage = files[Math.floor(Math.random() * files.length)];
    const caption = generateCaption(selectedImage);
    
    // O Instagram Graph API exige uma URL pública da imagem.
    // Usaremos a URL raw do GitHub onde esse repositório estará hospedado.
    const imageUrl = `${GITHUB_RAW_BASE_URL}/artifacts/instagram/${selectedImage}`;

    console.log(`📸 Preparando post para a imagem: ${selectedImage}`);
    console.log(`🔗 URL Pública: ${imageUrl}`);
    console.log(`📝 Legenda: "${caption}"`);

    // 3. Criar o Container de Mídia no Instagram
    console.log('⏳ Criando container de mídia na Meta...');
    const containerRes = await axios.post(`${BASE_URL}/${IG_ACCOUNT_ID}/media`, null, {
      params: {
        image_url: imageUrl,
        caption: caption,
        access_token: META_ACCESS_TOKEN
      }
    });

    const creationId = containerRes.data.id;
    console.log(`✅ Container criado com ID: ${creationId}`);

    // 4. Publicar o Container
    console.log('⏳ Publicando no feed...');
    const publishRes = await axios.post(`${BASE_URL}/${IG_ACCOUNT_ID}/media_publish`, null, {
      params: {
        creation_id: creationId,
        access_token: META_ACCESS_TOKEN
      }
    });

    console.log(`🎉 POST PUBLICADO COM SUCESSO! ID do Post: ${publishRes.data.id}`);

  } catch (error) {
    console.error('❌ ERRO AO PUBLICAR NO INSTAGRAM:');
    if (error.response) {
      console.error(JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error.message);
    }
    process.exit(1);
  }
}

postToInstagram();
