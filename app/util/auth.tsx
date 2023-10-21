import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

export async function getJWTPayload() {
    const cookieStore = cookies();
    const token = cookieStore.get("jwt-token");
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload, protectedHeader } = await jwtVerify(token?.value!, secret);
    return payload;
}