// import passport from "passport";
// import GoogleStrategy from "passport-google-oauth20";
// import GitHubStrategy from "passport-github2";
// import UserModel from "../model/UserModel.js";

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "/auth/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       const email = profile.emails[0].value;
//       let user = await UserModel.findOne({ email });

//       if (!user) {
//         user = await UserModel.create({
//           username: profile.displayName,
//           email,
//           password: null,
//         });
//       }
//       return done(null, user);
//     }
//   )
// );

// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       callbackURL: "/auth/github/callback",
//     },
//     async (accessToken, refresh, profile, done) => {
//       const email = profile.emails?.[0]?.value || `${profile.id}@github.com`;
//       let user = await UserModel.findOne({ email });

//       if (!user) {
//         user = await UserModel.create({
//           username: profile.username,
//           email,
//           password: null,
//         });
//       }
//       return done(null, user);
//     }
//   )
// );

// passport.serializeUser((user, done) => done(null, user.id));
// passport.deserializeUser((id, done) => done(null, id));

// export default passport;