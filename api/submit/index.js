export default async function (context, req) {
    const token = req.body?.get?.('cf-turnstile-response') || req.body?.['cf-turnstile-response'];
    if (!token) {
      return { status: 400, body: { message: 'Missing Turnstile token' } };
    }
  
    const secret = process.env.TURNSTILE_SECRET_KEY;
    const remoteip = req.headers['x-forwarded-for'] || 'unknown';
  
    try {
      // Validate token with Cloudflare
      const formData = new URLSearchParams();
      formData.append('secret', secret);
      formData.append('response', token);
      formData.append('remoteip', remoteip);
  
      const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData,
      });
  
      const result = await verifyResponse.json();
  
      if (result.success) {
        // ✅ Token valid — process form data
        return { status: 200, body: { message: 'Form submission successful' } };
      } else {
        // ❌ Token invalid
        return { status: 400, body: { message: 'Turnstile verification failed', errors: result['error-codes'] } };
      }
    } catch (err) {
      console.error('Turnstile validation error:', err);
      return { status: 500, body: { message: 'Server error validating Turnstile' } };
    }
  }