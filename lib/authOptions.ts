import { loginUser } from "@/actions/auth/loginUser";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { type Session } from "next-auth";
import { type JWT } from "next-auth/jwt";
const authOptions: AuthOptions = {
  session: {
    strategy: "jwt", //(1)
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Log In",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const payload = {
          username: String(credentials?.username),
          password: String(credentials?.password),
        };
        const d = await loginUser(payload);
        if (d.success) {
          // Any object returned will be saved in `user` property of the JWT
          delete d["token"];
          return d;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      // Add additional fields to the token
      if (user) {
        token.user_id = String(user?.user_id);
        token.image_url = String(user?.image_url);
        token.first_name = String(user?.first_name);
        token.last_name = String(user?.last_name);
        token.phone_no = String(user?.phone_no);
      }
      return token;
    },
    session: async ({ session, token }: { session: Session; token: JWT }) => {
      // Add additional fields to the session object
      session.user.user_id = String(token?.user_id);
      session.user.image_url = String(token?.image_url);
      session.user.first_name = String(token?.first_name);
      session.user.last_name = String(token?.last_name);
      session.user.phone_no = String(token?.phone_no);
      return session;
    },
  },
};

export default authOptions;
