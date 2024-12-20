import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

console.log(body, 'boy')

    const formData = new FormData();
    formData.append('name', body.name);
    formData.append('phone', body.phone);
    formData.append('service', body.service);
    formData.append("access_key", `${process.env.WEB3FORMS_API_KEY as string}`);


    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
 
    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
    } else {
      console.error('Error:', data);
      return NextResponse.json({ error: data.message || 'Unknown error' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to submit the form' }, { status: 500 });
  }
}
