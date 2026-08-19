function decodeJWT(token) {
    if (!token) return null;

    // 1. Split the token into Header, Payload, and Signature
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    // 2. Format the Base64URL string to standard Base64
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    // 3. Decode Base64 string to a JSON string, then parse it into an object
    const jsonPayload = decodeURIComponent(
        window.atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );

    return JSON.parse(jsonPayload);
}

module.exports = decodeJWT;