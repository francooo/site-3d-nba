import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      playerName, 
      team, 
      name, 
      email, 
      phone, 
      cep, 
      cityState, 
      color, 
      size, 
      source, 
      observations 
    } = req.body;

    const { data, error } = await resend.emails.send({
      from: '3D Funko NBA <onboarding@resend.dev>',
      to: ['andrewsfranco93@gmail.com'],
      subject: `Novo Pedido - Funko ${playerName}`,
      html: `
        <h2>Novo Pedido de Funko NBA</h2>
        <h3>Dados do Jogador</h3>
        <p><strong>Jogador:</strong> ${playerName}</p>
        <p><strong>Time:</strong> ${team}</p>
        
        <h3>Dados do Cliente</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>CEP:</strong> ${cep}</p>
        <p><strong>Cidade/Estado:</strong> ${cityState}</p>
        
        <h3>Personalização</h3>
        <p><strong>Esquema de Cores:</strong> ${color}</p>
        <p><strong>Tamanho:</strong> ${size}</p>
        <p><strong>Onde nos conheceu:</strong> ${source}</p>
        
        <h3>Observações</h3>
        <p>${observations || 'Nenhuma observação'}</p>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
