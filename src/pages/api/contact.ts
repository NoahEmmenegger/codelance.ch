import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const result = await send({
        title: 'New contact form submission!',
        fields: [
            {
                name: 'Last name',
                value: req.body.lastName || 'N/A',
            },
            {
                name: 'Email',
                value: req.body.email || 'N/A',
            },
            {
                name: 'Message',
                value: req.body.message || 'N/A',
            },
        ],
        color: '2488901',
    });
    res.send(result.data);
}

async function send(message: any) {
    return axios.post(
        `https://discord.com/api/webhooks/${process.env.DISCORD_WEBHOOK_CONTACT_ID}/${process.env.DISCORD_WEBHOOK_CONTACT_TOKEN}`,
        { embeds: [message] },
        {
            headers: { 'content-type': 'application/json' },
        }
    );
}
