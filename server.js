const AdminBro = require("admin-bro"),
  AdminBroExpress = require("@admin-bro/express"),
  AdminBroSequelize = require("@admin-bro/sequelize"),
  resources = require("./src/resources"),
  sequelize = require("./src/config/db"),
  express = require("express"),
  bcrypt = require("bcrypt"),
  Admins = require("./src/models/admins"),
  app = express(),
  { customTranslation } = require("./src/translations");

AdminBro.registerAdapter(AdminBroSequelize);

const run = async () => {
  try {
    const adminBro = new AdminBro({
      Databases: [sequelize],
      rootPath: "/admin",
      branding: {
        logo: false,
        companyName: "Admin Panel Roketka",
        softwareBrothers: false,
        loginInfoBox: false,
      },
      dashboard: {
        handler: async () => {
          return { some: "output" };
        },
        component: AdminBro.bundle("./src/pages/dashboard"),
      },
      resources,
      locale: {
        translations: customTranslation,
      },
    });

    // const router = AdminBroExpress.buildRouter(adminBro);
    // Build and use a router which will handle all AdminBro routes
    const router = AdminBroExpress.buildAuthenticatedRouter(
      adminBro,
      {
        cookieName: "admin-bro",
        cookiePassword: "asfh2jk5435fdh",
        authenticate: async (email, password) => {
          // const salt = await bcrypt.genSalt(10);
          // const hash = await bcrypt.hash(password, salt);
          // console.log(hash)

          const admin = await Admins.findOne({ email, password });
          if (admin) {
            const matched = await bcrypt.compare(
              password,
              admin.encryptedPassword
            );
            if (matched) {
              return admin;
            }
          }
          return false;
        },
      },
      null,
      {
        resave: false,
        saveUninitialized: true,
      }
    );

    app.use(adminBro.options.rootPath, router);

    const PORT = process.env.PORT || 3004;
    app.listen(PORT, () => {
      console.log(
        "Application is up and running under localhost:" + PORT + "/admin",
        PORT
      );
    });
  } catch (error) {
    console.log(error);
  }
};

run();
