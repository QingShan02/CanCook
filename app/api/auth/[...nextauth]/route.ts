import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { staffService } from "../../service/staff";
import FacebookProvider from "next-auth/providers/facebook";
import { log } from "console";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = await staffService.login({ email: credentials.username, password: credentials.password })

                // If no error and we have user data, return it
                if (user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        }),
        FacebookProvider({
            clientId: '811313860713154',
            clientSecret: '40171964867db85234427500ece561ae',
            name: 'facebook'

        })
    ],
    session: {
        strategy: "jwt"

    }, debug: true,
    pages: {
        signIn: "/loginAdmin"
    },
    callbacks: {
    },
    secret: process.env.NEXTAUTH_SECRET,


});
export { handler as GET, handler as POST }