import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';
import 'dotenv/config';
import path from 'path';

async function uploadAndPost() {
  try {
    const imagePath = path.resolve(process.cwd(), 'artifacts/instagram/post1.jpg');
    console.log('⏳ Fazendo upload temporário da imagem para gerar link público...');
    
    const form = new FormData();
    form.append('reqtype', 'fileupload');
    form.append('fileToUpload', fs.createReadStream(imagePath));

    const uploadRes = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders(),
    });
    
    const publicUrl = uploadRes.data;
    console.log(`✅ Upload concluído! URL: ${publicUrl}`);

    const caption = `O tarot não é sentença. Não é show. Não é “o que vai acontecer com você”.

É um baralho e uma conversa. Setenta e oito cartas que ajudam a nomear o que já está atravessando o momento — o que se repete, o que trava, o que pede um próximo passo.

Na mesa, a carta não decide por você. Ela abre foco. Você fala, eu escuto, a gente lê juntas.

Leitura adulta, sem teatro e sem pressa. Presencial em São Paulo e online.

Quer agendar? Me chama no WhatsApp.

#tarot #tarotsp #ranyacartomante #leituradetarot`;

    const { META_ACCESS_TOKEN, IG_ACCOUNT_ID } = process.env;
    const BASE_URL = `https://graph.instagram.com/v21.0`;

    console.log('⏳ Criando container de foto no Instagram...');
    const containerRes = await axios.post(`${BASE_URL}/${IG_ACCOUNT_ID}/media`, null, {
      params: {
        image_url: publicUrl,
        caption: caption,
        access_token: META_ACCESS_TOKEN
      }
    });

    const creationId = containerRes.data.id;
    console.log(`✅ Container criado na Meta: ${creationId}`);

    console.log('⏳ Publicando no Feed do Instagram...');
    const publishRes = await axios.post(`${BASE_URL}/${IG_ACCOUNT_ID}/media_publish`, null, {
      params: {
        creation_id: creationId,
        access_token: META_ACCESS_TOKEN
      }
    });

    console.log(`🎉 POST PUBLICADO COM SUCESSO! ID: ${publishRes.data.id}`);
    console.log('Abra o Instagram da Ranya para conferir!');
  } catch(e) {
    console.error('❌ ERRO:', e.response ? e.response.data : e.message);
  }
}
uploadAndPost();
